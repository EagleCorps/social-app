import { Suspense, useCallback, useMemo, useState } from "react";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { isNotEmpty, useForm } from "@mantine/form";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";
import {
  ActionIcon,
  Divider,
  Group,
  Indicator,
  Loader,
  Space,
  Stack,
  Text,
  TextInput,
  Timeline,
  Tooltip,
} from "@mantine/core";
import {
  IconCheck,
  IconMessageMinus,
  IconMessagePlus,
  IconMoodUp,
  IconReceiptRefund,
  IconX,
} from "@tabler/icons-react";
import dayjs from "dayjs";
import { useDisclosure, useElementSize } from "@mantine/hooks";

import {
  ConfirmationModal,
  MarkdownPaper,
  ReactionsSection,
  UserSummary,
} from "@/components";
import { getRelativeTime } from "@/utils";

import {
  CommentItem_Query,
  SetCommentIsArchived_Mutation,
  CreateReplyComment_Mutation,
  AddCommentReaction_Mutation,
  DeleteCommentReaction_Mutation,
} from "./CommentItem.graphql";
import classes from "./CommentItem.module.css";

interface CommentItemProps {
  commentId: string;
}

const CommentItem: React.FC<CommentItemProps> = ({ commentId }) => {
  const [replyIsOpen, setReplyIsOpen] = useState(false);
  const [reactionsAreExpanded, setReactionsAreExpanded] = useState(false);
  const { ref: openReactionsButtonRef, width: openReactionsButtonWidth } =
    useElementSize();
  const { ref: openReplyButtonRef, width: openReplyButtonWidth } =
    useElementSize();
  const [
    archiveConfirmationModalIsOpen,
    {
      open: openArchiveConfirmationModal,
      close: closeArchiveConfirmationModal,
    },
  ] = useDisclosure(false);

  const {
    data: {
      user: { id: userId },
    },
  } = useSession();

  const {
    data: {
      comment: {
        body,
        isArchived,
        createdAt,
        updatedAt,
        postId,
        author: { id: authorId },
        commentReactions,
        subjectComments,
      },
    },
  } = useSuspenseQuery(CommentItem_Query, {
    variables: { commentId },
  });

  const [, { refetch }] = useLazyQuery(CommentItem_Query, {
    variables: { commentId },
  });

  const [createComment, { loading: commentIsLoading }] = useMutation(
    CreateReplyComment_Mutation,
    {
      onCompleted: () => refetch(),
    },
  );

  const [addReaction] = useMutation(AddCommentReaction_Mutation, {
    onCompleted: () => refetch(),
  });

  const [deleteReaction] = useMutation(DeleteCommentReaction_Mutation, {
    onCompleted: () => refetch(),
  });

  const form = useForm({
    initialValues: {
      commentBody: "",
    },
    validate: {
      commentBody: isNotEmpty("Comment cannot be empty"),
    },
  });

  const handleCommentSubmit = useCallback(
    form.onSubmit(({ commentBody }) => {
      form.reset();
      setReplyIsOpen(false);
      createComment({
        variables: {
          body: commentBody,
          authorId: userId,
          postId,
          objectCommentId: commentId,
        },
      });
    }),
    [form, createComment],
  );

  const [setCommentIsArchived] = useMutation(SetCommentIsArchived_Mutation, {
    onCompleted: () => refetch(),
  });

  const subjectCommentsExist = useMemo(
    () => subjectComments?.length > 0,
    [subjectComments?.length],
  );

  const timeText = useMemo(() => {
    const createdAtDateTime = dayjs(createdAt);
    const updatedAtDateTime = dayjs(updatedAt);

    return updatedAtDateTime > createdAtDateTime
      ? `updated ${getRelativeTime(updatedAtDateTime)}`
      : getRelativeTime(createdAtDateTime);
  }, [createdAt, updatedAt]);

  return (
    <>
      <ConfirmationModal
        opened={archiveConfirmationModalIsOpen}
        close={closeArchiveConfirmationModal}
        actionText={`${isArchived ? "un" : ""}archive this comment`}
        action={async () => {
          await setCommentIsArchived({
            variables: { commentId, isArchived: !isArchived },
          });
          refetch();
        }}
      />
      <Stack gap="0" w="25em">
        <Group justify="space-between">
          <UserSummary userId={authorId} />
          <Group>
            <Tooltip label={updatedAt}>
              <Text size="xs" c="dimmed">
                {timeText}
              </Text>
            </Tooltip>
            {userId === authorId ? (
              <Tooltip
                label={isArchived ? "Unarchive comment" : "Archive comment"}
              >
                <ActionIcon
                  size="lg"
                  variant="subtle"
                  color="red"
                  onClick={() => openArchiveConfirmationModal()}
                >
                  {isArchived ? <IconReceiptRefund /> : <IconX />}
                </ActionIcon>
              </Tooltip>
            ) : (
              <></>
            )}
          </Group>
        </Group>

        <Group justify="space-between" w="100%">
          <Tooltip
            disabled={!isArchived}
            label={isArchived ? "This comment is archived" : ""}
          >
            <MarkdownPaper
              content={isArchived ? `~${body}~` : body}
              isDisabled={isArchived}
              paperProps={{
                shadow: "xs",
                p: "xs",
                w: `calc(100% - ${openReactionsButtonWidth}px - ${openReplyButtonWidth}px - 4*var(--mantine-spacing-md))`,
              }}
            />
          </Tooltip>

          <Tooltip label={replyIsOpen ? "Close reactions" : "Open reations"}>
            <ActionIcon
              variant={reactionsAreExpanded ? "light" : "subtle"}
              color={reactionsAreExpanded ? "blue" : "gray"}
              size="lg-padded"
              onClick={() => setReactionsAreExpanded(!reactionsAreExpanded)}
              ref={openReactionsButtonRef}
            >
              {commentReactions.length > 0 ? (
                <Indicator label={commentReactions.length} size={12}>
                  <IconMoodUp size="md" />
                </Indicator>
              ) : (
                <IconMoodUp size="md" />
              )}
            </ActionIcon>
          </Tooltip>

          <Tooltip
            label={
              replyIsOpen
                ? "Close reply"
                : isArchived
                  ? "Cannot reply to archived comment"
                  : "Add reply"
            }
          >
            <ActionIcon
              disabled={isArchived}
              variant={replyIsOpen ? "light" : "subtle"}
              color={replyIsOpen ? "blue" : "gray"}
              size="lg-padded"
              onClick={() => setReplyIsOpen(!replyIsOpen)}
              ref={openReplyButtonRef}
            >
              {replyIsOpen ? <IconMessageMinus /> : <IconMessagePlus />}
            </ActionIcon>
          </Tooltip>
        </Group>

        {reactionsAreExpanded && (
          <>
            <Space h="sm" />
            <ReactionsSection
              reactions={commentReactions}
              userId={userId}
              commentId={commentId}
              disabled={isArchived}
              size="sm"
              addReaction={addReaction}
              deleteReaction={deleteReaction}
            />
          </>
        )}

        <Space h="lg" />

        <Timeline
          active={(subjectComments?.length ?? 0) + 1}
          lineWidth={1}
          bulletSize={8}
          classNames={{
            root: classes.timelineRoot,
          }}
        >
          {replyIsOpen && (
            <Timeline.Item
              classNames={{
                itemBullet: classes.itemBulletInner,
                item: classes.itemInner,
              }}
            >
              <UserSummary userId={userId} />
              <form onSubmit={handleCommentSubmit}>
                <TextInput
                  w="25em"
                  variant="filled"
                  placeholder="Say anything..."
                  rightSection={
                    <Tooltip
                      label={
                        form.isValid() ? "Post reply" : "Reply cannot be empty"
                      }
                    >
                      <ActionIcon
                        variant="subtle"
                        color="gray"
                        type="submit"
                        disabled={!form.isValid()}
                        classNames={{ root: classes.commentSubmitButton }}
                      >
                        <IconCheck />
                      </ActionIcon>
                    </Tooltip>
                  }
                  {...form.getInputProps("commentBody")}
                />
              </form>

              <Space h="sm" />
              {subjectCommentsExist && (
                <>
                  <Space h="sm" />
                  <Divider
                    w="25em"
                    variant="dotted"
                    size="md"
                    label="other replies"
                  />
                </>
              )}
            </Timeline.Item>
          )}

          {subjectComments?.map(({ id: subjectCommentId }) => (
            <Timeline.Item
              key={subjectCommentId}
              classNames={{
                itemBullet: classes.itemBulletInner,
                item: classes.itemInner,
              }}
            >
              <Suspense fallback={<Loader />}>
                <CommentItem
                  commentId={subjectCommentId}
                  key={subjectCommentId}
                />
              </Suspense>
            </Timeline.Item>
          ))}

          {commentIsLoading && (
            <Timeline.Item
              classNames={{
                item: classes.itemInner,
                itemBullet: classes.itemBulletInner,
              }}
            >
              <Loader size="sm" />
            </Timeline.Item>
          )}

          <Timeline.Item
            classNames={{
              itemBullet: classes.phantomCommentTimelineItemBullet,
              item: classes.phantomCommentTimelineItem,
            }}
          >
            <></>
          </Timeline.Item>
        </Timeline>

        {(subjectCommentsExist || commentIsLoading) && <Space h="sm" />}
      </Stack>
    </>
  );
};

export { CommentItem };
