import { useCallback, useEffect, useState } from "react";
import {
  ActionIcon,
  Group,
  Space,
  Stack,
  Text,
  Textarea,
  Title,
  Tooltip,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconCheck, IconPencil } from "@tabler/icons-react";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useFragment } from "@apollo/experimental-nextjs-app-support/ssr";

import { MarkdownPaper } from "@/components";

import {
  BioSettingsSection_UserFragment,
  BioSettingsSection_UserQuery,
  UpdateUserBio_Mutation,
} from "./BioSettingsSection.graphql";

interface BioSettingsSectionProps {
  userId: string;
}

const BioSettingsSection: React.FC<BioSettingsSectionProps> = ({ userId }) => {
  const [bioEditMode, setBioEditMode] = useState(false);

  const {
    data: { bio },
  } = useFragment({
    fragment: BioSettingsSection_UserFragment,
    fragmentName: "BioSettingsSection_UserFragment",
    from: {
      __typename: "Users",
      id: userId,
    },
  });

  const [, { refetch: refetchUser }] = useLazyQuery(
    BioSettingsSection_UserQuery,
    {
      variables: { userId },
    },
  );

  const [updateUserBio] = useMutation(UpdateUserBio_Mutation, {
    onCompleted: () => refetchUser(),
  });

  const form = useForm({
    initialValues: {
      userBio: bio,
    },
  });

  useEffect(() => {
    form.setFieldValue("userBio", bio);
  }, [bio]);

  const handleBioSubmit = useCallback(
    form.onSubmit(({ userBio }) => {
      setBioEditMode(false);
      // Reduce unnecessary network requests by not sending mutation if bio
      // hasn't changed.
      if (form.isDirty()) {
        updateUserBio({
          variables: {
            userId,
            bio: userBio,
          },
        });
      }
    }),
    [form, updateUserBio],
  );

  return bioEditMode ? (
    <form onSubmit={handleBioSubmit}>
      <Stack>
        <Group justify="space-between">
          <Title order={3}>Bio</Title>
          <ActionIcon variant="subtle" size="sm" type="submit">
            <IconCheck />
          </ActionIcon>
        </Group>
        <Space />

        <Textarea
          radius="md"
          placeholder="Your bio here..."
          autosize
          maxRows={7}
          {...form.getInputProps("userBio")}
        />
      </Stack>
    </form>
  ) : (
    <Stack>
      <Group justify="space-between">
        <Title order={3}>Bio</Title>
        <Tooltip label="Edit bio">
          <ActionIcon
            variant="subtle"
            color="gray"
            size="lg-padded"
            onClick={() => setBioEditMode(true)}
          >
            <IconPencil />
          </ActionIcon>
        </Tooltip>
      </Group>
      <Space />
      {bio ? (
        <MarkdownPaper maxHeight={150} content={bio} />
      ) : (
        <Text fs="italic">{`You haven't written a bio yet!`}</Text>
      )}
    </Stack>
  );
};

export { BioSettingsSection };
