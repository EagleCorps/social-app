import { graphql } from "@/graphql";

const UserActions_UserFragment = graphql(`
  fragment UserActions_UserFragment on Users {
    id
    bio
    ...UserSummary_UserFragment
  }
`);

const UserActions_UserUserRelationshipFragment = graphql(`
  fragment UserActions_UserUserRelationshipFragment on UserUserRelationships {
    id
    type
    createdAt
    updatedAt
    states {
      id
      ...UserActions_UserUserRelationshipStateFragment
    }
  }
`);

const UserActions_UserUserRelationshipStateFragment = graphql(`
  fragment UserActions_UserUserRelationshipStateFragment on UserUserRelationshipStates {
    id
    type
    createdAt
    updatedAt
  }
`);

const UserActions_UserQuery = graphql(`
  query UserActions_UserQuery($sourceUserId: uuid!, $targetUserId: uuid!) {
    sourceUser: usersByPk(id: $sourceUserId) {
      id
      userSourceUserRelationships(
        where: { targetUserId: { _eq: $targetUserId } }
      ) {
        id
        ...UserActions_UserUserRelationshipFragment
      }

      userTargetUserRelationships(
        where: { sourceUserId: { _eq: $targetUserId }, type: { _eq: FOLLOW } }
      ) {
        id
        ...UserActions_UserUserRelationshipFragment
      }
    }
  }
`);

const CreateUserUserRelationship_Mutation = graphql(`
  mutation CreateUserUserRelationship_Mutation(
    $sourceUserId: uuid!
    $targetUserId: uuid!
    $type: UserUserRelationshipTypesEnum!
  ) {
    insertUserUserRelationshipsOne(
      object: {
        sourceUserId: $sourceUserId
        targetUserId: $targetUserId
        type: $type
        states: {
          data: { type: IS_ACTIVE }
          onConflict: {
            constraint: user_user_relationship_states_type_user_user_relationship_i_key
            updateColumns: [updatedAt]
          }
        }
      }
      onConflict: {
        constraint: user_user_relationships_source_user_id_target_user_id_type_key
        updateColumns: [updatedAt]
      }
    ) {
      id
    }
  }
`);

const DeleteUserUserRelationship_Mutation = graphql(`
  mutation DeleteUserUserRelationship_Mutation($relationshipId: uuid!) {
    deleteUserUserRelationshipsByPk(id: $relationshipId) {
      id
    }
  }
`);

const CreateUserUserRelationshipState_Mutation = graphql(`
  mutation CreateUserUserRelationshipState_Mutation(
    $relationshipId: uuid!
    $type: UserUserRelationshipStateTypesEnum!
  ) {
    insertUserUserRelationshipStatesOne(
      object: { type: $type, userUserRelationshipId: $relationshipId }
      onConflict: {
        constraint: user_user_relationship_states_type_user_user_relationship_i_key
        updateColumns: [updatedAt]
      }
    ) {
      id
      ...UserActions_UserUserRelationshipStateFragment
    }
  }
`);

const DeleteUserUserRelationshipState_Mutation = graphql(`
  mutation DeleteUserUserRelationshipState_Mutation(
    $relationshipStateId: uuid!
  ) {
    deleteUserUserRelationshipStatesByPk(id: $relationshipStateId) {
      id
    }
  }
`);

export {
  UserActions_UserFragment,
  UserActions_UserUserRelationshipFragment,
  UserActions_UserUserRelationshipStateFragment,
  UserActions_UserQuery,
  CreateUserUserRelationship_Mutation,
  DeleteUserUserRelationship_Mutation,
  CreateUserUserRelationshipState_Mutation,
  DeleteUserUserRelationshipState_Mutation,
};
