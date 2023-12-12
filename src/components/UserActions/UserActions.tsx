"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import {
  ActionIcon,
  Badge,
  Button,
  Group,
  Menu,
  Stack,
  Tooltip,
} from "@mantine/core";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import {
  IconArrowBackUp,
  IconBan,
  IconCheck,
  IconDotsVertical,
  IconUserHeart,
  IconUserPlus,
  IconUserQuestion,
  IconUserX,
  IconUsers,
  IconX,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { skipToken, useLazyQuery, useMutation } from "@apollo/client";
import { useSession } from "next-auth/react";

import {
  UserUserRelationshipTypesEnum,
  UserUserRelationshipStateTypesEnum,
  UserActions_UserUserRelationshipFragmentFragment,
  UserActions_UserUserRelationshipStateFragmentFragment,
} from "@/graphql/graphql";
import { ConfirmationModal } from "@/components";

import {
  UserActions_UserQuery,
  CreateUserUserRelationship_Mutation,
  CreateUserUserRelationshipState_Mutation,
  DeleteUserUserRelationshipState_Mutation,
} from "./UserActions.graphql";
import classes from "./UserActions.module.css";
import { nprogress } from "@mantine/nprogress";

interface UserActionsProps {
  targetUserId: string;
  parentRefetch?: () => void;
}

type RelationshipStatesMap = {
  [key in UserUserRelationshipStateTypesEnum]?: Omit<
    UserActions_UserUserRelationshipStateFragmentFragment,
    "type"
  >;
};

type RelationshipsMap = {
  source: {
    [key in UserUserRelationshipTypesEnum]?: Omit<
      UserActions_UserUserRelationshipFragmentFragment,
      "type"
    > &
    RelationshipStatesMap;
  };
  target: {
    [key in UserUserRelationshipTypesEnum]?: Omit<
      UserActions_UserUserRelationshipFragmentFragment,
      "type"
    > &
    RelationshipStatesMap;
  };
};

const UserActions: React.FC<UserActionsProps> = ({
  targetUserId,
  parentRefetch,
}) => {
  const [isPending, startTransition] = useTransition();
  const [
    sourceFollowModalIsOpen,
    { open: openSourceFollowModal, close: closeSourceFollowModal },
  ] = useDisclosure(false);
  const [
    targetFollowModalIsOpen,
    { open: openTargetFollowModal, close: closeTargetFollowModal },
  ] = useDisclosure(false);
  const [blockModalIsOpen, { open: openBlockModal, close: closeBlockModal }] =
    useDisclosure(false);
  const [targetFollowApproveMenuIsOpen, setTargetFollowApproveMenuIsOpen] =
    useState(false);

  const {
    data: {
      user: { id: currentUserId },
    },
  } = useSession();

  const {
    data: {
      sourceUser: {
        id: sourceUserId,
        userSourceUserRelationships: sourceRelationshipsData,
        userTargetUserRelationships: targetRelationshipsData,
      },
    },
  } = useSuspenseQuery(
    UserActions_UserQuery,
    currentUserId && targetUserId
      ? {
        variables: {
          sourceUserId: currentUserId,
          targetUserId,
        },
      }
      : skipToken,
  );

  const [, { refetch: refetchRelationships }] = useLazyQuery(
    UserActions_UserQuery,
    {
      variables: {
        sourceUserId: currentUserId,
        targetUserId,
      },
    },
  );

  useEffect(() => {
    startTransition(() => {
      refetchRelationships();
    });
  }, []);

  useEffect(() => {
    isPending ? nprogress.start() : nprogress.complete();
  }, [isPending]);

  const refetch = useCallback(() => {
    parentRefetch?.();
    refetchRelationships?.();
  }, [parentRefetch, refetchRelationships]);

  const [createUserUserRelationship] = useMutation(
    CreateUserUserRelationship_Mutation,
    {
      onCompleted: () => refetch(),
    },
  );

  const [createUserUserRelationshipState] = useMutation(
    CreateUserUserRelationshipState_Mutation,
    {
      onCompleted: () => refetch(),
    },
  );

  const [deleteUserUserRelationshipState] = useMutation(
    DeleteUserUserRelationshipState_Mutation,
    {
      onCompleted: () => refetch(),
    },
  );

  const [relationships, setRelationships] = useState<RelationshipsMap>({
    source: {},
    target: {},
  });

  useEffect(() => {
    setRelationships({
      source: sourceRelationshipsData.reduce(
        (
          relationshipsMap: RelationshipsMap["source"],
          { type, states, ...data },
        ) => ({
          ...relationshipsMap,
          [type]: {
            ...data,
            ...(states ?? []).reduce(
              (
                relationshipStatesMap: RelationshipStatesMap,
                { type: stateType, ...stateData },
              ) => ({ ...relationshipStatesMap, [stateType]: stateData }),
              {},
            ),
          },
        }),
        {},
      ),
      target: targetRelationshipsData.reduce(
        (
          relationshipsMap: RelationshipsMap["source"],
          { type, states, ...data },
        ) => ({
          ...relationshipsMap,
          [type]: {
            ...data,
            ...(states ?? []).reduce(
              (
                relationshipStatesMap: RelationshipStatesMap,
                { type: stateType, ...stateData },
              ) => ({ ...relationshipStatesMap, [stateType]: stateData }),
              {},
            ),
          },
        }),
        {},
      ),
    });
  }, [
    JSON.stringify([...sourceRelationshipsData].sort(), undefined, 2),
    JSON.stringify([...targetRelationshipsData].sort(), undefined, 2),
  ]);

  const [sourceFollowIsActive, setSourceFollowIsActive] = useState(true);
  const [sourceFollowIsApproved, setSourceFollowIsApproved] = useState(false);
  const [blockIsActive, setBlockIsActive] = useState(true);
  const [targetFollowIsActive, setFollowerIsActive] = useState(true);
  const [targetFollowIsApproved, setFollowerIsApproved] = useState(false);
  const [targetFollowIsIgnored, setFollowerIsIgnored] = useState(false);

  useEffect(() => {
    setSourceFollowIsActive(!!relationships?.source?.FOLLOW?.IS_ACTIVE?.id);
    setSourceFollowIsApproved(!!relationships?.source?.FOLLOW?.IS_APPROVED?.id);
    setBlockIsActive(!!relationships?.source?.BLOCK?.IS_ACTIVE?.id);
    setFollowerIsActive(!!relationships?.target?.FOLLOW?.IS_ACTIVE?.id);
    setFollowerIsApproved(!!relationships?.target?.FOLLOW?.IS_APPROVED?.id);
    setFollowerIsIgnored(!!relationships?.target?.FOLLOW?.IS_IGNORED?.id);
  }, [relationships]);

  const handleFollowButtonClick = () =>
    sourceFollowIsActive
      ? openSourceFollowModal()
      : createUserUserRelationship({
        variables: {
          sourceUserId,
          targetUserId,
          type: UserUserRelationshipTypesEnum.Follow,
        },
      });

  if (sourceUserId === targetUserId) {
    return (
      <Badge size="lg" variant="gradient">
        You
      </Badge>
    );
  }

  return (
    <>
      <Group justify="end" gap="xl">
        <Group gap="xs">
          {((targetFollowIsActive && !targetFollowIsIgnored) ||
            targetFollowIsApproved) && (
              <Menu
                opened={targetFollowApproveMenuIsOpen}
                onChange={setTargetFollowApproveMenuIsOpen}
                withArrow
                shadow="xs"
                disabled={targetFollowIsApproved}
                trigger="hover"
                openDelay={0}
                closeDelay={400}
                radius="md"
                classNames={{ dropdown: classes.followApproveMenuDropdown }}
              >
                <Tooltip
                  label={
                    targetFollowIsActive
                      ? targetFollowIsApproved
                        ? "Unapprove follower"
                        : "Approve or ignore follow request"
                      : "Unapprove follower (they no longer follow you)"
                  }
                >
                  <Menu.Target>
                    <ActionIcon
                      radius="md"
                      variant={
                        targetFollowIsActive && targetFollowIsApproved
                          ? "filled"
                          : "light"
                      }
                      color="green"
                      size="lg"
                      onClick={
                        targetFollowIsApproved
                          ? openTargetFollowModal
                          : () =>
                            setTargetFollowApproveMenuIsOpen(
                              !targetFollowApproveMenuIsOpen,
                            )
                      }
                    >
                      {targetFollowIsActive ? (
                        targetFollowIsApproved ? (
                          <IconUsers />
                        ) : (
                          <IconUserQuestion />
                        )
                      ) : (
                        <IconUserX />
                      )}
                    </ActionIcon>
                  </Menu.Target>
                </Tooltip>
                <Menu.Dropdown p={0}>
                  <Button.Group>
                    <Button
                      radius="md"
                      variant="default"
                      leftSection={<IconX color="red" />}
                      onClick={() => {
                        createUserUserRelationshipState({
                          variables: {
                            relationshipId: relationships?.target?.FOLLOW?.id,
                            type: UserUserRelationshipStateTypesEnum.IsIgnored,
                          },
                        });
                      }}
                    >
                      Ignore
                    </Button>
                    <Button
                      radius="md"
                      variant="default"
                      leftSection={<IconCheck color="green" />}
                      onClick={() => {
                        createUserUserRelationshipState({
                          variables: {
                            relationshipId: relationships?.target?.FOLLOW?.id,
                            type: UserUserRelationshipStateTypesEnum.IsApproved,
                          },
                        });
                      }}
                    >
                      Approve
                    </Button>
                  </Button.Group>
                </Menu.Dropdown>
              </Menu>
            )}

          <Tooltip
            label={
              sourceFollowIsActive
                ? sourceFollowIsApproved
                  ? "Unfollow"
                  : "Cancel follow request"
                : sourceFollowIsApproved
                  ? "Follow"
                  : "Request to follow"
            }
          >
            <ActionIcon
              radius="md"
              variant={
                sourceFollowIsActive
                  ? sourceFollowIsApproved
                    ? "filled"
                    : "light"
                  : "subtle"
              }
              size="lg"
              onClick={handleFollowButtonClick}
            >
              {sourceFollowIsActive ? (
                sourceFollowIsApproved ? (
                  <IconUserHeart />
                ) : (
                  <IconUserX />
                )
              ) : (
                <IconUserPlus />
              )}
            </ActionIcon>
          </Tooltip>
        </Group>

        <Menu
          withArrow
          shadow="0px"
          radius="md"
          position="bottom-end"
          arrowPosition="center"
        >
          <Tooltip label="More options">
            <Menu.Target>
              <ActionIcon radius="md" variant="subtle" size="lg" color="dimmed">
                <IconDotsVertical />
              </ActionIcon>
            </Menu.Target>
          </Tooltip>
          <Menu.Dropdown>
            <Stack gap="xs">
              {targetFollowIsIgnored && (
                <Button
                  justify="flex-start"
                  fullWidth
                  variant="filled"
                  color="green"
                  onClick={() => {
                    deleteUserUserRelationshipState({
                      variables: {
                        relationshipStateId:
                          relationships?.target?.FOLLOW?.IS_IGNORED?.id,
                      },
                    });
                  }}
                  leftSection={<IconArrowBackUp />}
                  radius="md"
                >
                  Unignore
                </Button>
              )}

              <Button
                justify="flex-start"
                fullWidth
                variant={blockIsActive ? "filled" : "subtle"}
                color="red"
                onClick={openBlockModal}
                leftSection={<IconBan />}
                radius="md"
              >
                {blockIsActive ? "Unblock" : "Block"}
              </Button>
            </Stack>
          </Menu.Dropdown>
        </Menu>
      </Group>
      <ConfirmationModal
        opened={sourceFollowModalIsOpen}
        close={closeSourceFollowModal}
        actionText={
          sourceFollowIsApproved
            ? "unfollow this person"
            : "cancel your follow request"
        }
        action={() => {
          deleteUserUserRelationshipState({
            variables: {
              relationshipStateId: relationships?.source?.FOLLOW?.IS_ACTIVE?.id,
            },
          });
        }}
      />
      <ConfirmationModal
        opened={targetFollowModalIsOpen}
        close={closeTargetFollowModal}
        actionText={
          targetFollowIsActive
            ? "unapprove this follower"
            : "unapprove this follower (they no longer follow you)"
        }
        action={() => {
          deleteUserUserRelationshipState({
            variables: {
              relationshipStateId:
                relationships?.target?.FOLLOW?.IS_APPROVED?.id,
            },
          });
        }}
      />
      <ConfirmationModal
        opened={blockModalIsOpen}
        close={closeBlockModal}
        actionText={`${blockIsActive ? "un" : ""}block this person`}
        action={() => {
          blockIsActive
            ? deleteUserUserRelationshipState({
              variables: {
                relationshipStateId:
                  relationships?.source?.BLOCK?.IS_ACTIVE?.id,
              },
            })
            : createUserUserRelationship({
              variables: {
                sourceUserId,
                targetUserId,
                type: UserUserRelationshipTypesEnum.Block,
              },
            });
        }}
      />
    </>
  );
};

export { UserActions };
