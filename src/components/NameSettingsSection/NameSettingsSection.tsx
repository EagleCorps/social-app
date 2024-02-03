import { useCallback, useEffect, useState } from "react";
import {
  ActionIcon,
  Group,
  Space,
  Stack,
  Text,
  TextInput,
  Title,
  Tooltip,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconCheck, IconPencil } from "@tabler/icons-react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useFragment } from "@apollo/experimental-nextjs-app-support/ssr";

import {
  NameSettingsSection_UserFragment,
  NameSettingsSection_UserQuery,
  UpdateUserName_Mutation,
} from "./NameSettingsSection.graphql";

interface NameSettingsSectionProps {
  userId: string;
}

const NameSettingsSection: React.FC<NameSettingsSectionProps> = ({
  userId,
}) => {
  const [nameEditMode, setNameEditMode] = useState(false);

  const {
    data: { name },
  } = useFragment({
    fragment: NameSettingsSection_UserFragment,
    fragmentName: "NameSettingsSection_UserFragment",
    from: {
      __typename: "Users",
      id: userId,
    },
  });

  const [, { refetch: refetchUser }] = useLazyQuery(
    NameSettingsSection_UserQuery,
    {
      variables: { userId },
    },
  );

  const [updateUserName] = useMutation(UpdateUserName_Mutation, {
    onCompleted: () => refetchUser(),
  });

  const form = useForm({
    initialValues: {
      userName: name,
    },
  });

  useEffect(() => {
    form.setFieldValue("userName", name);
  }, [name]);

  const handleNameSubmit = useCallback(
    form.onSubmit(({ userName }) => {
      setNameEditMode(false);
      // Reduce unnecessary network requests by not sending mutation if name
      // hasn't changed.
      if (form.isDirty()) {
        updateUserName({
          variables: {
            userId,
          },
        });
      }
    }),
    [form, updateUserName],
  );

  return nameEditMode ? (
    <form onSubmit={handleNameSubmit}>
      <Stack>
        <Group justify="space-between">
          <Title order={3}>Name</Title>
          <ActionIcon variant="subtle" size="sm">
            <IconCheck />
          </ActionIcon>
        </Group>
        <Space />

        <TextInput radius="md" placeholder="Your name here..." />
      </Stack>
    </form>
  ) : (
    <Stack>
      <Group justify="space-between">
        <Title order={3}>Name</Title>
        <Tooltip label="Edit name">
          <ActionIcon
            variant="subtle"
            color="gray"
            size="lg"
            p="0.375rem"
            onClick={() => setNameEditMode(true)}
          >
            <IconPencil />
          </ActionIcon>
        </Tooltip>
      </Group>
      <Space />
      <Text size="md" fw={400} ta="start" truncate="end">
        {name}
      </Text>
    </Stack>
  );
};

export { NameSettingsSection };
