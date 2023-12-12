"use client";

import { Suspense } from "react";
import { Center, Loader, Skeleton, Space, Stack } from "@mantine/core";

import { PostCard } from "@/components";

interface PostsListProps {
  postIds: string[];
  isLoading: boolean;
  refetch?: () => void;
}

const PostsList: React.FC<PostsListProps> = ({
  postIds,
  isLoading,
  refetch = () => {},
}) => (
  <Stack>
    {postIds.map((id) => (
      <Suspense key={id} fallback={<Skeleton h="30em" w="100%" />}>
        <PostCard postId={id} refetch={refetch} />
      </Suspense>
    ))}
    {isLoading && (
      <>
        <Space h="md" />
        <Center>
          <Loader />
        </Center>
      </>
    )}
    <Space h="md" />
  </Stack>
);

export { PostsList };
