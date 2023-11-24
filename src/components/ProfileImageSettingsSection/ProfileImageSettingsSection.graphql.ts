import { graphql } from "@/graphql";

const ProfileImageSettingsSection_UserFragment = graphql(`
  fragment ProfileImageSettingsSection_UserFragment on Users {
    id
    image
    profileImage {
      ...ImageUploadButton_ImageFragment
    }
  }
`);

const ProfileImageSettingsSection_UserQuery = graphql(`
  query ProfileImageSettingsSection_UserQuery($userId: Uuid!) {
    usersByPk(id: $userId) {
      id
      ...ProfileImageSettingsSection_UserFragment
    }
  }
`);

const SetProfileImage_Mutation = graphql(`
  mutation SetProfileImage_Mutation($userId: Uuid!, $profileImageId: Uuid!) {
    updateUsersByPk(
      pkColumns: { id: $userId }
      _set: { profileImageId: $profileImageId }
    ) {
      id
      ...ProfileImageSettingsSection_UserFragment
    }
  }
`);

export {
  ProfileImageSettingsSection_UserFragment,
  ProfileImageSettingsSection_UserQuery,
  SetProfileImage_Mutation,
};
