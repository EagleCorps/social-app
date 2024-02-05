import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActionIcon,
  Chip,
  Flex,
  Group,
  Popover,
  ScrollArea,
  Tooltip,
  useMantineColorScheme,
  MantineSize,
} from "@mantine/core";
import { IconMoodPlus } from "@tabler/icons-react";
import { getEmojiDataFromNative, init } from "emoji-mart";
import emojiData from "@emoji-mart/data";
import EmojiPicker from "@emoji-mart/react";
import { MutationFunction } from "@apollo/client";

import {
  CommentReactions,
  PostReactions,
  AddCommentReaction_MutationMutationVariables,
  AddPostReaction_MutationMutationVariables,
  DeleteCommentReaction_MutationMutationVariables,
  DeletePostReaction_MutationMutationVariables,
  AddPostReaction_MutationMutation,
  AddCommentReaction_MutationMutation,
  DeletePostReaction_MutationMutation,
  DeleteCommentReaction_MutationMutation,
} from "@/graphql/graphql";
import classes from "./ReactionsSection.module.css";
import { useElementSize } from "@mantine/hooks";

interface ReactionsSectionProps {
  reactions: (Partial<PostReactions> | Partial<CommentReactions>)[];
  userId: string;
  postId?: string;
  commentId?: string;
  disabled?: boolean;
  size?: MantineSize;
  addReaction:
    | MutationFunction<
        AddPostReaction_MutationMutation,
        AddPostReaction_MutationMutationVariables
      >
    | MutationFunction<
        AddCommentReaction_MutationMutation,
        AddCommentReaction_MutationMutationVariables
      >;
  deleteReaction:
    | MutationFunction<
        DeletePostReaction_MutationMutation,
        DeletePostReaction_MutationMutationVariables
      >
    | MutationFunction<
        DeleteCommentReaction_MutationMutation,
        DeleteCommentReaction_MutationMutationVariables
      >;
}

const ReactionsSection: React.FC<ReactionsSectionProps> = ({
  reactions,
  userId,
  postId,
  commentId,
  disabled = false,
  size = "md",
  addReaction,
  deleteReaction,
}) => {
  const { colorScheme } = useMantineColorScheme();
  const { ref: addReactionButtonRef, width: addReactionButtonWidth } =
    useElementSize();

  const [reactionsAggregate, setPostReactionsAggregate] = useState({});
  const [userReactions, setUserReactions] = useState([]);
  const [excludedEmoji, setExcludedEmoji] = useState([]);

  useEffect(() => {
    setPostReactionsAggregate(
      (reactions ?? []).reduce(
        (agg, { reactorId, type }) => ({
          ...agg,
          [type]: {
            count: (agg[type]?.count ?? 0) + 1,
            userHasReacted: agg[type]?.userHasReacted || reactorId === userId,
          },
        }),
        {},
      ),
    );
  }, [reactions]);

  useEffect(() => {
    setUserReactions(
      Object.keys(reactionsAggregate).filter(
        (emoji) => reactionsAggregate[emoji].userHasReacted,
      ),
    );
  }, [reactionsAggregate]);

  useEffect(() => {
    init({ data: emojiData });
  });

  useEffect(() => {
    (async () => {
      const excludedEmojiData = await Promise.all(
        Object.keys(reactionsAggregate).map((emoji) =>
          getEmojiDataFromNative(emoji),
        ),
      );

      setExcludedEmoji(excludedEmojiData.map(({ id }) => id));
    })();
  }, [reactionsAggregate]);

  const handleReactionClick = useCallback(
    (emoji: string) => {
      const shouldBeDeleted = userReactions.includes(emoji);
      if (shouldBeDeleted) {
        deleteReaction({
          variables: { postId, commentId, userId, type: emoji },
        });
      } else {
        addReaction({ variables: { postId, commentId, userId, type: emoji } });
      }
    },
    [userReactions, deleteReaction, addReaction],
  );

  const orderedSizes = useMemo(() => ["sm", "md", "lg", "xl"], []);

  return (
    <Group w="100%">
      <Popover keepMounted withArrow>
        <Popover.Target>
          <Tooltip
            label={
              disabled ? "Reactions can no longer be added" : "Add reaction"
            }
          >
            <ActionIcon
              variant="subtle"
              size={orderedSizes[orderedSizes.indexOf(size) + 1]}
              ref={addReactionButtonRef}
              disabled={disabled}
            >
              <IconMoodPlus />
            </ActionIcon>
          </Tooltip>
        </Popover.Target>
        <Popover.Dropdown p={0} classNames={{ dropdown: classes.emojiPicker }}>
          <EmojiPicker
            data-autofocus
            autoFocus
            data={emojiData}
            exceptEmojis={excludedEmoji}
            maxFrequentRows={0}
            onEmojiSelect={({ native }) => handleReactionClick(native)}
            theme={colorScheme}
          />
        </Popover.Dropdown>
      </Popover>

      <ScrollArea
        w={`calc(100% - ${addReactionButtonWidth}px - var(--mantine-spacing-md) - 2px)`}
        type="hover"
      >
        {Object.keys(reactionsAggregate).length > 0 && (
          <Flex gap="xs" wrap="nowrap">
            {Object.keys(reactionsAggregate).map((emoji) => (
              <Tooltip key={emoji}>
                <Chip
                  variant="light"
                  disabled={disabled}
                  size={size}
                  value={emoji}
                  checked={reactionsAggregate[emoji].userHasReacted}
                  classNames={{
                    label: classes.emojiChipLabel,
                    iconWrapper: classes.emojiChipCheckIconWrapper,
                  }}
                  onClick={() => {
                    handleReactionClick(emoji);
                  }}
                >
                  {`${emoji} ${reactionsAggregate[emoji].count}`}
                </Chip>
              </Tooltip>
            ))}
          </Flex>
        )}
      </ScrollArea>
    </Group>
  );
};

export { ReactionsSection };
