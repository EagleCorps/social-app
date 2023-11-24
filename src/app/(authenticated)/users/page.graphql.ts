import { graphql } from "@/graphql";

const UsersPage_Query = graphql(`
  query UsersPage_Query($searchExpression: UsersBoolExp!) {
    users(where: $searchExpression) {
      id
      createdAt
      updatedAt
      ...UserSummary_UserFragment
      ...UserActions_UserFragment
    }
  }
`);

export { UsersPage_Query };
