"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { ActionIcon, Button, Group, Tooltip } from "@mantine/core";
import { useDisclosure, useElementSize } from "@mantine/hooks";
import { useFragment } from "@apollo/experimental-nextjs-app-support/ssr";
import { IconLogout } from "@tabler/icons-react";

import { ConfirmationModal, UserSummary } from "@/components";

import { AuthButton_UserFragment } from "./AuthButton.graphql";

interface AuthButtonProps {
  userId?: string;
}

const AuthButton: React.FC<AuthButtonProps> = ({ userId }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const { data: session } = useSession();
  const { ref: groupRef, width: groupWidth } = useElementSize();
  const { ref: logoutButtonRef, width: logoutButtonWidth } = useElementSize();

  const {
    data: { id },
  } = useFragment({
    fragment: AuthButton_UserFragment,
    fragmentName: "AuthButton_UserFragment",
    from: {
      __typename: "Users",
      id: userId,
    },
  });

  if (session) {
    return (
      <>
        <Group justify="space-between" w="100%" ref={groupRef}>
          <UserSummary
            userId={id}
            emailShouldBeDisplayed
            maxWidth={`calc(${groupWidth}px - ${logoutButtonWidth}px - var(--group-gap) - 2*var(--mantine-spacing-xs)) - 2px`}
          />

          <Tooltip label="Sign out">
            <ActionIcon
              variant="subtle"
              color="red"
              onClick={open}
              size="xl"
              ref={logoutButtonRef}
            >
              <IconLogout />
            </ActionIcon>
          </Tooltip>
        </Group>

        <ConfirmationModal
          opened={opened}
          close={close}
          actionText="sign out"
          action={signOut}
        />
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn("google")}>Sign in</Button>
    </>
  );
};

export { AuthButton };
