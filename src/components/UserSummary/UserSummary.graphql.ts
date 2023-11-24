import { graphql } from "@/graphql";

const UserSummary_UserFragment = graphql(`
  fragment UserSummary_UserFragment on Users {
    id
    name
    ...UserAvatar_UserFragment
  }
`);

export { UserSummary_UserFragment };
