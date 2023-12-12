import { graphql } from "@/graphql";

const CommentItem_CommentFragment = graphql(`
  fragment CommentItem_CommentFragment on Comments {
    id
    body
    isArchived
    createdAt
    updatedAt
    postId
    objectCommentId
    commentReactions {
      id
      type
      reactorId
    }
    author {
      id
      ...UserSummary_UserFragment
    }
    subjectComments(orderBy: { createdAt: ASC }) {
      id
    }
  }
`);

const CommentItem_Query = graphql(`
  query CommentItem_Query($commentId: uuid!) {
    comment: commentsByPk(id: $commentId) {
      id
      ...CommentItem_CommentFragment
    }
  }
`);

const CreateReplyComment_Mutation = graphql(`
  mutation CreateReplyComment_Mutation(
    $body: String!
    $authorId: uuid!
    $postId: uuid!
    $objectCommentId: uuid
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
      ...CommentItem_CommentFragment
    }
  }
`);

const SetCommentIsArchived_Mutation = graphql(`
  mutation SetCommentIsArchived_Mutation(
    $commentId: uuid!
    $isArchived: Boolean!
  ) {
    updateCommentsByPk(
      pkColumns: { id: $commentId }
      _set: { isArchived: $isArchived }
    ) {
      id
      ...CommentItem_CommentFragment
    }
  }
`);

const AddCommentReaction_Mutation = graphql(`
  mutation AddCommentReaction_Mutation(
    $commentId: uuid!
    $userId: uuid!
    $type: String!
  ) {
    insertCommentReactionsOne(
      object: { commentId: $commentId, reactorId: $userId, type: $type }
      onConflict: {
        constraint: comment_reactions_comment_id_reactor_id_type_key
        updateColumns: [updatedAt]
      }
    ) {
      id
      commentId
      reactorId
      type
      createdAt
      updatedAt
    }
  }
`);

const DeleteCommentReaction_Mutation = graphql(`
  mutation DeleteCommentReaction_Mutation(
    $commentId: uuid!
    $userId: uuid!
    $type: String!
  ) {
    deleteCommentReactions(
      where: {
        commentId: { _eq: $commentId }
        reactorId: { _eq: $userId }
        type: { _eq: $type }
      }
    ) {
      affectedRows
    }
  }
`);

export {
  CommentItem_CommentFragment,
  CommentItem_Query,
  SetCommentIsArchived_Mutation,
  CreateReplyComment_Mutation,
  AddCommentReaction_Mutation,
  DeleteCommentReaction_Mutation,
};
