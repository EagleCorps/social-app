import { graphql } from "@/graphql";

const UserAvatar_UserFragment = graphql(`
  fragment UserAvatar_UserFragment on Users {
    id
    image
    profileImage {
      id
      url
      width
      height
      name
      blurDataUrl
      description
      createdAt
      updatedAt
    }
  }
`);

export { UserAvatar_UserFragment };
