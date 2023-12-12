import { graphql } from "@/graphql";

const PostsPage_Query = graphql(`
  query PostsPage_Query {
    posts(where: { isArchived: { _neq: true } }, orderBy: { createdAt: DESC }) {
      id
    }
  }
`);

export { PostsPage_Query };
