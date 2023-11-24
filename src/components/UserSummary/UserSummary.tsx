"use client";

import {
  Button,
  ButtonProps,
  Group,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import { useFragment } from "@apollo/experimental-nextjs-app-support/ssr";
import Link from "next/link";

import { UserSummary_UserFragment } from "./UserSummary.graphql";
import { UserAvatar } from "../UserAvatar";

interface UserSummaryProps {
  userId: string;
  emailShouldBeDisplayed?: boolean;
  maxWidth?: string;
  buttonProps?: ButtonProps;
}

const UserSummary: React.FC<UserSummaryProps> = ({
  userId,
  emailShouldBeDisplayed = false,
  maxWidth,
  buttonProps,
}) => {
  const { ref: avatarRef, width: avatarWidth } = useElementSize();
  const {
    data: { name },
  } = useFragment({
    fragment: UserSummary_UserFragment,
    fragmentName: "UserSummary_UserFragment",
    from: {
      __typename: "Users",
      id: userId,
    },
  });

  return (
    <Tooltip label="Profile">
      <Button
        component={Link}
        variant="subtle"
        href={`/users/${userId}`}
        px="xs"
        radius="md"
        size={emailShouldBeDisplayed ? "xl" : "sm"}
        {...buttonProps}
      >
        <Group>
          <UserAvatar
            userId={userId}
            size={emailShouldBeDisplayed ? "lg" : "sm"}
            ref={avatarRef}
          />

          <Stack
            gap="0px"
            w={
              maxWidth && avatarWidth
                ? `calc(${maxWidth} - ${avatarWidth}px - var(--group-gap) - 2px)`
                : undefined
            }
          >
            <Text
              size={emailShouldBeDisplayed ? "lg" : "md"}
              fw={400}
              ta="start"
              truncate="end"
            >
              {name}
            </Text>

            {emailShouldBeDisplayed && (
              <Text c="dimmed" size="xs" ta="start" truncate="end">
                {"test@example.com"}
              </Text>
            )}
          </Stack>
        </Group>
      </Button>
    </Tooltip>
  );
};

export { UserSummary };
