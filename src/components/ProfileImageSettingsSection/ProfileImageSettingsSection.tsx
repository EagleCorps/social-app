import { useCallback } from "react";
import { Stack, Title, Tooltip } from "@mantine/core";
import { useLazyQuery, useMutation } from "@apollo/client";
import { useFragment } from "@apollo/experimental-nextjs-app-support/ssr";

import { ImageUploadButton } from "@/components";

import {
  ProfileImageSettingsSection_UserFragment,
  ProfileImageSettingsSection_UserQuery,
  SetProfileImage_Mutation,
} from "./ProfileImageSettingsSection.graphql";
import classes from "./ProfileImageSettingsSection.module.css";

interface ProfileImageSettingsSectionProps {
  userId: string;
}

const ProfileImageSettingsSection: React.FC<
  ProfileImageSettingsSectionProps
> = ({ userId }) => {
  const {
    data: { image, profileImage },
  } = useFragment({
    fragment: ProfileImageSettingsSection_UserFragment,
    fragmentName: "ProfileImageSettingsSection_UserFragment",
    from: {
      __typename: "Users",
      id: userId,
    },
  });

  const [, { refetch: refetchUser }] = useLazyQuery(
    ProfileImageSettingsSection_UserQuery,
    {
      variables: { userId },
    },
  );

  const [setProfileImage] = useMutation(SetProfileImage_Mutation, {
    onCompleted: () => refetchUser(),
  });

  const handleProfileImageSelect = useCallback(
    async (profileImageId: string) => {
      setProfileImage({
        variables: {
          userId,
          profileImageId,
        },
      });
    },
    [setProfileImage, refetchUser],
  );

  return (
    <Stack>
      <Title order={3}>Profile Picture</Title>
      <Tooltip label="Change profile picture">
        <ImageUploadButton
          buttonId="profile"
          url={profileImage?.url ?? image}
          handleSelect={handleProfileImageSelect}
          paperClass={classes.imageUploadButton}
          borderRadius="100%"
        />
      </Tooltip>
    </Stack>
  );
};

export { ProfileImageSettingsSection };
