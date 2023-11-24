import { graphql } from "@/graphql";

const PostCard_UserFragment = graphql(`
  fragment PostCard_UserFragment on Users {
    id
  }
`);

const PostCard_PostFragment = graphql(`
  fragment PostCard_PostFragment on Posts {
    id
    body
    isArchived
    authorId
    createdAt
    updatedAt
    author {
      ...UserSummary_UserFragment
    }
    postReactions {
      id
      postId
      reactorId
      type
    }
    comments(
      where: { objectCommentId: { _isNull: true } }
      orderBy: { createdAt: ASC }
    ) {
      id
      ...CommentItem_CommentFragment
    }
    postImageRelationships {
      id
      image {
        id
        url
        width
        height
        altText
        description
      }
    }
  }
`);

const PostCard_CommentFragment = graphql(`
  fragment PostCard_CommentFragment on Comments {
    id
    createdAt
  }
`);

const PostCard_PostQuery = graphql(`
  query PostCard_PostQuery($postId: Uuid!) {
    postsByPk(id: $postId) {
      id
      ...PostCard_PostFragment
    }
  }
`);

const SetPostIsArchived_Mutation = graphql(`
  mutation SetPostIsArchived_Mutation($postId: Uuid!, $isArchived: Boolean!) {
    updatePostsByPk(
      pkColumns: { id: $postId }
      _set: { isArchived: $isArchived }
    ) {
      id
      ...PostCard_PostFragment
    }
  }
`);

const AddPostReaction_Mutation = graphql(`
  mutation AddPostReaction_Mutation(
    $postId: Uuid!
    $userId: Uuid!
    $type: String!
  ) {
    insertPostReactionsOne(
      object: { postId: $postId, reactorId: $userId, type: $type }
      onConflict: {
        constraint: postReactionsPostIdReactorIdTypeKey
        updateColumns: [updatedAt]
      }
    ) {
      id
      postId
      reactorId
      type
      createdAt
      updatedAt
    }
  }
`);

const DeletePostReaction_Mutation = graphql(`
  mutation DeletePostReaction_Mutation(
    $postId: Uuid!
    $userId: Uuid!
    $type: String!
  ) {
    deletePostReactions(
      where: {
        postId: { _eq: $postId }
        reactorId: { _eq: $userId }
        type: { _eq: $type }
      }
    ) {
      affectedRows
    }
  }
`);

const CreateRootComment_Mutation = graphql(`
  mutation CreateRootComment_Mutation(
    $body: String!
    $authorId: Uuid!
    $postId: Uuid!
    $objectCommentId: Uuid
  ) {
    insertCommentsOne(
      object: {
        body: $body
        authorId: $authorId
        postId: $postId
        objectCommentId: $objectCommentId
      }
    ) {
      id
      ...PostCard_CommentFragment
    }
  }
`);

export {
  PostCard_UserFragment,
  PostCard_PostFragment,
  PostCard_CommentFragment,
  PostCard_PostQuery,
  SetPostIsArchived_Mutation,
  CreateRootComment_Mutation,
  AddPostReaction_Mutation,
  DeletePostReaction_Mutation,
};
