import { graphql } from "@/graphql";

const BioSettingsSection_UserFragment = graphql(`
  fragment BioSettingsSection_UserFragment on Users {
    id
    bio
  }
`);

const BioSettingsSection_UserQuery = graphql(`
  query BioSettingsSection_UserQuery($userId: uuid!) {
    usersByPk(id: $userId) {
      id
      ...BioSettingsSection_UserFragment
    }
  }
`);

const UpdateUserBio_Mutation = graphql(`
  mutation UpdateUserBio_Mutation($userId: uuid!, $bio: String!) {
    updateUsersByPk(pkColumns: { id: $userId }, _set: { bio: $bio }) {
      id
      ...BioSettingsSection_UserFragment
    }
  }
`);

export {
  BioSettingsSection_UserFragment,
  BioSettingsSection_UserQuery,
  UpdateUserBio_Mutation,
};
