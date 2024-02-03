import { graphql } from "@/graphql";

const PostComposer_PostFragment = graphql(`
  fragment PostComposer_PostFragment on Posts {
    id
    createdAt
    updatedAt
  }
`);

const CreatePost_Mutation = graphql(`
  mutation CreatePost_Mutation($body: String!) {
    insertPostsOne(object: { body: $body }) {
      id
      ...PostComposer_PostFragment
    }
  }
`);

const AddImageToPost_Mutation = graphql(`
  mutation AddImageToPost_Mutation($postId: uuid!, $imageId: uuid!) {
    insertPostImageRelationshipsOne(
      object: { postId: $postId, imageId: $imageId }
    ) {
      id
      post {
        ...PostCard_PostFragment
      }
    }
  }
`);

export {
  PostComposer_PostFragment,
  CreatePost_Mutation,
  AddImageToPost_Mutation,
};
