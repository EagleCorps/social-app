/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query PostsPage_Query {\n    posts(where: { isArchived: { _neq: true } }, orderBy: { createdAt: DESC }) {\n      id\n    }\n  }\n": types.PostsPage_QueryDocument,
    "\n  query UsersPage_Query($searchExpression: UsersBoolExp!) {\n    users(where: $searchExpression) {\n      id\n      createdAt\n      updatedAt\n      ...UserSummary_UserFragment\n      ...UserActions_UserFragment\n    }\n  }\n": types.UsersPage_QueryDocument,
    "\n  fragment AuthButton_UserFragment on Users {\n    id\n    ...UserSummary_UserFragment\n  }\n": types.AuthButton_UserFragmentFragmentDoc,
    "\n  fragment BioSettingsSection_UserFragment on Users {\n    id\n    bio\n  }\n": types.BioSettingsSection_UserFragmentFragmentDoc,
    "\n  query BioSettingsSection_UserQuery($userId: uuid!) {\n    usersByPk(id: $userId) {\n      id\n      ...BioSettingsSection_UserFragment\n    }\n  }\n": types.BioSettingsSection_UserQueryDocument,
    "\n  mutation UpdateUserBio_Mutation($userId: uuid!, $bio: String!) {\n    updateUsersByPk(pkColumns: { id: $userId }, _set: { bio: $bio }) {\n      id\n      ...BioSettingsSection_UserFragment\n    }\n  }\n": types.UpdateUserBio_MutationDocument,
    "\n  fragment CommentItem_CommentFragment on Comments {\n    id\n    body\n    isArchived\n    createdAt\n    updatedAt\n    postId\n    objectCommentId\n    commentReactions {\n      id\n      type\n      reactorId\n    }\n    author {\n      id\n      ...UserSummary_UserFragment\n    }\n    subjectComments(orderBy: { createdAt: ASC }) {\n      id\n    }\n  }\n": types.CommentItem_CommentFragmentFragmentDoc,
    "\n  query CommentItem_Query($commentId: uuid!) {\n    comment: commentsByPk(id: $commentId) {\n      id\n      ...CommentItem_CommentFragment\n    }\n  }\n": types.CommentItem_QueryDocument,
    "\n  mutation CreateReplyComment_Mutation(\n    $body: String!\n    $authorId: uuid!\n    $postId: uuid!\n    $objectCommentId: uuid\n  ) {\n    insertCommentsOne(\n      object: {\n        body: $body\n        authorId: $authorId\n        postId: $postId\n        objectCommentId: $objectCommentId\n      }\n    ) {\n      id\n      ...CommentItem_CommentFragment\n    }\n  }\n": types.CreateReplyComment_MutationDocument,
    "\n  mutation SetCommentIsArchived_Mutation(\n    $commentId: uuid!\n    $isArchived: Boolean!\n  ) {\n    updateCommentsByPk(\n      pkColumns: { id: $commentId }\n      _set: { isArchived: $isArchived }\n    ) {\n      id\n      ...CommentItem_CommentFragment\n    }\n  }\n": types.SetCommentIsArchived_MutationDocument,
    "\n  mutation AddCommentReaction_Mutation(\n    $commentId: uuid!\n    $userId: uuid!\n    $type: String!\n  ) {\n    insertCommentReactionsOne(\n      object: { commentId: $commentId, reactorId: $userId, type: $type }\n      onConflict: {\n        constraint: comment_reactions_comment_id_reactor_id_type_key\n        updateColumns: [updatedAt]\n      }\n    ) {\n      id\n      commentId\n      reactorId\n      type\n      createdAt\n      updatedAt\n    }\n  }\n": types.AddCommentReaction_MutationDocument,
    "\n  mutation DeleteCommentReaction_Mutation(\n    $commentId: uuid!\n    $userId: uuid!\n    $type: String!\n  ) {\n    deleteCommentReactions(\n      where: {\n        commentId: { _eq: $commentId }\n        reactorId: { _eq: $userId }\n        type: { _eq: $type }\n      }\n    ) {\n      affectedRows\n    }\n  }\n": types.DeleteCommentReaction_MutationDocument,
    "\n  fragment ImageUploadButton_ImageFragment on Images {\n    id\n    url\n    width\n    height\n    blurDataUrl\n    name\n    description\n    createdAt\n    updatedAt\n  }\n": types.ImageUploadButton_ImageFragmentFragmentDoc,
    "\n  mutation CreateImages_Mutation($imageObjects: [ImagesInsertInput!]!) {\n    insertImages(objects: $imageObjects) {\n      returning {\n        id\n        ...ImageUploadButton_ImageFragment\n      }\n    }\n  }\n": types.CreateImages_MutationDocument,
    "\n  fragment NameSettingsSection_UserFragment on Users {\n    id\n    name\n  }\n": types.NameSettingsSection_UserFragmentFragmentDoc,
    "\n  query NameSettingsSection_UserQuery($userId: uuid!) {\n    usersByPk(id: $userId) {\n      id\n      ...NameSettingsSection_UserFragment\n    }\n  }\n": types.NameSettingsSection_UserQueryDocument,
    "\n  mutation UpdateUserName_Mutation($userId: uuid!, $name: String!) {\n    updateUsersByPk(pkColumns: { id: $userId }, _set: { name: $name }) {\n      id\n      ...NameSettingsSection_UserFragment\n    }\n  }\n": types.UpdateUserName_MutationDocument,
    "\n  fragment PostCard_PostFragment on Posts {\n    id\n    body\n    isArchived\n    authorId\n    createdAt\n    updatedAt\n    author {\n      ...UserSummary_UserFragment\n    }\n    postReactions {\n      id\n      postId\n      reactorId\n      type\n    }\n    comments(\n      where: { objectCommentId: { _isNull: true } }\n      orderBy: { createdAt: ASC }\n    ) {\n      id\n      ...CommentItem_CommentFragment\n    }\n    postImageRelationships {\n      id\n      image {\n        id\n        url\n        width\n        height\n        name\n        blurDataUrl\n        description\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.PostCard_PostFragmentFragmentDoc,
    "\n  fragment PostCard_CommentFragment on Comments {\n    id\n    createdAt\n  }\n": types.PostCard_CommentFragmentFragmentDoc,
    "\n  query PostCard_PostQuery($postId: uuid!) {\n    postsByPk(id: $postId) {\n      id\n      ...PostCard_PostFragment\n    }\n  }\n": types.PostCard_PostQueryDocument,
    "\n  mutation SetPostIsArchived_Mutation($postId: uuid!, $isArchived: Boolean!) {\n    updatePostsByPk(\n      pkColumns: { id: $postId }\n      _set: { isArchived: $isArchived }\n    ) {\n      id\n      ...PostCard_PostFragment\n    }\n  }\n": types.SetPostIsArchived_MutationDocument,
    "\n  mutation AddPostReaction_Mutation(\n    $postId: uuid!\n    $userId: uuid!\n    $type: String!\n  ) {\n    insertPostReactionsOne(\n      object: { postId: $postId, reactorId: $userId, type: $type }\n      onConflict: {\n        constraint: post_reactions_post_id_reactor_id_type_key\n        updateColumns: [updatedAt]\n      }\n    ) {\n      id\n      postId\n      reactorId\n      type\n      createdAt\n      updatedAt\n    }\n  }\n": types.AddPostReaction_MutationDocument,
    "\n  mutation DeletePostReaction_Mutation(\n    $postId: uuid!\n    $userId: uuid!\n    $type: String!\n  ) {\n    deletePostReactions(\n      where: {\n        postId: { _eq: $postId }\n        reactorId: { _eq: $userId }\n        type: { _eq: $type }\n      }\n    ) {\n      affectedRows\n    }\n  }\n": types.DeletePostReaction_MutationDocument,
    "\n  mutation CreateRootComment_Mutation(\n    $body: String!\n    $authorId: uuid!\n    $postId: uuid!\n    $objectCommentId: uuid\n  ) {\n    insertCommentsOne(\n      object: {\n        body: $body\n        authorId: $authorId\n        postId: $postId\n        objectCommentId: $objectCommentId\n      }\n    ) {\n      id\n      ...PostCard_CommentFragment\n    }\n  }\n": types.CreateRootComment_MutationDocument,
    "\n  fragment PostComposer_PostFragment on Posts {\n    id\n    createdAt\n    updatedAt\n  }\n": types.PostComposer_PostFragmentFragmentDoc,
    "\n  mutation CreatePost_Mutation($body: String!, $authorId: uuid!) {\n    insertPostsOne(object: { body: $body, authorId: $authorId }) {\n      id\n      ...PostComposer_PostFragment\n    }\n  }\n": types.CreatePost_MutationDocument,
    "\n  mutation AddImageToPost_Mutation($postId: uuid!, $imageId: uuid!) {\n    insertPostImageRelationshipsOne(\n      object: { postId: $postId, imageId: $imageId }\n    ) {\n      id\n      post {\n        ...PostCard_PostFragment\n      }\n    }\n  }\n": types.AddImageToPost_MutationDocument,
    "\n  fragment ProfileImageSettingsSection_UserFragment on Users {\n    id\n    image\n    profileImage {\n      ...ImageUploadButton_ImageFragment\n    }\n  }\n": types.ProfileImageSettingsSection_UserFragmentFragmentDoc,
    "\n  query ProfileImageSettingsSection_UserQuery($userId: uuid!) {\n    usersByPk(id: $userId) {\n      id\n      ...ProfileImageSettingsSection_UserFragment\n    }\n  }\n": types.ProfileImageSettingsSection_UserQueryDocument,
    "\n  mutation SetProfileImage_Mutation($userId: uuid!, $profileImageId: uuid!) {\n    updateUsersByPk(\n      pkColumns: { id: $userId }\n      _set: { profileImageId: $profileImageId }\n    ) {\n      id\n      ...ProfileImageSettingsSection_UserFragment\n    }\n  }\n": types.SetProfileImage_MutationDocument,
    "\n  fragment SettingsPanel_UserFragment on Users {\n    id\n    ...ProfileImageSettingsSection_UserFragment\n    ...BioSettingsSection_UserFragment\n    ...AuthButton_UserFragment\n  }\n": types.SettingsPanel_UserFragmentFragmentDoc,
    "\n  query SocialAppShell_Query($userId: uuid!) {\n    usersByPk(id: $userId) {\n      id\n      ...SettingsPanel_UserFragment\n    }\n  }\n": types.SocialAppShell_QueryDocument,
    "\n  fragment UserActions_UserFragment on Users {\n    id\n    bio\n    ...UserSummary_UserFragment\n  }\n": types.UserActions_UserFragmentFragmentDoc,
    "\n  fragment UserActions_UserUserRelationshipFragment on UserUserRelationships {\n    id\n    type\n    createdAt\n    updatedAt\n    states {\n      id\n      ...UserActions_UserUserRelationshipStateFragment\n    }\n  }\n": types.UserActions_UserUserRelationshipFragmentFragmentDoc,
    "\n  fragment UserActions_UserUserRelationshipStateFragment on UserUserRelationshipStates {\n    id\n    type\n    createdAt\n    updatedAt\n  }\n": types.UserActions_UserUserRelationshipStateFragmentFragmentDoc,
    "\n  query UserActions_UserQuery($sourceUserId: uuid!, $targetUserId: uuid!) {\n    sourceUser: usersByPk(id: $sourceUserId) {\n      id\n      userSourceUserRelationships(\n        where: { targetUserId: { _eq: $targetUserId } }\n      ) {\n        id\n        ...UserActions_UserUserRelationshipFragment\n      }\n\n      userTargetUserRelationships(\n        where: { sourceUserId: { _eq: $targetUserId }, type: { _eq: FOLLOW } }\n      ) {\n        id\n        ...UserActions_UserUserRelationshipFragment\n      }\n    }\n  }\n": types.UserActions_UserQueryDocument,
    "\n  mutation CreateUserUserRelationship_Mutation(\n    $sourceUserId: uuid!\n    $targetUserId: uuid!\n    $type: UserUserRelationshipTypesEnum!\n  ) {\n    insertUserUserRelationshipsOne(\n      object: {\n        sourceUserId: $sourceUserId\n        targetUserId: $targetUserId\n        type: $type\n        states: {\n          data: { type: IS_ACTIVE }\n          onConflict: {\n            constraint: user_user_relationship_states_type_user_user_relationship_i_key\n            updateColumns: [updatedAt]\n          }\n        }\n      }\n      onConflict: {\n        constraint: user_user_relationships_source_user_id_target_user_id_type_key\n        updateColumns: [updatedAt]\n      }\n    ) {\n      id\n    }\n  }\n": types.CreateUserUserRelationship_MutationDocument,
    "\n  mutation DeleteUserUserRelationship_Mutation($relationshipId: uuid!) {\n    deleteUserUserRelationshipsByPk(id: $relationshipId) {\n      id\n    }\n  }\n": types.DeleteUserUserRelationship_MutationDocument,
    "\n  mutation CreateUserUserRelationshipState_Mutation(\n    $relationshipId: uuid!\n    $type: UserUserRelationshipStateTypesEnum!\n  ) {\n    insertUserUserRelationshipStatesOne(\n      object: { type: $type, userUserRelationshipId: $relationshipId }\n      onConflict: {\n        constraint: user_user_relationship_states_type_user_user_relationship_i_key\n        updateColumns: [updatedAt]\n      }\n    ) {\n      id\n      ...UserActions_UserUserRelationshipStateFragment\n    }\n  }\n": types.CreateUserUserRelationshipState_MutationDocument,
    "\n  mutation DeleteUserUserRelationshipState_Mutation(\n    $relationshipStateId: uuid!\n  ) {\n    deleteUserUserRelationshipStatesByPk(id: $relationshipStateId) {\n      id\n    }\n  }\n": types.DeleteUserUserRelationshipState_MutationDocument,
    "\n  fragment UserAvatar_UserFragment on Users {\n    id\n    image\n    profileImage {\n      id\n      url\n      width\n      height\n      name\n      blurDataUrl\n      description\n      createdAt\n      updatedAt\n    }\n  }\n": types.UserAvatar_UserFragmentFragmentDoc,
    "\n  query UserProfile_Query($userId: uuid!, $profileUserId: uuid!) {\n    usersByPk(id: $profileUserId) {\n      id\n      name\n      ...UserActions_UserFragment\n\n      posts(\n        orderBy: { createdAt: DESC }\n        where: {\n          _or: [\n            { authorId: { _eq: $userId } }\n            { _not: { isArchived: { _eq: true } } }\n          ]\n        }\n      ) {\n        id\n        ...PostCard_PostFragment\n      }\n    }\n  }\n": types.UserProfile_QueryDocument,
    "\n  fragment UserSummary_UserFragment on Users {\n    id\n    name\n    ...UserAvatar_UserFragment\n  }\n": types.UserSummary_UserFragmentFragmentDoc,
    "\n  query UsePageTitle_Query($userId: uuid!) {\n    usersByPk(id: $userId) {\n      id\n      name\n    }\n  }\n": types.UsePageTitle_QueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PostsPage_Query {\n    posts(where: { isArchived: { _neq: true } }, orderBy: { createdAt: DESC }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  query PostsPage_Query {\n    posts(where: { isArchived: { _neq: true } }, orderBy: { createdAt: DESC }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UsersPage_Query($searchExpression: UsersBoolExp!) {\n    users(where: $searchExpression) {\n      id\n      createdAt\n      updatedAt\n      ...UserSummary_UserFragment\n      ...UserActions_UserFragment\n    }\n  }\n"): (typeof documents)["\n  query UsersPage_Query($searchExpression: UsersBoolExp!) {\n    users(where: $searchExpression) {\n      id\n      createdAt\n      updatedAt\n      ...UserSummary_UserFragment\n      ...UserActions_UserFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment AuthButton_UserFragment on Users {\n    id\n    ...UserSummary_UserFragment\n  }\n"): (typeof documents)["\n  fragment AuthButton_UserFragment on Users {\n    id\n    ...UserSummary_UserFragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment BioSettingsSection_UserFragment on Users {\n    id\n    bio\n  }\n"): (typeof documents)["\n  fragment BioSettingsSection_UserFragment on Users {\n    id\n    bio\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query BioSettingsSection_UserQuery($userId: uuid!) {\n    usersByPk(id: $userId) {\n      id\n      ...BioSettingsSection_UserFragment\n    }\n  }\n"): (typeof documents)["\n  query BioSettingsSection_UserQuery($userId: uuid!) {\n    usersByPk(id: $userId) {\n      id\n      ...BioSettingsSection_UserFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUserBio_Mutation($userId: uuid!, $bio: String!) {\n    updateUsersByPk(pkColumns: { id: $userId }, _set: { bio: $bio }) {\n      id\n      ...BioSettingsSection_UserFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserBio_Mutation($userId: uuid!, $bio: String!) {\n    updateUsersByPk(pkColumns: { id: $userId }, _set: { bio: $bio }) {\n      id\n      ...BioSettingsSection_UserFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CommentItem_CommentFragment on Comments {\n    id\n    body\n    isArchived\n    createdAt\n    updatedAt\n    postId\n    objectCommentId\n    commentReactions {\n      id\n      type\n      reactorId\n    }\n    author {\n      id\n      ...UserSummary_UserFragment\n    }\n    subjectComments(orderBy: { createdAt: ASC }) {\n      id\n    }\n  }\n"): (typeof documents)["\n  fragment CommentItem_CommentFragment on Comments {\n    id\n    body\n    isArchived\n    createdAt\n    updatedAt\n    postId\n    objectCommentId\n    commentReactions {\n      id\n      type\n      reactorId\n    }\n    author {\n      id\n      ...UserSummary_UserFragment\n    }\n    subjectComments(orderBy: { createdAt: ASC }) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CommentItem_Query($commentId: uuid!) {\n    comment: commentsByPk(id: $commentId) {\n      id\n      ...CommentItem_CommentFragment\n    }\n  }\n"): (typeof documents)["\n  query CommentItem_Query($commentId: uuid!) {\n    comment: commentsByPk(id: $commentId) {\n      id\n      ...CommentItem_CommentFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateReplyComment_Mutation(\n    $body: String!\n    $authorId: uuid!\n    $postId: uuid!\n    $objectCommentId: uuid\n  ) {\n    insertCommentsOne(\n      object: {\n        body: $body\n        authorId: $authorId\n        postId: $postId\n        objectCommentId: $objectCommentId\n      }\n    ) {\n      id\n      ...CommentItem_CommentFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateReplyComment_Mutation(\n    $body: String!\n    $authorId: uuid!\n    $postId: uuid!\n    $objectCommentId: uuid\n  ) {\n    insertCommentsOne(\n      object: {\n        body: $body\n        authorId: $authorId\n        postId: $postId\n        objectCommentId: $objectCommentId\n      }\n    ) {\n      id\n      ...CommentItem_CommentFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SetCommentIsArchived_Mutation(\n    $commentId: uuid!\n    $isArchived: Boolean!\n  ) {\n    updateCommentsByPk(\n      pkColumns: { id: $commentId }\n      _set: { isArchived: $isArchived }\n    ) {\n      id\n      ...CommentItem_CommentFragment\n    }\n  }\n"): (typeof documents)["\n  mutation SetCommentIsArchived_Mutation(\n    $commentId: uuid!\n    $isArchived: Boolean!\n  ) {\n    updateCommentsByPk(\n      pkColumns: { id: $commentId }\n      _set: { isArchived: $isArchived }\n    ) {\n      id\n      ...CommentItem_CommentFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddCommentReaction_Mutation(\n    $commentId: uuid!\n    $userId: uuid!\n    $type: String!\n  ) {\n    insertCommentReactionsOne(\n      object: { commentId: $commentId, reactorId: $userId, type: $type }\n      onConflict: {\n        constraint: comment_reactions_comment_id_reactor_id_type_key\n        updateColumns: [updatedAt]\n      }\n    ) {\n      id\n      commentId\n      reactorId\n      type\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation AddCommentReaction_Mutation(\n    $commentId: uuid!\n    $userId: uuid!\n    $type: String!\n  ) {\n    insertCommentReactionsOne(\n      object: { commentId: $commentId, reactorId: $userId, type: $type }\n      onConflict: {\n        constraint: comment_reactions_comment_id_reactor_id_type_key\n        updateColumns: [updatedAt]\n      }\n    ) {\n      id\n      commentId\n      reactorId\n      type\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteCommentReaction_Mutation(\n    $commentId: uuid!\n    $userId: uuid!\n    $type: String!\n  ) {\n    deleteCommentReactions(\n      where: {\n        commentId: { _eq: $commentId }\n        reactorId: { _eq: $userId }\n        type: { _eq: $type }\n      }\n    ) {\n      affectedRows\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteCommentReaction_Mutation(\n    $commentId: uuid!\n    $userId: uuid!\n    $type: String!\n  ) {\n    deleteCommentReactions(\n      where: {\n        commentId: { _eq: $commentId }\n        reactorId: { _eq: $userId }\n        type: { _eq: $type }\n      }\n    ) {\n      affectedRows\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ImageUploadButton_ImageFragment on Images {\n    id\n    url\n    width\n    height\n    blurDataUrl\n    name\n    description\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment ImageUploadButton_ImageFragment on Images {\n    id\n    url\n    width\n    height\n    blurDataUrl\n    name\n    description\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateImages_Mutation($imageObjects: [ImagesInsertInput!]!) {\n    insertImages(objects: $imageObjects) {\n      returning {\n        id\n        ...ImageUploadButton_ImageFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateImages_Mutation($imageObjects: [ImagesInsertInput!]!) {\n    insertImages(objects: $imageObjects) {\n      returning {\n        id\n        ...ImageUploadButton_ImageFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment NameSettingsSection_UserFragment on Users {\n    id\n    name\n  }\n"): (typeof documents)["\n  fragment NameSettingsSection_UserFragment on Users {\n    id\n    name\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query NameSettingsSection_UserQuery($userId: uuid!) {\n    usersByPk(id: $userId) {\n      id\n      ...NameSettingsSection_UserFragment\n    }\n  }\n"): (typeof documents)["\n  query NameSettingsSection_UserQuery($userId: uuid!) {\n    usersByPk(id: $userId) {\n      id\n      ...NameSettingsSection_UserFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUserName_Mutation($userId: uuid!, $name: String!) {\n    updateUsersByPk(pkColumns: { id: $userId }, _set: { name: $name }) {\n      id\n      ...NameSettingsSection_UserFragment\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserName_Mutation($userId: uuid!, $name: String!) {\n    updateUsersByPk(pkColumns: { id: $userId }, _set: { name: $name }) {\n      id\n      ...NameSettingsSection_UserFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PostCard_PostFragment on Posts {\n    id\n    body\n    isArchived\n    authorId\n    createdAt\n    updatedAt\n    author {\n      ...UserSummary_UserFragment\n    }\n    postReactions {\n      id\n      postId\n      reactorId\n      type\n    }\n    comments(\n      where: { objectCommentId: { _isNull: true } }\n      orderBy: { createdAt: ASC }\n    ) {\n      id\n      ...CommentItem_CommentFragment\n    }\n    postImageRelationships {\n      id\n      image {\n        id\n        url\n        width\n        height\n        name\n        blurDataUrl\n        description\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment PostCard_PostFragment on Posts {\n    id\n    body\n    isArchived\n    authorId\n    createdAt\n    updatedAt\n    author {\n      ...UserSummary_UserFragment\n    }\n    postReactions {\n      id\n      postId\n      reactorId\n      type\n    }\n    comments(\n      where: { objectCommentId: { _isNull: true } }\n      orderBy: { createdAt: ASC }\n    ) {\n      id\n      ...CommentItem_CommentFragment\n    }\n    postImageRelationships {\n      id\n      image {\n        id\n        url\n        width\n        height\n        name\n        blurDataUrl\n        description\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PostCard_CommentFragment on Comments {\n    id\n    createdAt\n  }\n"): (typeof documents)["\n  fragment PostCard_CommentFragment on Comments {\n    id\n    createdAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query PostCard_PostQuery($postId: uuid!) {\n    postsByPk(id: $postId) {\n      id\n      ...PostCard_PostFragment\n    }\n  }\n"): (typeof documents)["\n  query PostCard_PostQuery($postId: uuid!) {\n    postsByPk(id: $postId) {\n      id\n      ...PostCard_PostFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SetPostIsArchived_Mutation($postId: uuid!, $isArchived: Boolean!) {\n    updatePostsByPk(\n      pkColumns: { id: $postId }\n      _set: { isArchived: $isArchived }\n    ) {\n      id\n      ...PostCard_PostFragment\n    }\n  }\n"): (typeof documents)["\n  mutation SetPostIsArchived_Mutation($postId: uuid!, $isArchived: Boolean!) {\n    updatePostsByPk(\n      pkColumns: { id: $postId }\n      _set: { isArchived: $isArchived }\n    ) {\n      id\n      ...PostCard_PostFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddPostReaction_Mutation(\n    $postId: uuid!\n    $userId: uuid!\n    $type: String!\n  ) {\n    insertPostReactionsOne(\n      object: { postId: $postId, reactorId: $userId, type: $type }\n      onConflict: {\n        constraint: post_reactions_post_id_reactor_id_type_key\n        updateColumns: [updatedAt]\n      }\n    ) {\n      id\n      postId\n      reactorId\n      type\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation AddPostReaction_Mutation(\n    $postId: uuid!\n    $userId: uuid!\n    $type: String!\n  ) {\n    insertPostReactionsOne(\n      object: { postId: $postId, reactorId: $userId, type: $type }\n      onConflict: {\n        constraint: post_reactions_post_id_reactor_id_type_key\n        updateColumns: [updatedAt]\n      }\n    ) {\n      id\n      postId\n      reactorId\n      type\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeletePostReaction_Mutation(\n    $postId: uuid!\n    $userId: uuid!\n    $type: String!\n  ) {\n    deletePostReactions(\n      where: {\n        postId: { _eq: $postId }\n        reactorId: { _eq: $userId }\n        type: { _eq: $type }\n      }\n    ) {\n      affectedRows\n    }\n  }\n"): (typeof documents)["\n  mutation DeletePostReaction_Mutation(\n    $postId: uuid!\n    $userId: uuid!\n    $type: String!\n  ) {\n    deletePostReactions(\n      where: {\n        postId: { _eq: $postId }\n        reactorId: { _eq: $userId }\n        type: { _eq: $type }\n      }\n    ) {\n      affectedRows\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateRootComment_Mutation(\n    $body: String!\n    $authorId: uuid!\n    $postId: uuid!\n    $objectCommentId: uuid\n  ) {\n    insertCommentsOne(\n      object: {\n        body: $body\n        authorId: $authorId\n        postId: $postId\n        objectCommentId: $objectCommentId\n      }\n    ) {\n      id\n      ...PostCard_CommentFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateRootComment_Mutation(\n    $body: String!\n    $authorId: uuid!\n    $postId: uuid!\n    $objectCommentId: uuid\n  ) {\n    insertCommentsOne(\n      object: {\n        body: $body\n        authorId: $authorId\n        postId: $postId\n        objectCommentId: $objectCommentId\n      }\n    ) {\n      id\n      ...PostCard_CommentFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PostComposer_PostFragment on Posts {\n    id\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment PostComposer_PostFragment on Posts {\n    id\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreatePost_Mutation($body: String!, $authorId: uuid!) {\n    insertPostsOne(object: { body: $body, authorId: $authorId }) {\n      id\n      ...PostComposer_PostFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreatePost_Mutation($body: String!, $authorId: uuid!) {\n    insertPostsOne(object: { body: $body, authorId: $authorId }) {\n      id\n      ...PostComposer_PostFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddImageToPost_Mutation($postId: uuid!, $imageId: uuid!) {\n    insertPostImageRelationshipsOne(\n      object: { postId: $postId, imageId: $imageId }\n    ) {\n      id\n      post {\n        ...PostCard_PostFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddImageToPost_Mutation($postId: uuid!, $imageId: uuid!) {\n    insertPostImageRelationshipsOne(\n      object: { postId: $postId, imageId: $imageId }\n    ) {\n      id\n      post {\n        ...PostCard_PostFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProfileImageSettingsSection_UserFragment on Users {\n    id\n    image\n    profileImage {\n      ...ImageUploadButton_ImageFragment\n    }\n  }\n"): (typeof documents)["\n  fragment ProfileImageSettingsSection_UserFragment on Users {\n    id\n    image\n    profileImage {\n      ...ImageUploadButton_ImageFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ProfileImageSettingsSection_UserQuery($userId: uuid!) {\n    usersByPk(id: $userId) {\n      id\n      ...ProfileImageSettingsSection_UserFragment\n    }\n  }\n"): (typeof documents)["\n  query ProfileImageSettingsSection_UserQuery($userId: uuid!) {\n    usersByPk(id: $userId) {\n      id\n      ...ProfileImageSettingsSection_UserFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SetProfileImage_Mutation($userId: uuid!, $profileImageId: uuid!) {\n    updateUsersByPk(\n      pkColumns: { id: $userId }\n      _set: { profileImageId: $profileImageId }\n    ) {\n      id\n      ...ProfileImageSettingsSection_UserFragment\n    }\n  }\n"): (typeof documents)["\n  mutation SetProfileImage_Mutation($userId: uuid!, $profileImageId: uuid!) {\n    updateUsersByPk(\n      pkColumns: { id: $userId }\n      _set: { profileImageId: $profileImageId }\n    ) {\n      id\n      ...ProfileImageSettingsSection_UserFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment SettingsPanel_UserFragment on Users {\n    id\n    ...ProfileImageSettingsSection_UserFragment\n    ...BioSettingsSection_UserFragment\n    ...AuthButton_UserFragment\n  }\n"): (typeof documents)["\n  fragment SettingsPanel_UserFragment on Users {\n    id\n    ...ProfileImageSettingsSection_UserFragment\n    ...BioSettingsSection_UserFragment\n    ...AuthButton_UserFragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SocialAppShell_Query($userId: uuid!) {\n    usersByPk(id: $userId) {\n      id\n      ...SettingsPanel_UserFragment\n    }\n  }\n"): (typeof documents)["\n  query SocialAppShell_Query($userId: uuid!) {\n    usersByPk(id: $userId) {\n      id\n      ...SettingsPanel_UserFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserActions_UserFragment on Users {\n    id\n    bio\n    ...UserSummary_UserFragment\n  }\n"): (typeof documents)["\n  fragment UserActions_UserFragment on Users {\n    id\n    bio\n    ...UserSummary_UserFragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserActions_UserUserRelationshipFragment on UserUserRelationships {\n    id\n    type\n    createdAt\n    updatedAt\n    states {\n      id\n      ...UserActions_UserUserRelationshipStateFragment\n    }\n  }\n"): (typeof documents)["\n  fragment UserActions_UserUserRelationshipFragment on UserUserRelationships {\n    id\n    type\n    createdAt\n    updatedAt\n    states {\n      id\n      ...UserActions_UserUserRelationshipStateFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserActions_UserUserRelationshipStateFragment on UserUserRelationshipStates {\n    id\n    type\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment UserActions_UserUserRelationshipStateFragment on UserUserRelationshipStates {\n    id\n    type\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UserActions_UserQuery($sourceUserId: uuid!, $targetUserId: uuid!) {\n    sourceUser: usersByPk(id: $sourceUserId) {\n      id\n      userSourceUserRelationships(\n        where: { targetUserId: { _eq: $targetUserId } }\n      ) {\n        id\n        ...UserActions_UserUserRelationshipFragment\n      }\n\n      userTargetUserRelationships(\n        where: { sourceUserId: { _eq: $targetUserId }, type: { _eq: FOLLOW } }\n      ) {\n        id\n        ...UserActions_UserUserRelationshipFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserActions_UserQuery($sourceUserId: uuid!, $targetUserId: uuid!) {\n    sourceUser: usersByPk(id: $sourceUserId) {\n      id\n      userSourceUserRelationships(\n        where: { targetUserId: { _eq: $targetUserId } }\n      ) {\n        id\n        ...UserActions_UserUserRelationshipFragment\n      }\n\n      userTargetUserRelationships(\n        where: { sourceUserId: { _eq: $targetUserId }, type: { _eq: FOLLOW } }\n      ) {\n        id\n        ...UserActions_UserUserRelationshipFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUserUserRelationship_Mutation(\n    $sourceUserId: uuid!\n    $targetUserId: uuid!\n    $type: UserUserRelationshipTypesEnum!\n  ) {\n    insertUserUserRelationshipsOne(\n      object: {\n        sourceUserId: $sourceUserId\n        targetUserId: $targetUserId\n        type: $type\n        states: {\n          data: { type: IS_ACTIVE }\n          onConflict: {\n            constraint: user_user_relationship_states_type_user_user_relationship_i_key\n            updateColumns: [updatedAt]\n          }\n        }\n      }\n      onConflict: {\n        constraint: user_user_relationships_source_user_id_target_user_id_type_key\n        updateColumns: [updatedAt]\n      }\n    ) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUserUserRelationship_Mutation(\n    $sourceUserId: uuid!\n    $targetUserId: uuid!\n    $type: UserUserRelationshipTypesEnum!\n  ) {\n    insertUserUserRelationshipsOne(\n      object: {\n        sourceUserId: $sourceUserId\n        targetUserId: $targetUserId\n        type: $type\n        states: {\n          data: { type: IS_ACTIVE }\n          onConflict: {\n            constraint: user_user_relationship_states_type_user_user_relationship_i_key\n            updateColumns: [updatedAt]\n          }\n        }\n      }\n      onConflict: {\n        constraint: user_user_relationships_source_user_id_target_user_id_type_key\n        updateColumns: [updatedAt]\n      }\n    ) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteUserUserRelationship_Mutation($relationshipId: uuid!) {\n    deleteUserUserRelationshipsByPk(id: $relationshipId) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteUserUserRelationship_Mutation($relationshipId: uuid!) {\n    deleteUserUserRelationshipsByPk(id: $relationshipId) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUserUserRelationshipState_Mutation(\n    $relationshipId: uuid!\n    $type: UserUserRelationshipStateTypesEnum!\n  ) {\n    insertUserUserRelationshipStatesOne(\n      object: { type: $type, userUserRelationshipId: $relationshipId }\n      onConflict: {\n        constraint: user_user_relationship_states_type_user_user_relationship_i_key\n        updateColumns: [updatedAt]\n      }\n    ) {\n      id\n      ...UserActions_UserUserRelationshipStateFragment\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUserUserRelationshipState_Mutation(\n    $relationshipId: uuid!\n    $type: UserUserRelationshipStateTypesEnum!\n  ) {\n    insertUserUserRelationshipStatesOne(\n      object: { type: $type, userUserRelationshipId: $relationshipId }\n      onConflict: {\n        constraint: user_user_relationship_states_type_user_user_relationship_i_key\n        updateColumns: [updatedAt]\n      }\n    ) {\n      id\n      ...UserActions_UserUserRelationshipStateFragment\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteUserUserRelationshipState_Mutation(\n    $relationshipStateId: uuid!\n  ) {\n    deleteUserUserRelationshipStatesByPk(id: $relationshipStateId) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteUserUserRelationshipState_Mutation(\n    $relationshipStateId: uuid!\n  ) {\n    deleteUserUserRelationshipStatesByPk(id: $relationshipStateId) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserAvatar_UserFragment on Users {\n    id\n    image\n    profileImage {\n      id\n      url\n      width\n      height\n      name\n      blurDataUrl\n      description\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  fragment UserAvatar_UserFragment on Users {\n    id\n    image\n    profileImage {\n      id\n      url\n      width\n      height\n      name\n      blurDataUrl\n      description\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UserProfile_Query($userId: uuid!, $profileUserId: uuid!) {\n    usersByPk(id: $profileUserId) {\n      id\n      name\n      ...UserActions_UserFragment\n\n      posts(\n        orderBy: { createdAt: DESC }\n        where: {\n          _or: [\n            { authorId: { _eq: $userId } }\n            { _not: { isArchived: { _eq: true } } }\n          ]\n        }\n      ) {\n        id\n        ...PostCard_PostFragment\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserProfile_Query($userId: uuid!, $profileUserId: uuid!) {\n    usersByPk(id: $profileUserId) {\n      id\n      name\n      ...UserActions_UserFragment\n\n      posts(\n        orderBy: { createdAt: DESC }\n        where: {\n          _or: [\n            { authorId: { _eq: $userId } }\n            { _not: { isArchived: { _eq: true } } }\n          ]\n        }\n      ) {\n        id\n        ...PostCard_PostFragment\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserSummary_UserFragment on Users {\n    id\n    name\n    ...UserAvatar_UserFragment\n  }\n"): (typeof documents)["\n  fragment UserSummary_UserFragment on Users {\n    id\n    name\n    ...UserAvatar_UserFragment\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UsePageTitle_Query($userId: uuid!) {\n    usersByPk(id: $userId) {\n      id\n      name\n    }\n  }\n"): (typeof documents)["\n  query UsePageTitle_Query($userId: uuid!) {\n    usersByPk(id: $userId) {\n      id\n      name\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;