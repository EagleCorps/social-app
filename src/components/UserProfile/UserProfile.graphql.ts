import { graphql } from "@/graphql";

const UserProfile_Query = graphql(`
  query UserProfile_Query($userId: uuid!, $profileUserId: uuid!) {
    usersByPk(id: $profileUserId) {
      id
      name
      ...UserActions_UserFragment

      posts(
        orderBy: { createdAt: DESC }
        where: {
          _or: [
            { authorId: { _eq: $userId } }
            { _not: { isArchived: { _eq: true } } }
          ]
        }
      ) {
        id
        ...PostCard_PostFragment
      }
    }
  }
`);

export { UserProfile_Query };
