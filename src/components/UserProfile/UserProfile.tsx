"use client";

import { useEffect, useTransition } from "react";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import {
  ActionIcon,
  Affix,
  Divider,
  Group,
  Space,
  Stack,
  Title,
  Tooltip,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { skipToken, useLazyQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { nprogress } from "@mantine/nprogress";

import {
  UserActions,
  PostsList,
  UserSummary,
  MarkdownPaper,
} from "@/components";

import { UserProfile_Query } from "./UserProfile.graphql";

interface UserProfileProps {
  profileUserId: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ profileUserId }) => {
  const {
    data: {
      user: { id: userId },
    },
  } = useSession();
  const [isPending, startTransition] = useTransition();
  const {
    data: {
      usersByPk: { bio, posts },
    },
  } = useSuspenseQuery(
    UserProfile_Query,
    profileUserId
      ? {
          variables: { userId, profileUserId },
        }
      : skipToken,
  );

  const [, { refetch }] = useLazyQuery(UserProfile_Query, {
    variables: { userId, profileUserId },
  });

  // Make a non-blocking request to update the query whenever the page is
  // loaded. This is due to a client cache hydration issue in the Apollo-nextjs
  // package.
  useEffect(() => {
    startTransition(() => {
      refetch();
    });
  }, []);

  useEffect(() => {
    isPending ? nprogress.start() : nprogress.complete();
  }, [isPending]);

  return (
    <Stack h="100%">
      <Stack>
        <Group justify="space-between">
          <UserSummary userId={profileUserId} />
          <UserActions targetUserId={profileUserId} />
        </Group>
        <Divider />
        <Title order={2}>Bio</Title>
        <MarkdownPaper maxHeight={150} content={bio} />

        <Space />
        <Divider />
      </Stack>

      <Title order={2}>Posts</Title>

      <PostsList
        postIds={posts.map(({ id }) => id)}
        isLoading={isPending}
        refetch={refetch}
      />

      <Affix position={{ bottom: 50, right: 350 }}>
        <Tooltip label="New post">
          <ActionIcon component={Link} href="/compose" size="xl" radius="xl">
            <IconPlus />
          </ActionIcon>
        </Tooltip>
      </Affix>
    </Stack>
  );
};

export { UserProfile };
