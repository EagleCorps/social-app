"use client";

import { useEffect, useTransition } from "react";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { ActionIcon, Affix, Tooltip } from "@mantine/core";
import Link from "next/link";
import { IconPlus } from "@tabler/icons-react";
import { useLazyQuery } from "@apollo/client";
import { nprogress } from "@mantine/nprogress";

import { PostsList } from "@/components";

import { PostsPage_Query } from "./page.graphql";

const PostsPage = () => {
  const [isPending, startTransition] = useTransition();

  const {
    data: { posts },
  } = useSuspenseQuery(PostsPage_Query);

  const [, { refetch }] = useLazyQuery(PostsPage_Query);

  useEffect(() => {
    startTransition(() => {
      refetch();
    });
  }, []);

  useEffect(() => {
    isPending ? nprogress.start() : nprogress.complete();
  }, [isPending]);

  return (
    <>
      <PostsList
        postIds={posts.map(({ id }) => id)}
        isLoading={false}
        refetch={refetch}
      />
      <Affix position={{ bottom: 50, right: 350 }}>
        <Tooltip label="New post">
          <ActionIcon component={Link} href="/compose" size="xl">
            <IconPlus />
          </ActionIcon>
        </Tooltip>
      </Affix>
    </>
  );
};

export default PostsPage;
