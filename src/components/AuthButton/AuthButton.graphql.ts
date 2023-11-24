import { graphql } from "@/graphql";

const AuthButton_UserFragment = graphql(`
  fragment AuthButton_UserFragment on Users {
    id
    ...UserSummary_UserFragment
  }
`);

export { AuthButton_UserFragment };
