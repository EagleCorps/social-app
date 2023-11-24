import { graphql } from "@/graphql";

const UserAvatar_UserFragment = graphql(`
  fragment UserAvatar_UserFragment on Users {
    id
    image
    profileImage {
      id
      url
      altText
    }
  }
`);

export { UserAvatar_UserFragment };
