"use client";

import { Suspense, useCallback, useEffect, useMemo, useState } from "react";
import {
  ActionIcon,
  Card,
  Group,
  Image,
  Loader,
  ScrollArea,
  Space,
  Text,
  TextInput,
  Timeline,
  Tooltip,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDisclosure, useElementSize } from "@mantine/hooks";
import { useFragment } from "@apollo/experimental-nextjs-app-support/ssr";
import { useLazyQuery, useMutation } from "@apollo/client";
import { IconCheck, IconReceiptRefund, IconX } from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import NextImage from "next/image";
import dayjs from "dayjs";

import {
  ConfirmationModal,
  MarkdownPaper,
  UserSummary,
  CommentItem,
  ReactionsSection,
} from "@/components";

import {
  PostCard_PostQuery,
  PostCard_PostFragment,
  SetPostIsArchived_Mutation,
  AddPostReaction_Mutation,
  DeletePostReaction_Mutation,
  CreateRootComment_Mutation,
} from "./PostCard.graphql";
import classes from "./PostCard.module.css";
import { getRelativeTime } from "@/utils";

interface PostCardProps {
  postId: string;
  refetch?: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ postId, refetch = () => {} }) => {
  const [
    archiveConfirmationModalIsOpen,
    {
      open: openArchiveConfirmationModal,
      close: closeArchiveConfirmationModal,
    },
  ] = useDisclosure(false);
  const { ref: cardRef, width: cardWidth } = useElementSize();

  const [commentsAreLoading, setCommentsAreLoading] = useState(true);

  const {
    data: {
      user: { id: userId },
    },
  } = useSession();

  const {
    data: {
      body,
      isArchived,
      authorId,
      createdAt,
      updatedAt,
      postReactions,
      comments,
      postImageRelationships,
    },
  } = useFragment({
    fragment: PostCard_PostFragment,
    fragmentName: "PostCard_PostFragment",
    from: {
      __typename: "Posts",
      id: postId,
    },
  });

  const [, { refetch: refetchPost }] = useLazyQuery(PostCard_PostQuery, {
    variables: { postId },
  });

  const [setPostIsArchived] = useMutation(SetPostIsArchived_Mutation, {
    onCompleted: () => refetchPost(),
  });

  const [addReaction] = useMutation(AddPostReaction_Mutation, {
    onCompleted: () => refetchPost(),
  });

  const [deleteReaction] = useMutation(DeletePostReaction_Mutation, {
    onCompleted: () => refetchPost(),
  });

  const [createComment, { loading: commentIsLoading }] = useMutation(
    CreateRootComment_Mutation,
    {
      onCompleted: () => refetchPost(),
    },
  );

  const firstImage = postImageRelationships?.[0]?.image;

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
      setCommentsAreLoading(true);
      createComment({
        variables: {
          body: commentBody,
          authorId: userId,
          postId,
        },
      });
    }),
    [form, createComment],
  );

  useEffect(() => {
    if (!commentIsLoading) {
      setCommentsAreLoading(false);
    }
  }, [commentIsLoading]);

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
        actionText={`${isArchived ? "un" : ""}archive this post`}
        action={async () => {
          await setPostIsArchived({
            variables: { postId, isArchived: !isArchived },
          });
          refetch();
        }}
      />
      <Card shadow="xs" padding="lg" radius="md" withBorder ref={cardRef}>
        {firstImage ? (
          <Card.Section classNames={{ section: classes.imageSection }}>
            <Image
              src={firstImage?.url?.replace(
                process.env.NEXT_PUBLIC_CLIENT_TUS_URL,
                process.env.NEXT_PUBLIC_SERVER_TUS_URL,
              )}
              alt={firstImage?.altText}
              h="auto"
              mah={cardWidth}
              fit="contain"
              component={NextImage}
              width={firstImage?.width}
              height={firstImage.height}
              priority
            />
          </Card.Section>
        ) : (
          <></>
        )}
        <Space h={firstImage ? "md" : 0} />
        <Group justify="space-between">
          <UserSummary userId={authorId} />
          <Group>
            <Tooltip label={updatedAt}>
              <Text size="xs" c="dimmed">
                {timeText}
              </Text>
            </Tooltip>
            {userId === authorId ? (
              <Tooltip label={isArchived ? "Unarchive post" : "Archive post"}>
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

        <Space h="lg" />

        <MarkdownPaper maxHeight={250} content={body} />

        <Space h="lg" />

        <ReactionsSection
          reactions={postReactions}
          userId={userId}
          postId={postId}
          addReaction={addReaction}
          deleteReaction={deleteReaction}
        />

        <Space h="lg" />

        <form onSubmit={handleCommentSubmit}>
          <TextInput
            variant="filled"
            placeholder="Say anything..."
            rightSection={
              <Tooltip
                label={
                  form.isValid() ? "Post comment" : "Comment cannot be empty"
                }
              >
                <ActionIcon
                  variant="subtle"
                  color="gray"
                  mr="0.5rem"
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

        {(comments?.length > 0 || commentsAreLoading) && <Space h="lg" />}

        {commentsAreLoading && <Loader size="sm" />}

        {comments?.length > 0 && (
          <ScrollArea.Autosize mah={400}>
            <Timeline active={comments.length + 1} lineWidth={1} bulletSize={8}>
              {comments
                ?.filter(({ id }) => !!id)
                ?.map(({ id }) => (
                  <Timeline.Item
                    key={id}
                    classNames={{
                      itemBullet: classes.itemBullet,
                      item: classes.item,
                    }}
                  >
                    <Suspense fallback={<Loader />}>
                      <CommentItem commentId={id} />
                    </Suspense>
                  </Timeline.Item>
                ))}

              <Timeline.Item
                classNames={{
                  item: classes.phantomTimelineItem,
                  itemBullet: classes.phantomTimelineItemBullet,
                }}
              >
                <></>
              </Timeline.Item>
            </Timeline>
          </ScrollArea.Autosize>
        )}
      </Card>
    </>
  );
};

export { PostCard };
