"use client";

import { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  ActionIcon,
  Group,
  Stack,
  Textarea,
  Button,
  LoadingOverlay,
  Title,
  Divider,
  Space,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { isNotEmpty, useForm } from "@mantine/form";
import { IconX } from "@tabler/icons-react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { nprogress } from "@mantine/nprogress";

import {
  ConfirmationModal,
  ImageUploadButton,
  MarkdownPaper,
  UserSummary,
} from "@/components";

import {
  AddImageToPost_Mutation,
  CreatePost_Mutation,
} from "./PostComposer.graphql";
import classes from "./PostComposer.module.css";

interface PostComposerProps {}

const PostComposer: React.FC<PostComposerProps> = () => {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  const [postImageUrl, setPostImageUrl] = useState<string | undefined>();

  const {
    data: {
      user: { id: userId },
    },
  } = useSession();

  const [createPost] = useMutation(CreatePost_Mutation);

  const [addImageToPost] = useMutation(AddImageToPost_Mutation);

  const form = useForm({
    initialValues: {
      postBody: "",
      postImageId: "",
    },
    validate: {
      postBody: isNotEmpty("Post cannot be empty"),
    },
  });

  const handlePostSubmit = useCallback(
    form.onSubmit(async ({ postBody, postImageId }) => {
      setIsSubmitting(true);
      const {
        data: {
          insertPostsOne: { id: postId },
        },
      } = await createPost({
        variables: { body: postBody },
        onCompleted: !postImageId ? () => router.push("/posts") : () => {},
      });
      if (postImageId) {
        await addImageToPost({
          variables: { postId, imageId: postImageId },
          onCompleted: () => router.push("/posts"),
        });
      }
      form.reset();
      setIsSubmitting(false);
    }),
    [form, createPost],
  );

  const handlePostImageSelect = useCallback((id: string, url: string) => {
    form.setFieldValue("postImageId", id);
    setPostImageUrl(url);
  }, []);

  useEffect(() => {
    nprogress.complete();
  }, [userId]);

  return (
    <form onSubmit={handlePostSubmit} style={{ height: "100%" }}>
      <LoadingOverlay visible={isSubmitting} />

      <Stack justify="space-between" h="100%">
        <Stack justify="flex-start" h="100%">
          <Stack h="50%">
            <Group>
              <UserSummary userId={userId} />
            </Group>

            <Tooltip label="Add image">
              <ImageUploadButton
                buttonId="compose"
                url={postImageUrl || ""}
                handleSelect={handlePostImageSelect}
                paperClass={classes.imageUploadButton}
              />
            </Tooltip>

            <Textarea
              autosize
              maxRows={12}
              radius="md"
              placeholder="Say anything..."
              {...form.getInputProps("postBody")}
            />
          </Stack>
          <Space />

          <Divider />

          <Stack h="50%">
            <Title order={2}>Preview</Title>
            <MarkdownPaper maxHeight={250} content={form.values.postBody} />
          </Stack>
        </Stack>

        <Group justify="space-between">
          <Tooltip label="Cancel post">
            <ActionIcon variant="subtle" color="red" size="xl" onClick={open}>
              <IconX />
            </ActionIcon>
          </Tooltip>

          <Tooltip
            label={form.isValid() ? "Create post" : "Post cannot be empty"}
          >
            <Button type="submit" disabled={!form.isValid()}>
              Post
            </Button>
          </Tooltip>
        </Group>
        <ConfirmationModal
          opened={opened}
          close={close}
          actionText="cancel this post"
          action={() => router.push("/posts")}
        />
      </Stack>
    </form>
  );
};

export { PostComposer };
