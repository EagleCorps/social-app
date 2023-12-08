import { graphql } from "@/graphql";

const NameSettingsSection_UserFragment = graphql(`
  fragment NameSettingsSection_UserFragment on Users {
    id
    name
  }
`);

const NameSettingsSection_UserQuery = graphql(`
  query NameSettingsSection_UserQuery($userId: uuid!) {
    usersByPk(id: $userId) {
      id
      ...NameSettingsSection_UserFragment
    }
  }
`);

const UpdateUserName_Mutation = graphql(`
  mutation UpdateUserName_Mutation($userId: uuid!, $name: String!) {
    updateUsersByPk(pkColumns: { id: $userId }, _set: { name: $name }) {
      id
      ...NameSettingsSection_UserFragment
    }
  }
`);

export {
  NameSettingsSection_UserFragment,
  NameSettingsSection_UserQuery,
  UpdateUserName_Mutation,
};
