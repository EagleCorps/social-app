import { graphql } from "@/graphql";

const PostsPage_Query = graphql(`
  query PostsPage_Query {
    posts(where: { isArchived: { _neq: true } }, orderBy: { createdAt: DESC }) {
      id
      createdAt
      updatedAt
      ...PostCard_PostFragment
    }
  }
`);

export { PostsPage_Query };
