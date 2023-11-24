"use client";

import { useEffect, useMemo, useTransition } from "react";
import { useSession } from "next-auth/react";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Chip, Divider, Group, Loader, Space, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconSearch } from "@tabler/icons-react";

import { UserActions, UserSummary } from "@/components";
import {
  UserUserRelationshipStateTypesEnum,
  UserUserRelationshipTypesEnum,
} from "@/graphql/graphql";

import { UsersPage_Query } from "./page.graphql";
import { useDebouncedValue } from "@mantine/hooks";
import { nprogress } from "@mantine/nprogress";

const UsersPage = () => {
  const [isPending, startTransition] = useTransition();
  const {
    data: {
      user: { id: userId },
    },
  } = useSession();

  const form = useForm({
    initialValues: {
      following: true,
      followers: true,
      blocked: false,
      search: "",
    },
  });

  const [searchDebounced] = useDebouncedValue(form.values.search, 250);

  const searchExpression = useMemo(
    () =>
      searchDebounced
        ? { name: { _ilike: `%${searchDebounced}%` } }
        : {
            _or: [
              ...(form.values.following
                ? [
                    {
                      userTargetUserRelationships: {
                        _and: [
                          { sourceUserId: { _eq: userId } },
                          {
                            type: { _eq: UserUserRelationshipTypesEnum.Follow },
                          },
                          {
                            states: {
                              type: {
                                _eq: UserUserRelationshipStateTypesEnum.IsActive,
                              },
                            },
                          },
                        ],
                      },
                    },
                  ]
                : []),
              ...(form.values.followers
                ? [
                    {
                      userSourceUserRelationships: {
                        _and: [
                          { targetUserId: { _eq: userId } },
                          {
                            _and: [
                              {
                                type: {
                                  _eq: UserUserRelationshipTypesEnum.Follow,
                                },
                              },
                              {
                                states: {
                                  type: {
                                    _eq: UserUserRelationshipStateTypesEnum.IsActive,
                                  },
                                },
                              },
                              {
                                _not: {
                                  states: {
                                    type: {
                                      _eq: UserUserRelationshipStateTypesEnum.IsIgnored,
                                    },
                                  },
                                },
                              },
                            ],
                          },
                        ],
                      },
                    },
                  ]
                : []),
              ...(form.values.blocked
                ? [
                    {
                      userTargetUserRelationships: {
                        _and: [
                          { sourceUserId: { _eq: userId } },

                          {
                            type: { _eq: UserUserRelationshipTypesEnum.Block },
                          },
                          {
                            states: {
                              type: {
                                _eq: UserUserRelationshipStateTypesEnum.IsActive,
                              },
                            },
                          },
                        ],
                      },
                    },
                  ]
                : []),
            ],
          },
    [Object.entries(form.values).filter(([key]) => key !== "search")],
  );

  const { data: { users = [] } = {}, refetch } = useQuery(UsersPage_Query, {
    variables: { searchExpression },
    context: { fetchOptions: { cache: "no-store" } },
    skip: !userId,
  });

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
      <form>
        <TextInput
          radius="md"
          placeholder="Search for people by name..."
          rightSection={<IconSearch />}
          {...form.getInputProps("search")}
        />
        <Space h="md" />
        <Group gap="xs">
          {["following", "followers", "blocked"].map((filter) => (
            <Chip
              key={filter}
              disabled={!!form.values.search}
              {...form.getInputProps(filter, { type: "checkbox" })}
            >
              {filter.replace(
                /\w\S*/g,
                (txt) =>
                  txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
              )}
            </Chip>
          ))}
        </Group>
      </form>
      <Space h="xl" />
      <Divider />
      <Space h="md" />
      {users?.map(({ id }) => (
        <Group justify="space-between" key={id}>
          <UserSummary userId={id} />
          <UserActions targetUserId={id} parentRefetch={refetch} />
        </Group>
      ))}
    </>
  );
};

export default UsersPage;
