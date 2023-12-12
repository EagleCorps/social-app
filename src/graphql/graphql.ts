/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'Accounts';
  accessToken?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['Int']['output']>;
  id: Scalars['uuid']['output'];
  idToken?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  /** An object relationship */
  providerType: ProviderType;
  refreshToken?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  sessionState?: Maybe<Scalars['String']['output']>;
  tokenType?: Maybe<Scalars['String']['output']>;
  type: ProviderTypeEnum;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "accounts" */
export type AccountsAggregate = {
  __typename?: 'AccountsAggregate';
  aggregate?: Maybe<AccountsAggregateFields>;
  nodes: Array<Accounts>;
};

export type AccountsAggregateBoolExp = {
  count?: InputMaybe<AccountsAggregateBoolExpCount>;
};

/** aggregate fields of "accounts" */
export type AccountsAggregateFields = {
  __typename?: 'AccountsAggregateFields';
  avg?: Maybe<AccountsAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<AccountsMaxFields>;
  min?: Maybe<AccountsMinFields>;
  stddev?: Maybe<AccountsStddevFields>;
  stddevPop?: Maybe<AccountsStddevPopFields>;
  stddevSamp?: Maybe<AccountsStddevSampFields>;
  sum?: Maybe<AccountsSumFields>;
  varPop?: Maybe<AccountsVarPopFields>;
  varSamp?: Maybe<AccountsVarSampFields>;
  variance?: Maybe<AccountsVarianceFields>;
};


/** aggregate fields of "accounts" */
export type AccountsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AccountsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "accounts" */
export type AccountsAggregateOrderBy = {
  avg?: InputMaybe<AccountsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AccountsMaxOrderBy>;
  min?: InputMaybe<AccountsMinOrderBy>;
  stddev?: InputMaybe<AccountsStddevOrderBy>;
  stddevPop?: InputMaybe<AccountsStddevPopOrderBy>;
  stddevSamp?: InputMaybe<AccountsStddevSampOrderBy>;
  sum?: InputMaybe<AccountsSumOrderBy>;
  varPop?: InputMaybe<AccountsVarPopOrderBy>;
  varSamp?: InputMaybe<AccountsVarSampOrderBy>;
  variance?: InputMaybe<AccountsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "accounts" */
export type AccountsArrRelInsertInput = {
  data: Array<AccountsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<AccountsOnConflict>;
};

/** aggregate avg on columns */
export type AccountsAvgFields = {
  __typename?: 'AccountsAvgFields';
  expiresAt?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "accounts" */
export type AccountsAvgOrderBy = {
  expiresAt?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type AccountsBoolExp = {
  _and?: InputMaybe<Array<AccountsBoolExp>>;
  _not?: InputMaybe<AccountsBoolExp>;
  _or?: InputMaybe<Array<AccountsBoolExp>>;
  accessToken?: InputMaybe<StringComparisonExp>;
  expiresAt?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  idToken?: InputMaybe<StringComparisonExp>;
  provider?: InputMaybe<StringComparisonExp>;
  providerAccountId?: InputMaybe<StringComparisonExp>;
  providerType?: InputMaybe<ProviderTypeBoolExp>;
  refreshToken?: InputMaybe<StringComparisonExp>;
  scope?: InputMaybe<StringComparisonExp>;
  sessionState?: InputMaybe<StringComparisonExp>;
  tokenType?: InputMaybe<StringComparisonExp>;
  type?: InputMaybe<ProviderTypeEnumComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "accounts" */
export enum AccountsConstraint {
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = 'accounts_pkey'
}

/** input type for incrementing numeric columns in table "accounts" */
export type AccountsIncInput = {
  expiresAt?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "accounts" */
export type AccountsInsertInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  idToken?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  providerType?: InputMaybe<ProviderTypeObjRelInsertInput>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  sessionState?: InputMaybe<Scalars['String']['input']>;
  tokenType?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ProviderTypeEnum>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type AccountsMaxFields = {
  __typename?: 'AccountsMaxFields';
  accessToken?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  idToken?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  sessionState?: Maybe<Scalars['String']['output']>;
  tokenType?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "accounts" */
export type AccountsMaxOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  idToken?: InputMaybe<OrderBy>;
  provider?: InputMaybe<OrderBy>;
  providerAccountId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  scope?: InputMaybe<OrderBy>;
  sessionState?: InputMaybe<OrderBy>;
  tokenType?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AccountsMinFields = {
  __typename?: 'AccountsMinFields';
  accessToken?: Maybe<Scalars['String']['output']>;
  expiresAt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  idToken?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  sessionState?: Maybe<Scalars['String']['output']>;
  tokenType?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "accounts" */
export type AccountsMinOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  idToken?: InputMaybe<OrderBy>;
  provider?: InputMaybe<OrderBy>;
  providerAccountId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  scope?: InputMaybe<OrderBy>;
  sessionState?: InputMaybe<OrderBy>;
  tokenType?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "accounts" */
export type AccountsMutationResponse = {
  __typename?: 'AccountsMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** on_conflict condition type for table "accounts" */
export type AccountsOnConflict = {
  constraint: AccountsConstraint;
  updateColumns?: Array<AccountsUpdateColumn>;
  where?: InputMaybe<AccountsBoolExp>;
};

/** Ordering options when selecting data from "accounts". */
export type AccountsOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  idToken?: InputMaybe<OrderBy>;
  provider?: InputMaybe<OrderBy>;
  providerAccountId?: InputMaybe<OrderBy>;
  providerType?: InputMaybe<ProviderTypeOrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  scope?: InputMaybe<OrderBy>;
  sessionState?: InputMaybe<OrderBy>;
  tokenType?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: accounts */
export type AccountsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "accounts" */
export enum AccountsSelectColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'idToken',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'sessionState',
  /** column name */
  TokenType = 'tokenType',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "accounts" */
export type AccountsSetInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  idToken?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  sessionState?: InputMaybe<Scalars['String']['input']>;
  tokenType?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ProviderTypeEnum>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate stddev on columns */
export type AccountsStddevFields = {
  __typename?: 'AccountsStddevFields';
  expiresAt?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "accounts" */
export type AccountsStddevOrderBy = {
  expiresAt?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type AccountsStddevPopFields = {
  __typename?: 'AccountsStddevPopFields';
  expiresAt?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "accounts" */
export type AccountsStddevPopOrderBy = {
  expiresAt?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type AccountsStddevSampFields = {
  __typename?: 'AccountsStddevSampFields';
  expiresAt?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "accounts" */
export type AccountsStddevSampOrderBy = {
  expiresAt?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "accounts" */
export type AccountsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AccountsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AccountsStreamCursorValueInput = {
  accessToken?: InputMaybe<Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  idToken?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  providerAccountId?: InputMaybe<Scalars['String']['input']>;
  refreshToken?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  sessionState?: InputMaybe<Scalars['String']['input']>;
  tokenType?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ProviderTypeEnum>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate sum on columns */
export type AccountsSumFields = {
  __typename?: 'AccountsSumFields';
  expiresAt?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "accounts" */
export type AccountsSumOrderBy = {
  expiresAt?: InputMaybe<OrderBy>;
};

/** update columns of table "accounts" */
export enum AccountsUpdateColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  IdToken = 'idToken',
  /** column name */
  Provider = 'provider',
  /** column name */
  ProviderAccountId = 'providerAccountId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  Scope = 'scope',
  /** column name */
  SessionState = 'sessionState',
  /** column name */
  TokenType = 'tokenType',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

export type AccountsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AccountsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AccountsSetInput>;
  /** filter the rows which have to be updated */
  where: AccountsBoolExp;
};

/** aggregate varPop on columns */
export type AccountsVarPopFields = {
  __typename?: 'AccountsVarPopFields';
  expiresAt?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "accounts" */
export type AccountsVarPopOrderBy = {
  expiresAt?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type AccountsVarSampFields = {
  __typename?: 'AccountsVarSampFields';
  expiresAt?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "accounts" */
export type AccountsVarSampOrderBy = {
  expiresAt?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type AccountsVarianceFields = {
  __typename?: 'AccountsVarianceFields';
  expiresAt?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "accounts" */
export type AccountsVarianceOrderBy = {
  expiresAt?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** columns and relationships of "comment_reactions" */
export type CommentReactions = {
  __typename?: 'CommentReactions';
  /** An object relationship */
  comment: Comments;
  commentId: Scalars['uuid']['output'];
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  reactor: Users;
  reactorId: Scalars['uuid']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};

/** aggregated selection of "comment_reactions" */
export type CommentReactionsAggregate = {
  __typename?: 'CommentReactionsAggregate';
  aggregate?: Maybe<CommentReactionsAggregateFields>;
  nodes: Array<CommentReactions>;
};

export type CommentReactionsAggregateBoolExp = {
  count?: InputMaybe<CommentReactionsAggregateBoolExpCount>;
};

/** aggregate fields of "comment_reactions" */
export type CommentReactionsAggregateFields = {
  __typename?: 'CommentReactionsAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<CommentReactionsMaxFields>;
  min?: Maybe<CommentReactionsMinFields>;
};


/** aggregate fields of "comment_reactions" */
export type CommentReactionsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CommentReactionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "comment_reactions" */
export type CommentReactionsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CommentReactionsMaxOrderBy>;
  min?: InputMaybe<CommentReactionsMinOrderBy>;
};

/** input type for inserting array relation for remote table "comment_reactions" */
export type CommentReactionsArrRelInsertInput = {
  data: Array<CommentReactionsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<CommentReactionsOnConflict>;
};

/** Boolean expression to filter rows from the table "comment_reactions". All fields are combined with a logical 'AND'. */
export type CommentReactionsBoolExp = {
  _and?: InputMaybe<Array<CommentReactionsBoolExp>>;
  _not?: InputMaybe<CommentReactionsBoolExp>;
  _or?: InputMaybe<Array<CommentReactionsBoolExp>>;
  comment?: InputMaybe<CommentsBoolExp>;
  commentId?: InputMaybe<UuidComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  reactor?: InputMaybe<UsersBoolExp>;
  reactorId?: InputMaybe<UuidComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "comment_reactions" */
export enum CommentReactionsConstraint {
  /** unique or primary key constraint on columns "comment_id", "type", "reactor_id" */
  CommentReactionsCommentIdReactorIdTypeKey = 'comment_reactions_comment_id_reactor_id_type_key',
  /** unique or primary key constraint on columns "id" */
  CommentReactionsPkey = 'comment_reactions_pkey'
}

/** input type for inserting data into table "comment_reactions" */
export type CommentReactionsInsertInput = {
  comment?: InputMaybe<CommentsObjRelInsertInput>;
  commentId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  reactor?: InputMaybe<UsersObjRelInsertInput>;
  reactorId?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type CommentReactionsMaxFields = {
  __typename?: 'CommentReactionsMaxFields';
  commentId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  reactorId?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "comment_reactions" */
export type CommentReactionsMaxOrderBy = {
  commentId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  reactorId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CommentReactionsMinFields = {
  __typename?: 'CommentReactionsMinFields';
  commentId?: Maybe<Scalars['uuid']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  reactorId?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "comment_reactions" */
export type CommentReactionsMinOrderBy = {
  commentId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  reactorId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "comment_reactions" */
export type CommentReactionsMutationResponse = {
  __typename?: 'CommentReactionsMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<CommentReactions>;
};

/** on_conflict condition type for table "comment_reactions" */
export type CommentReactionsOnConflict = {
  constraint: CommentReactionsConstraint;
  updateColumns?: Array<CommentReactionsUpdateColumn>;
  where?: InputMaybe<CommentReactionsBoolExp>;
};

/** Ordering options when selecting data from "comment_reactions". */
export type CommentReactionsOrderBy = {
  comment?: InputMaybe<CommentsOrderBy>;
  commentId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  reactor?: InputMaybe<UsersOrderBy>;
  reactorId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: comment_reactions */
export type CommentReactionsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "comment_reactions" */
export enum CommentReactionsSelectColumn {
  /** column name */
  CommentId = 'commentId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ReactorId = 'reactorId',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "comment_reactions" */
export type CommentReactionsSetInput = {
  commentId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  reactorId?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "comment_reactions" */
export type CommentReactionsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CommentReactionsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CommentReactionsStreamCursorValueInput = {
  commentId?: InputMaybe<Scalars['uuid']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  reactorId?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "comment_reactions" */
export enum CommentReactionsUpdateColumn {
  /** column name */
  CommentId = 'commentId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ReactorId = 'reactorId',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type CommentReactionsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CommentReactionsSetInput>;
  /** filter the rows which have to be updated */
  where: CommentReactionsBoolExp;
};

/** columns and relationships of "comments" */
export type Comments = {
  __typename?: 'Comments';
  /** An object relationship */
  author: Users;
  authorId: Scalars['uuid']['output'];
  body: Scalars['String']['output'];
  /** An array relationship */
  commentReactions: Array<CommentReactions>;
  /** An aggregate relationship */
  commentReactionsAggregate: CommentReactionsAggregate;
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  isArchived: Scalars['Boolean']['output'];
  /** An object relationship */
  objectComment?: Maybe<Comments>;
  objectCommentId?: Maybe<Scalars['uuid']['output']>;
  /** An object relationship */
  post: Posts;
  postId: Scalars['uuid']['output'];
  /** An array relationship */
  subjectComments: Array<Comments>;
  /** An aggregate relationship */
  subjectCommentsAggregate: CommentsAggregate;
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "comments" */
export type CommentsCommentReactionsArgs = {
  distinctOn?: InputMaybe<Array<CommentReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentReactionsOrderBy>>;
  where?: InputMaybe<CommentReactionsBoolExp>;
};


/** columns and relationships of "comments" */
export type CommentsCommentReactionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentReactionsOrderBy>>;
  where?: InputMaybe<CommentReactionsBoolExp>;
};


/** columns and relationships of "comments" */
export type CommentsSubjectCommentsArgs = {
  distinctOn?: InputMaybe<Array<CommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
  where?: InputMaybe<CommentsBoolExp>;
};


/** columns and relationships of "comments" */
export type CommentsSubjectCommentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
  where?: InputMaybe<CommentsBoolExp>;
};

/** aggregated selection of "comments" */
export type CommentsAggregate = {
  __typename?: 'CommentsAggregate';
  aggregate?: Maybe<CommentsAggregateFields>;
  nodes: Array<Comments>;
};

export type CommentsAggregateBoolExp = {
  bool_and?: InputMaybe<CommentsAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<CommentsAggregateBoolExpBool_Or>;
  count?: InputMaybe<CommentsAggregateBoolExpCount>;
};

/** aggregate fields of "comments" */
export type CommentsAggregateFields = {
  __typename?: 'CommentsAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<CommentsMaxFields>;
  min?: Maybe<CommentsMinFields>;
};


/** aggregate fields of "comments" */
export type CommentsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CommentsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "comments" */
export type CommentsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CommentsMaxOrderBy>;
  min?: InputMaybe<CommentsMinOrderBy>;
};

/** input type for inserting array relation for remote table "comments" */
export type CommentsArrRelInsertInput = {
  data: Array<CommentsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<CommentsOnConflict>;
};

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type CommentsBoolExp = {
  _and?: InputMaybe<Array<CommentsBoolExp>>;
  _not?: InputMaybe<CommentsBoolExp>;
  _or?: InputMaybe<Array<CommentsBoolExp>>;
  author?: InputMaybe<UsersBoolExp>;
  authorId?: InputMaybe<UuidComparisonExp>;
  body?: InputMaybe<StringComparisonExp>;
  commentReactions?: InputMaybe<CommentReactionsBoolExp>;
  commentReactionsAggregate?: InputMaybe<CommentReactionsAggregateBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isArchived?: InputMaybe<BooleanComparisonExp>;
  objectComment?: InputMaybe<CommentsBoolExp>;
  objectCommentId?: InputMaybe<UuidComparisonExp>;
  post?: InputMaybe<PostsBoolExp>;
  postId?: InputMaybe<UuidComparisonExp>;
  subjectComments?: InputMaybe<CommentsBoolExp>;
  subjectCommentsAggregate?: InputMaybe<CommentsAggregateBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "comments" */
export enum CommentsConstraint {
  /** unique or primary key constraint on columns "id" */
  CommentsPkey = 'comments_pkey'
}

/** input type for inserting data into table "comments" */
export type CommentsInsertInput = {
  author?: InputMaybe<UsersObjRelInsertInput>;
  authorId?: InputMaybe<Scalars['uuid']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  commentReactions?: InputMaybe<CommentReactionsArrRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  objectComment?: InputMaybe<CommentsObjRelInsertInput>;
  objectCommentId?: InputMaybe<Scalars['uuid']['input']>;
  post?: InputMaybe<PostsObjRelInsertInput>;
  postId?: InputMaybe<Scalars['uuid']['input']>;
  subjectComments?: InputMaybe<CommentsArrRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type CommentsMaxFields = {
  __typename?: 'CommentsMaxFields';
  authorId?: Maybe<Scalars['uuid']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  objectCommentId?: Maybe<Scalars['uuid']['output']>;
  postId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "comments" */
export type CommentsMaxOrderBy = {
  authorId?: InputMaybe<OrderBy>;
  body?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  objectCommentId?: InputMaybe<OrderBy>;
  postId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CommentsMinFields = {
  __typename?: 'CommentsMinFields';
  authorId?: Maybe<Scalars['uuid']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  objectCommentId?: Maybe<Scalars['uuid']['output']>;
  postId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "comments" */
export type CommentsMinOrderBy = {
  authorId?: InputMaybe<OrderBy>;
  body?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  objectCommentId?: InputMaybe<OrderBy>;
  postId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "comments" */
export type CommentsMutationResponse = {
  __typename?: 'CommentsMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Comments>;
};

/** input type for inserting object relation for remote table "comments" */
export type CommentsObjRelInsertInput = {
  data: CommentsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<CommentsOnConflict>;
};

/** on_conflict condition type for table "comments" */
export type CommentsOnConflict = {
  constraint: CommentsConstraint;
  updateColumns?: Array<CommentsUpdateColumn>;
  where?: InputMaybe<CommentsBoolExp>;
};

/** Ordering options when selecting data from "comments". */
export type CommentsOrderBy = {
  author?: InputMaybe<UsersOrderBy>;
  authorId?: InputMaybe<OrderBy>;
  body?: InputMaybe<OrderBy>;
  commentReactionsAggregate?: InputMaybe<CommentReactionsAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isArchived?: InputMaybe<OrderBy>;
  objectComment?: InputMaybe<CommentsOrderBy>;
  objectCommentId?: InputMaybe<OrderBy>;
  post?: InputMaybe<PostsOrderBy>;
  postId?: InputMaybe<OrderBy>;
  subjectCommentsAggregate?: InputMaybe<CommentsAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: comments */
export type CommentsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "comments" */
export enum CommentsSelectColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsArchived = 'isArchived',
  /** column name */
  ObjectCommentId = 'objectCommentId',
  /** column name */
  PostId = 'postId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "commentsAggregateBoolExpBool_andArgumentsColumns" columns of table "comments" */
export enum CommentsSelectColumnCommentsAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  IsArchived = 'isArchived'
}

/** select "commentsAggregateBoolExpBool_orArgumentsColumns" columns of table "comments" */
export enum CommentsSelectColumnCommentsAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  IsArchived = 'isArchived'
}

/** input type for updating data in table "comments" */
export type CommentsSetInput = {
  authorId?: InputMaybe<Scalars['uuid']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  objectCommentId?: InputMaybe<Scalars['uuid']['input']>;
  postId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "comments" */
export type CommentsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CommentsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CommentsStreamCursorValueInput = {
  authorId?: InputMaybe<Scalars['uuid']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  objectCommentId?: InputMaybe<Scalars['uuid']['input']>;
  postId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "comments" */
export enum CommentsUpdateColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsArchived = 'isArchived',
  /** column name */
  ObjectCommentId = 'objectCommentId',
  /** column name */
  PostId = 'postId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type CommentsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CommentsSetInput>;
  /** filter the rows which have to be updated */
  where: CommentsBoolExp;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "images" */
export type Images = {
  __typename?: 'Images';
  blurDataUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  height: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  postImageRelationships: Array<PostImageRelationships>;
  /** An aggregate relationship */
  postImageRelationshipsAggregate: PostImageRelationshipsAggregate;
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  uploader: Users;
  uploaderId: Scalars['uuid']['output'];
  url: Scalars['String']['output'];
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  usersAggregate: UsersAggregate;
  width: Scalars['Int']['output'];
};


/** columns and relationships of "images" */
export type ImagesPostImageRelationshipsArgs = {
  distinctOn?: InputMaybe<Array<PostImageRelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostImageRelationshipsOrderBy>>;
  where?: InputMaybe<PostImageRelationshipsBoolExp>;
};


/** columns and relationships of "images" */
export type ImagesPostImageRelationshipsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostImageRelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostImageRelationshipsOrderBy>>;
  where?: InputMaybe<PostImageRelationshipsBoolExp>;
};


/** columns and relationships of "images" */
export type ImagesUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


/** columns and relationships of "images" */
export type ImagesUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

/** aggregated selection of "images" */
export type ImagesAggregate = {
  __typename?: 'ImagesAggregate';
  aggregate?: Maybe<ImagesAggregateFields>;
  nodes: Array<Images>;
};

export type ImagesAggregateBoolExp = {
  count?: InputMaybe<ImagesAggregateBoolExpCount>;
};

/** aggregate fields of "images" */
export type ImagesAggregateFields = {
  __typename?: 'ImagesAggregateFields';
  avg?: Maybe<ImagesAvgFields>;
  count: Scalars['Int']['output'];
  max?: Maybe<ImagesMaxFields>;
  min?: Maybe<ImagesMinFields>;
  stddev?: Maybe<ImagesStddevFields>;
  stddevPop?: Maybe<ImagesStddevPopFields>;
  stddevSamp?: Maybe<ImagesStddevSampFields>;
  sum?: Maybe<ImagesSumFields>;
  varPop?: Maybe<ImagesVarPopFields>;
  varSamp?: Maybe<ImagesVarSampFields>;
  variance?: Maybe<ImagesVarianceFields>;
};


/** aggregate fields of "images" */
export type ImagesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ImagesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "images" */
export type ImagesAggregateOrderBy = {
  avg?: InputMaybe<ImagesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ImagesMaxOrderBy>;
  min?: InputMaybe<ImagesMinOrderBy>;
  stddev?: InputMaybe<ImagesStddevOrderBy>;
  stddevPop?: InputMaybe<ImagesStddevPopOrderBy>;
  stddevSamp?: InputMaybe<ImagesStddevSampOrderBy>;
  sum?: InputMaybe<ImagesSumOrderBy>;
  varPop?: InputMaybe<ImagesVarPopOrderBy>;
  varSamp?: InputMaybe<ImagesVarSampOrderBy>;
  variance?: InputMaybe<ImagesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "images" */
export type ImagesArrRelInsertInput = {
  data: Array<ImagesInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ImagesOnConflict>;
};

/** aggregate avg on columns */
export type ImagesAvgFields = {
  __typename?: 'ImagesAvgFields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "images" */
export type ImagesAvgOrderBy = {
  height?: InputMaybe<OrderBy>;
  width?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "images". All fields are combined with a logical 'AND'. */
export type ImagesBoolExp = {
  _and?: InputMaybe<Array<ImagesBoolExp>>;
  _not?: InputMaybe<ImagesBoolExp>;
  _or?: InputMaybe<Array<ImagesBoolExp>>;
  blurDataUrl?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  height?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  postImageRelationships?: InputMaybe<PostImageRelationshipsBoolExp>;
  postImageRelationshipsAggregate?: InputMaybe<PostImageRelationshipsAggregateBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  uploader?: InputMaybe<UsersBoolExp>;
  uploaderId?: InputMaybe<UuidComparisonExp>;
  url?: InputMaybe<StringComparisonExp>;
  users?: InputMaybe<UsersBoolExp>;
  usersAggregate?: InputMaybe<UsersAggregateBoolExp>;
  width?: InputMaybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "images" */
export enum ImagesConstraint {
  /** unique or primary key constraint on columns "id" */
  ImagesPkey = 'images_pkey'
}

/** input type for incrementing numeric columns in table "images" */
export type ImagesIncInput = {
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "images" */
export type ImagesInsertInput = {
  blurDataUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  postImageRelationships?: InputMaybe<PostImageRelationshipsArrRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploader?: InputMaybe<UsersObjRelInsertInput>;
  uploaderId?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<UsersArrRelInsertInput>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type ImagesMaxFields = {
  __typename?: 'ImagesMaxFields';
  blurDataUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  uploaderId?: Maybe<Scalars['uuid']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "images" */
export type ImagesMaxOrderBy = {
  blurDataUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  height?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  uploaderId?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  width?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ImagesMinFields = {
  __typename?: 'ImagesMinFields';
  blurDataUrl?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  uploaderId?: Maybe<Scalars['uuid']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "images" */
export type ImagesMinOrderBy = {
  blurDataUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  height?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  uploaderId?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  width?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "images" */
export type ImagesMutationResponse = {
  __typename?: 'ImagesMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Images>;
};

/** input type for inserting object relation for remote table "images" */
export type ImagesObjRelInsertInput = {
  data: ImagesInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ImagesOnConflict>;
};

/** on_conflict condition type for table "images" */
export type ImagesOnConflict = {
  constraint: ImagesConstraint;
  updateColumns?: Array<ImagesUpdateColumn>;
  where?: InputMaybe<ImagesBoolExp>;
};

/** Ordering options when selecting data from "images". */
export type ImagesOrderBy = {
  blurDataUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  height?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  postImageRelationshipsAggregate?: InputMaybe<PostImageRelationshipsAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  uploader?: InputMaybe<UsersOrderBy>;
  uploaderId?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
  usersAggregate?: InputMaybe<UsersAggregateOrderBy>;
  width?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: images */
export type ImagesPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "images" */
export enum ImagesSelectColumn {
  /** column name */
  BlurDataUrl = 'blurDataUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploaderId = 'uploaderId',
  /** column name */
  Url = 'url',
  /** column name */
  Width = 'width'
}

/** input type for updating data in table "images" */
export type ImagesSetInput = {
  blurDataUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploaderId?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type ImagesStddevFields = {
  __typename?: 'ImagesStddevFields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "images" */
export type ImagesStddevOrderBy = {
  height?: InputMaybe<OrderBy>;
  width?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type ImagesStddevPopFields = {
  __typename?: 'ImagesStddevPopFields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevPop() on columns of table "images" */
export type ImagesStddevPopOrderBy = {
  height?: InputMaybe<OrderBy>;
  width?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type ImagesStddevSampFields = {
  __typename?: 'ImagesStddevSampFields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by stddevSamp() on columns of table "images" */
export type ImagesStddevSampOrderBy = {
  height?: InputMaybe<OrderBy>;
  width?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "images" */
export type ImagesStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ImagesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ImagesStreamCursorValueInput = {
  blurDataUrl?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploaderId?: InputMaybe<Scalars['uuid']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type ImagesSumFields = {
  __typename?: 'ImagesSumFields';
  height?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "images" */
export type ImagesSumOrderBy = {
  height?: InputMaybe<OrderBy>;
  width?: InputMaybe<OrderBy>;
};

/** update columns of table "images" */
export enum ImagesUpdateColumn {
  /** column name */
  BlurDataUrl = 'blurDataUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploaderId = 'uploaderId',
  /** column name */
  Url = 'url',
  /** column name */
  Width = 'width'
}

export type ImagesUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ImagesIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ImagesSetInput>;
  /** filter the rows which have to be updated */
  where: ImagesBoolExp;
};

/** aggregate varPop on columns */
export type ImagesVarPopFields = {
  __typename?: 'ImagesVarPopFields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by varPop() on columns of table "images" */
export type ImagesVarPopOrderBy = {
  height?: InputMaybe<OrderBy>;
  width?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type ImagesVarSampFields = {
  __typename?: 'ImagesVarSampFields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by varSamp() on columns of table "images" */
export type ImagesVarSampOrderBy = {
  height?: InputMaybe<OrderBy>;
  width?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ImagesVarianceFields = {
  __typename?: 'ImagesVarianceFields';
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "images" */
export type ImagesVarianceOrderBy = {
  height?: InputMaybe<OrderBy>;
  width?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'ASC',
  /** in ascending order, nulls first */
  AscNullsFirst = 'ASC_NULLS_FIRST',
  /** in ascending order, nulls last */
  AscNullsLast = 'ASC_NULLS_LAST',
  /** in descending order, nulls first */
  Desc = 'DESC',
  /** in descending order, nulls first */
  DescNullsFirst = 'DESC_NULLS_FIRST',
  /** in descending order, nulls last */
  DescNullsLast = 'DESC_NULLS_LAST'
}

/** columns and relationships of "post_image_relationships" */
export type PostImageRelationships = {
  __typename?: 'PostImageRelationships';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  image: Images;
  imageId: Scalars['uuid']['output'];
  isFeatured: Scalars['Boolean']['output'];
  /** An object relationship */
  post: Posts;
  postId: Scalars['uuid']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};

/** aggregated selection of "post_image_relationships" */
export type PostImageRelationshipsAggregate = {
  __typename?: 'PostImageRelationshipsAggregate';
  aggregate?: Maybe<PostImageRelationshipsAggregateFields>;
  nodes: Array<PostImageRelationships>;
};

export type PostImageRelationshipsAggregateBoolExp = {
  bool_and?: InputMaybe<PostImageRelationshipsAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<PostImageRelationshipsAggregateBoolExpBool_Or>;
  count?: InputMaybe<PostImageRelationshipsAggregateBoolExpCount>;
};

/** aggregate fields of "post_image_relationships" */
export type PostImageRelationshipsAggregateFields = {
  __typename?: 'PostImageRelationshipsAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<PostImageRelationshipsMaxFields>;
  min?: Maybe<PostImageRelationshipsMinFields>;
};


/** aggregate fields of "post_image_relationships" */
export type PostImageRelationshipsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PostImageRelationshipsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "post_image_relationships" */
export type PostImageRelationshipsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PostImageRelationshipsMaxOrderBy>;
  min?: InputMaybe<PostImageRelationshipsMinOrderBy>;
};

/** input type for inserting array relation for remote table "post_image_relationships" */
export type PostImageRelationshipsArrRelInsertInput = {
  data: Array<PostImageRelationshipsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<PostImageRelationshipsOnConflict>;
};

/** Boolean expression to filter rows from the table "post_image_relationships". All fields are combined with a logical 'AND'. */
export type PostImageRelationshipsBoolExp = {
  _and?: InputMaybe<Array<PostImageRelationshipsBoolExp>>;
  _not?: InputMaybe<PostImageRelationshipsBoolExp>;
  _or?: InputMaybe<Array<PostImageRelationshipsBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  image?: InputMaybe<ImagesBoolExp>;
  imageId?: InputMaybe<UuidComparisonExp>;
  isFeatured?: InputMaybe<BooleanComparisonExp>;
  post?: InputMaybe<PostsBoolExp>;
  postId?: InputMaybe<UuidComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "post_image_relationships" */
export enum PostImageRelationshipsConstraint {
  /** unique or primary key constraint on columns "id" */
  PostImageRelationshipsPkey = 'post_image_relationships_pkey'
}

/** input type for inserting data into table "post_image_relationships" */
export type PostImageRelationshipsInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<ImagesObjRelInsertInput>;
  imageId?: InputMaybe<Scalars['uuid']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  post?: InputMaybe<PostsObjRelInsertInput>;
  postId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type PostImageRelationshipsMaxFields = {
  __typename?: 'PostImageRelationshipsMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  imageId?: Maybe<Scalars['uuid']['output']>;
  postId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "post_image_relationships" */
export type PostImageRelationshipsMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  imageId?: InputMaybe<OrderBy>;
  postId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PostImageRelationshipsMinFields = {
  __typename?: 'PostImageRelationshipsMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  imageId?: Maybe<Scalars['uuid']['output']>;
  postId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "post_image_relationships" */
export type PostImageRelationshipsMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  imageId?: InputMaybe<OrderBy>;
  postId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "post_image_relationships" */
export type PostImageRelationshipsMutationResponse = {
  __typename?: 'PostImageRelationshipsMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<PostImageRelationships>;
};

/** on_conflict condition type for table "post_image_relationships" */
export type PostImageRelationshipsOnConflict = {
  constraint: PostImageRelationshipsConstraint;
  updateColumns?: Array<PostImageRelationshipsUpdateColumn>;
  where?: InputMaybe<PostImageRelationshipsBoolExp>;
};

/** Ordering options when selecting data from "post_image_relationships". */
export type PostImageRelationshipsOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<ImagesOrderBy>;
  imageId?: InputMaybe<OrderBy>;
  isFeatured?: InputMaybe<OrderBy>;
  post?: InputMaybe<PostsOrderBy>;
  postId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: post_image_relationships */
export type PostImageRelationshipsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "post_image_relationships" */
export enum PostImageRelationshipsSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'imageId',
  /** column name */
  IsFeatured = 'isFeatured',
  /** column name */
  PostId = 'postId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "postImageRelationshipsAggregateBoolExpBool_andArgumentsColumns" columns of table "post_image_relationships" */
export enum PostImageRelationshipsSelectColumnPostImageRelationshipsAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  IsFeatured = 'isFeatured'
}

/** select "postImageRelationshipsAggregateBoolExpBool_orArgumentsColumns" columns of table "post_image_relationships" */
export enum PostImageRelationshipsSelectColumnPostImageRelationshipsAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  IsFeatured = 'isFeatured'
}

/** input type for updating data in table "post_image_relationships" */
export type PostImageRelationshipsSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  imageId?: InputMaybe<Scalars['uuid']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  postId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "post_image_relationships" */
export type PostImageRelationshipsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PostImageRelationshipsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PostImageRelationshipsStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  imageId?: InputMaybe<Scalars['uuid']['input']>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  postId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "post_image_relationships" */
export enum PostImageRelationshipsUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'imageId',
  /** column name */
  IsFeatured = 'isFeatured',
  /** column name */
  PostId = 'postId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type PostImageRelationshipsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PostImageRelationshipsSetInput>;
  /** filter the rows which have to be updated */
  where: PostImageRelationshipsBoolExp;
};

/** columns and relationships of "post_reactions" */
export type PostReactions = {
  __typename?: 'PostReactions';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  post: Posts;
  postId: Scalars['uuid']['output'];
  /** An object relationship */
  reactor: Users;
  reactorId: Scalars['uuid']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};

/** aggregated selection of "post_reactions" */
export type PostReactionsAggregate = {
  __typename?: 'PostReactionsAggregate';
  aggregate?: Maybe<PostReactionsAggregateFields>;
  nodes: Array<PostReactions>;
};

export type PostReactionsAggregateBoolExp = {
  count?: InputMaybe<PostReactionsAggregateBoolExpCount>;
};

/** aggregate fields of "post_reactions" */
export type PostReactionsAggregateFields = {
  __typename?: 'PostReactionsAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<PostReactionsMaxFields>;
  min?: Maybe<PostReactionsMinFields>;
};


/** aggregate fields of "post_reactions" */
export type PostReactionsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PostReactionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "post_reactions" */
export type PostReactionsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PostReactionsMaxOrderBy>;
  min?: InputMaybe<PostReactionsMinOrderBy>;
};

/** input type for inserting array relation for remote table "post_reactions" */
export type PostReactionsArrRelInsertInput = {
  data: Array<PostReactionsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<PostReactionsOnConflict>;
};

/** Boolean expression to filter rows from the table "post_reactions". All fields are combined with a logical 'AND'. */
export type PostReactionsBoolExp = {
  _and?: InputMaybe<Array<PostReactionsBoolExp>>;
  _not?: InputMaybe<PostReactionsBoolExp>;
  _or?: InputMaybe<Array<PostReactionsBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  post?: InputMaybe<PostsBoolExp>;
  postId?: InputMaybe<UuidComparisonExp>;
  reactor?: InputMaybe<UsersBoolExp>;
  reactorId?: InputMaybe<UuidComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "post_reactions" */
export enum PostReactionsConstraint {
  /** unique or primary key constraint on columns "id" */
  PostReactionsPkey = 'post_reactions_pkey',
  /** unique or primary key constraint on columns "post_id", "type", "reactor_id" */
  PostReactionsPostIdReactorIdTypeKey = 'post_reactions_post_id_reactor_id_type_key'
}

/** input type for inserting data into table "post_reactions" */
export type PostReactionsInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  post?: InputMaybe<PostsObjRelInsertInput>;
  postId?: InputMaybe<Scalars['uuid']['input']>;
  reactor?: InputMaybe<UsersObjRelInsertInput>;
  reactorId?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type PostReactionsMaxFields = {
  __typename?: 'PostReactionsMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  postId?: Maybe<Scalars['uuid']['output']>;
  reactorId?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "post_reactions" */
export type PostReactionsMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  postId?: InputMaybe<OrderBy>;
  reactorId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PostReactionsMinFields = {
  __typename?: 'PostReactionsMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  postId?: Maybe<Scalars['uuid']['output']>;
  reactorId?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "post_reactions" */
export type PostReactionsMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  postId?: InputMaybe<OrderBy>;
  reactorId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "post_reactions" */
export type PostReactionsMutationResponse = {
  __typename?: 'PostReactionsMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<PostReactions>;
};

/** on_conflict condition type for table "post_reactions" */
export type PostReactionsOnConflict = {
  constraint: PostReactionsConstraint;
  updateColumns?: Array<PostReactionsUpdateColumn>;
  where?: InputMaybe<PostReactionsBoolExp>;
};

/** Ordering options when selecting data from "post_reactions". */
export type PostReactionsOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  post?: InputMaybe<PostsOrderBy>;
  postId?: InputMaybe<OrderBy>;
  reactor?: InputMaybe<UsersOrderBy>;
  reactorId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: post_reactions */
export type PostReactionsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "post_reactions" */
export enum PostReactionsSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'postId',
  /** column name */
  ReactorId = 'reactorId',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "post_reactions" */
export type PostReactionsSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  postId?: InputMaybe<Scalars['uuid']['input']>;
  reactorId?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "post_reactions" */
export type PostReactionsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PostReactionsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PostReactionsStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  postId?: InputMaybe<Scalars['uuid']['input']>;
  reactorId?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "post_reactions" */
export enum PostReactionsUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'postId',
  /** column name */
  ReactorId = 'reactorId',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type PostReactionsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PostReactionsSetInput>;
  /** filter the rows which have to be updated */
  where: PostReactionsBoolExp;
};

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'Posts';
  /** An object relationship */
  author: Users;
  authorId: Scalars['uuid']['output'];
  body: Scalars['String']['output'];
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  commentsAggregate: CommentsAggregate;
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  isArchived: Scalars['Boolean']['output'];
  /** An array relationship */
  postImageRelationships: Array<PostImageRelationships>;
  /** An aggregate relationship */
  postImageRelationshipsAggregate: PostImageRelationshipsAggregate;
  /** An array relationship */
  postReactions: Array<PostReactions>;
  /** An aggregate relationship */
  postReactionsAggregate: PostReactionsAggregate;
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "posts" */
export type PostsCommentsArgs = {
  distinctOn?: InputMaybe<Array<CommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
  where?: InputMaybe<CommentsBoolExp>;
};


/** columns and relationships of "posts" */
export type PostsCommentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
  where?: InputMaybe<CommentsBoolExp>;
};


/** columns and relationships of "posts" */
export type PostsPostImageRelationshipsArgs = {
  distinctOn?: InputMaybe<Array<PostImageRelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostImageRelationshipsOrderBy>>;
  where?: InputMaybe<PostImageRelationshipsBoolExp>;
};


/** columns and relationships of "posts" */
export type PostsPostImageRelationshipsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostImageRelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostImageRelationshipsOrderBy>>;
  where?: InputMaybe<PostImageRelationshipsBoolExp>;
};


/** columns and relationships of "posts" */
export type PostsPostReactionsArgs = {
  distinctOn?: InputMaybe<Array<PostReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostReactionsOrderBy>>;
  where?: InputMaybe<PostReactionsBoolExp>;
};


/** columns and relationships of "posts" */
export type PostsPostReactionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostReactionsOrderBy>>;
  where?: InputMaybe<PostReactionsBoolExp>;
};

/** aggregated selection of "posts" */
export type PostsAggregate = {
  __typename?: 'PostsAggregate';
  aggregate?: Maybe<PostsAggregateFields>;
  nodes: Array<Posts>;
};

export type PostsAggregateBoolExp = {
  bool_and?: InputMaybe<PostsAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<PostsAggregateBoolExpBool_Or>;
  count?: InputMaybe<PostsAggregateBoolExpCount>;
};

/** aggregate fields of "posts" */
export type PostsAggregateFields = {
  __typename?: 'PostsAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<PostsMaxFields>;
  min?: Maybe<PostsMinFields>;
};


/** aggregate fields of "posts" */
export type PostsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PostsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "posts" */
export type PostsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<PostsMaxOrderBy>;
  min?: InputMaybe<PostsMinOrderBy>;
};

/** input type for inserting array relation for remote table "posts" */
export type PostsArrRelInsertInput = {
  data: Array<PostsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<PostsOnConflict>;
};

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type PostsBoolExp = {
  _and?: InputMaybe<Array<PostsBoolExp>>;
  _not?: InputMaybe<PostsBoolExp>;
  _or?: InputMaybe<Array<PostsBoolExp>>;
  author?: InputMaybe<UsersBoolExp>;
  authorId?: InputMaybe<UuidComparisonExp>;
  body?: InputMaybe<StringComparisonExp>;
  comments?: InputMaybe<CommentsBoolExp>;
  commentsAggregate?: InputMaybe<CommentsAggregateBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isArchived?: InputMaybe<BooleanComparisonExp>;
  postImageRelationships?: InputMaybe<PostImageRelationshipsBoolExp>;
  postImageRelationshipsAggregate?: InputMaybe<PostImageRelationshipsAggregateBoolExp>;
  postReactions?: InputMaybe<PostReactionsBoolExp>;
  postReactionsAggregate?: InputMaybe<PostReactionsAggregateBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "posts" */
export enum PostsConstraint {
  /** unique or primary key constraint on columns "id" */
  PostsPkey = 'posts_pkey'
}

/** input type for inserting data into table "posts" */
export type PostsInsertInput = {
  author?: InputMaybe<UsersObjRelInsertInput>;
  authorId?: InputMaybe<Scalars['uuid']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<CommentsArrRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  postImageRelationships?: InputMaybe<PostImageRelationshipsArrRelInsertInput>;
  postReactions?: InputMaybe<PostReactionsArrRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type PostsMaxFields = {
  __typename?: 'PostsMaxFields';
  authorId?: Maybe<Scalars['uuid']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "posts" */
export type PostsMaxOrderBy = {
  authorId?: InputMaybe<OrderBy>;
  body?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type PostsMinFields = {
  __typename?: 'PostsMinFields';
  authorId?: Maybe<Scalars['uuid']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "posts" */
export type PostsMinOrderBy = {
  authorId?: InputMaybe<OrderBy>;
  body?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "posts" */
export type PostsMutationResponse = {
  __typename?: 'PostsMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Posts>;
};

/** input type for inserting object relation for remote table "posts" */
export type PostsObjRelInsertInput = {
  data: PostsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<PostsOnConflict>;
};

/** on_conflict condition type for table "posts" */
export type PostsOnConflict = {
  constraint: PostsConstraint;
  updateColumns?: Array<PostsUpdateColumn>;
  where?: InputMaybe<PostsBoolExp>;
};

/** Ordering options when selecting data from "posts". */
export type PostsOrderBy = {
  author?: InputMaybe<UsersOrderBy>;
  authorId?: InputMaybe<OrderBy>;
  body?: InputMaybe<OrderBy>;
  commentsAggregate?: InputMaybe<CommentsAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isArchived?: InputMaybe<OrderBy>;
  postImageRelationshipsAggregate?: InputMaybe<PostImageRelationshipsAggregateOrderBy>;
  postReactionsAggregate?: InputMaybe<PostReactionsAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: posts */
export type PostsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "posts" */
export enum PostsSelectColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsArchived = 'isArchived',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "postsAggregateBoolExpBool_andArgumentsColumns" columns of table "posts" */
export enum PostsSelectColumnPostsAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  IsArchived = 'isArchived'
}

/** select "postsAggregateBoolExpBool_orArgumentsColumns" columns of table "posts" */
export enum PostsSelectColumnPostsAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  IsArchived = 'isArchived'
}

/** input type for updating data in table "posts" */
export type PostsSetInput = {
  authorId?: InputMaybe<Scalars['uuid']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "posts" */
export type PostsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: PostsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PostsStreamCursorValueInput = {
  authorId?: InputMaybe<Scalars['uuid']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "posts" */
export enum PostsUpdateColumn {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Body = 'body',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsArchived = 'isArchived',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type PostsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PostsSetInput>;
  /** filter the rows which have to be updated */
  where: PostsBoolExp;
};

/** columns and relationships of "provider_type" */
export type ProviderType = {
  __typename?: 'ProviderType';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accountsAggregate: AccountsAggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "provider_type" */
export type ProviderTypeAccountsArgs = {
  distinctOn?: InputMaybe<Array<AccountsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
  where?: InputMaybe<AccountsBoolExp>;
};


/** columns and relationships of "provider_type" */
export type ProviderTypeAccountsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AccountsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
  where?: InputMaybe<AccountsBoolExp>;
};

/** aggregated selection of "provider_type" */
export type ProviderTypeAggregate = {
  __typename?: 'ProviderTypeAggregate';
  aggregate?: Maybe<ProviderTypeAggregateFields>;
  nodes: Array<ProviderType>;
};

/** aggregate fields of "provider_type" */
export type ProviderTypeAggregateFields = {
  __typename?: 'ProviderTypeAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<ProviderTypeMaxFields>;
  min?: Maybe<ProviderTypeMinFields>;
};


/** aggregate fields of "provider_type" */
export type ProviderTypeAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProviderTypeSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "provider_type". All fields are combined with a logical 'AND'. */
export type ProviderTypeBoolExp = {
  _and?: InputMaybe<Array<ProviderTypeBoolExp>>;
  _not?: InputMaybe<ProviderTypeBoolExp>;
  _or?: InputMaybe<Array<ProviderTypeBoolExp>>;
  accounts?: InputMaybe<AccountsBoolExp>;
  accountsAggregate?: InputMaybe<AccountsAggregateBoolExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "provider_type" */
export enum ProviderTypeConstraint {
  /** unique or primary key constraint on columns "value" */
  ProviderTypePkey = 'provider_type_pkey'
}

export enum ProviderTypeEnum {
  Credentials = 'CREDENTIALS',
  Email = 'EMAIL',
  Oauth = 'OAUTH',
  Oidc = 'OIDC'
}

/** Boolean expression to compare columns of type "ProviderTypeEnum". All fields are combined with logical 'AND'. */
export type ProviderTypeEnumComparisonExp = {
  _eq?: InputMaybe<ProviderTypeEnum>;
  _in?: InputMaybe<Array<ProviderTypeEnum>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<ProviderTypeEnum>;
  _nin?: InputMaybe<Array<ProviderTypeEnum>>;
};

/** input type for inserting data into table "provider_type" */
export type ProviderTypeInsertInput = {
  accounts?: InputMaybe<AccountsArrRelInsertInput>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ProviderTypeMaxFields = {
  __typename?: 'ProviderTypeMaxFields';
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ProviderTypeMinFields = {
  __typename?: 'ProviderTypeMinFields';
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "provider_type" */
export type ProviderTypeMutationResponse = {
  __typename?: 'ProviderTypeMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ProviderType>;
};

/** input type for inserting object relation for remote table "provider_type" */
export type ProviderTypeObjRelInsertInput = {
  data: ProviderTypeInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ProviderTypeOnConflict>;
};

/** on_conflict condition type for table "provider_type" */
export type ProviderTypeOnConflict = {
  constraint: ProviderTypeConstraint;
  updateColumns?: Array<ProviderTypeUpdateColumn>;
  where?: InputMaybe<ProviderTypeBoolExp>;
};

/** Ordering options when selecting data from "provider_type". */
export type ProviderTypeOrderBy = {
  accountsAggregate?: InputMaybe<AccountsAggregateOrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: provider_type */
export type ProviderTypePkColumnsInput = {
  value: Scalars['String']['input'];
};

/** select columns of table "provider_type" */
export enum ProviderTypeSelectColumn {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "provider_type" */
export type ProviderTypeSetInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "provider_type" */
export type ProviderTypeStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ProviderTypeStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ProviderTypeStreamCursorValueInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "provider_type" */
export enum ProviderTypeUpdateColumn {
  /** column name */
  Value = 'value'
}

export type ProviderTypeUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProviderTypeSetInput>;
  /** filter the rows which have to be updated */
  where: ProviderTypeBoolExp;
};

/** columns and relationships of "sessions" */
export type Sessions = {
  __typename?: 'Sessions';
  expires: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  sessionToken: Scalars['String']['output'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid']['output'];
};

/** aggregated selection of "sessions" */
export type SessionsAggregate = {
  __typename?: 'SessionsAggregate';
  aggregate?: Maybe<SessionsAggregateFields>;
  nodes: Array<Sessions>;
};

export type SessionsAggregateBoolExp = {
  count?: InputMaybe<SessionsAggregateBoolExpCount>;
};

/** aggregate fields of "sessions" */
export type SessionsAggregateFields = {
  __typename?: 'SessionsAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<SessionsMaxFields>;
  min?: Maybe<SessionsMinFields>;
};


/** aggregate fields of "sessions" */
export type SessionsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<SessionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "sessions" */
export type SessionsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<SessionsMaxOrderBy>;
  min?: InputMaybe<SessionsMinOrderBy>;
};

/** input type for inserting array relation for remote table "sessions" */
export type SessionsArrRelInsertInput = {
  data: Array<SessionsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<SessionsOnConflict>;
};

/** Boolean expression to filter rows from the table "sessions". All fields are combined with a logical 'AND'. */
export type SessionsBoolExp = {
  _and?: InputMaybe<Array<SessionsBoolExp>>;
  _not?: InputMaybe<SessionsBoolExp>;
  _or?: InputMaybe<Array<SessionsBoolExp>>;
  expires?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  sessionToken?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "sessions" */
export enum SessionsConstraint {
  /** unique or primary key constraint on columns "sessionToken" */
  SessionsPkey = 'sessions_pkey'
}

/** input type for inserting data into table "sessions" */
export type SessionsInsertInput = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type SessionsMaxFields = {
  __typename?: 'SessionsMaxFields';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "sessions" */
export type SessionsMaxOrderBy = {
  expires?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sessionToken?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type SessionsMinFields = {
  __typename?: 'SessionsMinFields';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "sessions" */
export type SessionsMinOrderBy = {
  expires?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sessionToken?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "sessions" */
export type SessionsMutationResponse = {
  __typename?: 'SessionsMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Sessions>;
};

/** on_conflict condition type for table "sessions" */
export type SessionsOnConflict = {
  constraint: SessionsConstraint;
  updateColumns?: Array<SessionsUpdateColumn>;
  where?: InputMaybe<SessionsBoolExp>;
};

/** Ordering options when selecting data from "sessions". */
export type SessionsOrderBy = {
  expires?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sessionToken?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: sessions */
export type SessionsPkColumnsInput = {
  sessionToken: Scalars['String']['input'];
};

/** select columns of table "sessions" */
export enum SessionsSelectColumn {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "sessions" */
export type SessionsSetInput = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "sessions" */
export type SessionsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: SessionsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type SessionsStreamCursorValueInput = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "sessions" */
export enum SessionsUpdateColumn {
  /** column name */
  Expires = 'expires',
  /** column name */
  Id = 'id',
  /** column name */
  SessionToken = 'sessionToken',
  /** column name */
  UserId = 'userId'
}

export type SessionsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<SessionsSetInput>;
  /** filter the rows which have to be updated */
  where: SessionsBoolExp;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user_user_relationship_state_types" */
export type UserUserRelationshipStateTypes = {
  __typename?: 'UserUserRelationshipStateTypes';
  description?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

/** aggregated selection of "user_user_relationship_state_types" */
export type UserUserRelationshipStateTypesAggregate = {
  __typename?: 'UserUserRelationshipStateTypesAggregate';
  aggregate?: Maybe<UserUserRelationshipStateTypesAggregateFields>;
  nodes: Array<UserUserRelationshipStateTypes>;
};

/** aggregate fields of "user_user_relationship_state_types" */
export type UserUserRelationshipStateTypesAggregateFields = {
  __typename?: 'UserUserRelationshipStateTypesAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<UserUserRelationshipStateTypesMaxFields>;
  min?: Maybe<UserUserRelationshipStateTypesMinFields>;
};


/** aggregate fields of "user_user_relationship_state_types" */
export type UserUserRelationshipStateTypesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserUserRelationshipStateTypesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user_user_relationship_state_types". All fields are combined with a logical 'AND'. */
export type UserUserRelationshipStateTypesBoolExp = {
  _and?: InputMaybe<Array<UserUserRelationshipStateTypesBoolExp>>;
  _not?: InputMaybe<UserUserRelationshipStateTypesBoolExp>;
  _or?: InputMaybe<Array<UserUserRelationshipStateTypesBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "user_user_relationship_state_types" */
export enum UserUserRelationshipStateTypesConstraint {
  /** unique or primary key constraint on columns "value" */
  UserUserRelationshipStateTypesPkey = 'user_user_relationship_state_types_pkey'
}

export enum UserUserRelationshipStateTypesEnum {
  /** this relationship is currently active */
  IsActive = 'IS_ACTIVE',
  /** this relationship has been approved */
  IsApproved = 'IS_APPROVED',
  /** this relationship has been ignored */
  IsIgnored = 'IS_IGNORED'
}

/** Boolean expression to compare columns of type "UserUserRelationshipStateTypesEnum". All fields are combined with logical 'AND'. */
export type UserUserRelationshipStateTypesEnumComparisonExp = {
  _eq?: InputMaybe<UserUserRelationshipStateTypesEnum>;
  _in?: InputMaybe<Array<UserUserRelationshipStateTypesEnum>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<UserUserRelationshipStateTypesEnum>;
  _nin?: InputMaybe<Array<UserUserRelationshipStateTypesEnum>>;
};

/** input type for inserting data into table "user_user_relationship_state_types" */
export type UserUserRelationshipStateTypesInsertInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type UserUserRelationshipStateTypesMaxFields = {
  __typename?: 'UserUserRelationshipStateTypesMaxFields';
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type UserUserRelationshipStateTypesMinFields = {
  __typename?: 'UserUserRelationshipStateTypesMinFields';
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_user_relationship_state_types" */
export type UserUserRelationshipStateTypesMutationResponse = {
  __typename?: 'UserUserRelationshipStateTypesMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<UserUserRelationshipStateTypes>;
};

/** on_conflict condition type for table "user_user_relationship_state_types" */
export type UserUserRelationshipStateTypesOnConflict = {
  constraint: UserUserRelationshipStateTypesConstraint;
  updateColumns?: Array<UserUserRelationshipStateTypesUpdateColumn>;
  where?: InputMaybe<UserUserRelationshipStateTypesBoolExp>;
};

/** Ordering options when selecting data from "user_user_relationship_state_types". */
export type UserUserRelationshipStateTypesOrderBy = {
  description?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_user_relationship_state_types */
export type UserUserRelationshipStateTypesPkColumnsInput = {
  value: Scalars['String']['input'];
};

/** select columns of table "user_user_relationship_state_types" */
export enum UserUserRelationshipStateTypesSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "user_user_relationship_state_types" */
export type UserUserRelationshipStateTypesSetInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "user_user_relationship_state_types" */
export type UserUserRelationshipStateTypesStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserUserRelationshipStateTypesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserUserRelationshipStateTypesStreamCursorValueInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "user_user_relationship_state_types" */
export enum UserUserRelationshipStateTypesUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type UserUserRelationshipStateTypesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserUserRelationshipStateTypesSetInput>;
  /** filter the rows which have to be updated */
  where: UserUserRelationshipStateTypesBoolExp;
};

/** columns and relationships of "user_user_relationship_states" */
export type UserUserRelationshipStates = {
  __typename?: 'UserUserRelationshipStates';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  type: UserUserRelationshipStateTypesEnum;
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  userUserRelationship: UserUserRelationships;
  userUserRelationshipId: Scalars['uuid']['output'];
};

/** aggregated selection of "user_user_relationship_states" */
export type UserUserRelationshipStatesAggregate = {
  __typename?: 'UserUserRelationshipStatesAggregate';
  aggregate?: Maybe<UserUserRelationshipStatesAggregateFields>;
  nodes: Array<UserUserRelationshipStates>;
};

export type UserUserRelationshipStatesAggregateBoolExp = {
  count?: InputMaybe<UserUserRelationshipStatesAggregateBoolExpCount>;
};

/** aggregate fields of "user_user_relationship_states" */
export type UserUserRelationshipStatesAggregateFields = {
  __typename?: 'UserUserRelationshipStatesAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<UserUserRelationshipStatesMaxFields>;
  min?: Maybe<UserUserRelationshipStatesMinFields>;
};


/** aggregate fields of "user_user_relationship_states" */
export type UserUserRelationshipStatesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserUserRelationshipStatesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_user_relationship_states" */
export type UserUserRelationshipStatesAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UserUserRelationshipStatesMaxOrderBy>;
  min?: InputMaybe<UserUserRelationshipStatesMinOrderBy>;
};

/** input type for inserting array relation for remote table "user_user_relationship_states" */
export type UserUserRelationshipStatesArrRelInsertInput = {
  data: Array<UserUserRelationshipStatesInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<UserUserRelationshipStatesOnConflict>;
};

/** Boolean expression to filter rows from the table "user_user_relationship_states". All fields are combined with a logical 'AND'. */
export type UserUserRelationshipStatesBoolExp = {
  _and?: InputMaybe<Array<UserUserRelationshipStatesBoolExp>>;
  _not?: InputMaybe<UserUserRelationshipStatesBoolExp>;
  _or?: InputMaybe<Array<UserUserRelationshipStatesBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  type?: InputMaybe<UserUserRelationshipStateTypesEnumComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userUserRelationship?: InputMaybe<UserUserRelationshipsBoolExp>;
  userUserRelationshipId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "user_user_relationship_states" */
export enum UserUserRelationshipStatesConstraint {
  /** unique or primary key constraint on columns "id" */
  UserUserRelationshipStatesPkey = 'user_user_relationship_states_pkey',
  /** unique or primary key constraint on columns "type", "user_user_relationship_id" */
  UserUserRelationshipStatesTypeUserUserRelationshipIKey = 'user_user_relationship_states_type_user_user_relationship_i_key'
}

/** input type for inserting data into table "user_user_relationship_states" */
export type UserUserRelationshipStatesInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<UserUserRelationshipStateTypesEnum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userUserRelationship?: InputMaybe<UserUserRelationshipsObjRelInsertInput>;
  userUserRelationshipId?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type UserUserRelationshipStatesMaxFields = {
  __typename?: 'UserUserRelationshipStatesMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userUserRelationshipId?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "user_user_relationship_states" */
export type UserUserRelationshipStatesMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userUserRelationshipId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UserUserRelationshipStatesMinFields = {
  __typename?: 'UserUserRelationshipStatesMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userUserRelationshipId?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "user_user_relationship_states" */
export type UserUserRelationshipStatesMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userUserRelationshipId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "user_user_relationship_states" */
export type UserUserRelationshipStatesMutationResponse = {
  __typename?: 'UserUserRelationshipStatesMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<UserUserRelationshipStates>;
};

/** on_conflict condition type for table "user_user_relationship_states" */
export type UserUserRelationshipStatesOnConflict = {
  constraint: UserUserRelationshipStatesConstraint;
  updateColumns?: Array<UserUserRelationshipStatesUpdateColumn>;
  where?: InputMaybe<UserUserRelationshipStatesBoolExp>;
};

/** Ordering options when selecting data from "user_user_relationship_states". */
export type UserUserRelationshipStatesOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userUserRelationship?: InputMaybe<UserUserRelationshipsOrderBy>;
  userUserRelationshipId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_user_relationship_states */
export type UserUserRelationshipStatesPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user_user_relationship_states" */
export enum UserUserRelationshipStatesSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserUserRelationshipId = 'userUserRelationshipId'
}

/** input type for updating data in table "user_user_relationship_states" */
export type UserUserRelationshipStatesSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<UserUserRelationshipStateTypesEnum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userUserRelationshipId?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "user_user_relationship_states" */
export type UserUserRelationshipStatesStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserUserRelationshipStatesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserUserRelationshipStatesStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<UserUserRelationshipStateTypesEnum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userUserRelationshipId?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "user_user_relationship_states" */
export enum UserUserRelationshipStatesUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserUserRelationshipId = 'userUserRelationshipId'
}

export type UserUserRelationshipStatesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserUserRelationshipStatesSetInput>;
  /** filter the rows which have to be updated */
  where: UserUserRelationshipStatesBoolExp;
};

/** columns and relationships of "user_user_relationship_types" */
export type UserUserRelationshipTypes = {
  __typename?: 'UserUserRelationshipTypes';
  description?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

/** aggregated selection of "user_user_relationship_types" */
export type UserUserRelationshipTypesAggregate = {
  __typename?: 'UserUserRelationshipTypesAggregate';
  aggregate?: Maybe<UserUserRelationshipTypesAggregateFields>;
  nodes: Array<UserUserRelationshipTypes>;
};

/** aggregate fields of "user_user_relationship_types" */
export type UserUserRelationshipTypesAggregateFields = {
  __typename?: 'UserUserRelationshipTypesAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<UserUserRelationshipTypesMaxFields>;
  min?: Maybe<UserUserRelationshipTypesMinFields>;
};


/** aggregate fields of "user_user_relationship_types" */
export type UserUserRelationshipTypesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserUserRelationshipTypesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user_user_relationship_types". All fields are combined with a logical 'AND'. */
export type UserUserRelationshipTypesBoolExp = {
  _and?: InputMaybe<Array<UserUserRelationshipTypesBoolExp>>;
  _not?: InputMaybe<UserUserRelationshipTypesBoolExp>;
  _or?: InputMaybe<Array<UserUserRelationshipTypesBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "user_user_relationship_types" */
export enum UserUserRelationshipTypesConstraint {
  /** unique or primary key constraint on columns "value" */
  RelationshipTypesPkey = 'relationship_types_pkey'
}

export enum UserUserRelationshipTypesEnum {
  /** Source user has blocked target user. */
  Block = 'BLOCK',
  /** Source user has followed target user. */
  Follow = 'FOLLOW',
  /** Source user has unblocked target user. */
  Unblock = 'UNBLOCK',
  /** Source user has unfollowed target user. */
  Unfollow = 'UNFOLLOW'
}

/** Boolean expression to compare columns of type "UserUserRelationshipTypesEnum". All fields are combined with logical 'AND'. */
export type UserUserRelationshipTypesEnumComparisonExp = {
  _eq?: InputMaybe<UserUserRelationshipTypesEnum>;
  _in?: InputMaybe<Array<UserUserRelationshipTypesEnum>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<UserUserRelationshipTypesEnum>;
  _nin?: InputMaybe<Array<UserUserRelationshipTypesEnum>>;
};

/** input type for inserting data into table "user_user_relationship_types" */
export type UserUserRelationshipTypesInsertInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type UserUserRelationshipTypesMaxFields = {
  __typename?: 'UserUserRelationshipTypesMaxFields';
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type UserUserRelationshipTypesMinFields = {
  __typename?: 'UserUserRelationshipTypesMinFields';
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_user_relationship_types" */
export type UserUserRelationshipTypesMutationResponse = {
  __typename?: 'UserUserRelationshipTypesMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<UserUserRelationshipTypes>;
};

/** on_conflict condition type for table "user_user_relationship_types" */
export type UserUserRelationshipTypesOnConflict = {
  constraint: UserUserRelationshipTypesConstraint;
  updateColumns?: Array<UserUserRelationshipTypesUpdateColumn>;
  where?: InputMaybe<UserUserRelationshipTypesBoolExp>;
};

/** Ordering options when selecting data from "user_user_relationship_types". */
export type UserUserRelationshipTypesOrderBy = {
  description?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_user_relationship_types */
export type UserUserRelationshipTypesPkColumnsInput = {
  value: Scalars['String']['input'];
};

/** select columns of table "user_user_relationship_types" */
export enum UserUserRelationshipTypesSelectColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "user_user_relationship_types" */
export type UserUserRelationshipTypesSetInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "user_user_relationship_types" */
export type UserUserRelationshipTypesStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserUserRelationshipTypesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserUserRelationshipTypesStreamCursorValueInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "user_user_relationship_types" */
export enum UserUserRelationshipTypesUpdateColumn {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type UserUserRelationshipTypesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserUserRelationshipTypesSetInput>;
  /** filter the rows which have to be updated */
  where: UserUserRelationshipTypesBoolExp;
};

/** columns and relationships of "user_user_relationships" */
export type UserUserRelationships = {
  __typename?: 'UserUserRelationships';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  sourceUser: Users;
  sourceUserId: Scalars['uuid']['output'];
  /** An array relationship */
  states: Array<UserUserRelationshipStates>;
  /** An aggregate relationship */
  statesAggregate: UserUserRelationshipStatesAggregate;
  /** An object relationship */
  targetUser: Users;
  targetUserId: Scalars['uuid']['output'];
  type?: Maybe<UserUserRelationshipTypesEnum>;
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "user_user_relationships" */
export type UserUserRelationshipsStatesArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipStatesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipStatesOrderBy>>;
  where?: InputMaybe<UserUserRelationshipStatesBoolExp>;
};


/** columns and relationships of "user_user_relationships" */
export type UserUserRelationshipsStatesAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipStatesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipStatesOrderBy>>;
  where?: InputMaybe<UserUserRelationshipStatesBoolExp>;
};

/** aggregated selection of "user_user_relationships" */
export type UserUserRelationshipsAggregate = {
  __typename?: 'UserUserRelationshipsAggregate';
  aggregate?: Maybe<UserUserRelationshipsAggregateFields>;
  nodes: Array<UserUserRelationships>;
};

export type UserUserRelationshipsAggregateBoolExp = {
  count?: InputMaybe<UserUserRelationshipsAggregateBoolExpCount>;
};

/** aggregate fields of "user_user_relationships" */
export type UserUserRelationshipsAggregateFields = {
  __typename?: 'UserUserRelationshipsAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<UserUserRelationshipsMaxFields>;
  min?: Maybe<UserUserRelationshipsMinFields>;
};


/** aggregate fields of "user_user_relationships" */
export type UserUserRelationshipsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserUserRelationshipsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_user_relationships" */
export type UserUserRelationshipsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UserUserRelationshipsMaxOrderBy>;
  min?: InputMaybe<UserUserRelationshipsMinOrderBy>;
};

/** input type for inserting array relation for remote table "user_user_relationships" */
export type UserUserRelationshipsArrRelInsertInput = {
  data: Array<UserUserRelationshipsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<UserUserRelationshipsOnConflict>;
};

/** Boolean expression to filter rows from the table "user_user_relationships". All fields are combined with a logical 'AND'. */
export type UserUserRelationshipsBoolExp = {
  _and?: InputMaybe<Array<UserUserRelationshipsBoolExp>>;
  _not?: InputMaybe<UserUserRelationshipsBoolExp>;
  _or?: InputMaybe<Array<UserUserRelationshipsBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  sourceUser?: InputMaybe<UsersBoolExp>;
  sourceUserId?: InputMaybe<UuidComparisonExp>;
  states?: InputMaybe<UserUserRelationshipStatesBoolExp>;
  statesAggregate?: InputMaybe<UserUserRelationshipStatesAggregateBoolExp>;
  targetUser?: InputMaybe<UsersBoolExp>;
  targetUserId?: InputMaybe<UuidComparisonExp>;
  type?: InputMaybe<UserUserRelationshipTypesEnumComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "user_user_relationships" */
export enum UserUserRelationshipsConstraint {
  /** unique or primary key constraint on columns "id" */
  UserUserRelationshipsPkey = 'user_user_relationships_pkey',
  /** unique or primary key constraint on columns "target_user_id", "source_user_id", "type" */
  UserUserRelationshipsSourceUserIdTargetUserIdTypeKey = 'user_user_relationships_source_user_id_target_user_id_type_key'
}

/** input type for inserting data into table "user_user_relationships" */
export type UserUserRelationshipsInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sourceUser?: InputMaybe<UsersObjRelInsertInput>;
  sourceUserId?: InputMaybe<Scalars['uuid']['input']>;
  states?: InputMaybe<UserUserRelationshipStatesArrRelInsertInput>;
  targetUser?: InputMaybe<UsersObjRelInsertInput>;
  targetUserId?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<UserUserRelationshipTypesEnum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type UserUserRelationshipsMaxFields = {
  __typename?: 'UserUserRelationshipsMaxFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  sourceUserId?: Maybe<Scalars['uuid']['output']>;
  targetUserId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "user_user_relationships" */
export type UserUserRelationshipsMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sourceUserId?: InputMaybe<OrderBy>;
  targetUserId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UserUserRelationshipsMinFields = {
  __typename?: 'UserUserRelationshipsMinFields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  sourceUserId?: Maybe<Scalars['uuid']['output']>;
  targetUserId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "user_user_relationships" */
export type UserUserRelationshipsMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sourceUserId?: InputMaybe<OrderBy>;
  targetUserId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "user_user_relationships" */
export type UserUserRelationshipsMutationResponse = {
  __typename?: 'UserUserRelationshipsMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<UserUserRelationships>;
};

/** input type for inserting object relation for remote table "user_user_relationships" */
export type UserUserRelationshipsObjRelInsertInput = {
  data: UserUserRelationshipsInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<UserUserRelationshipsOnConflict>;
};

/** on_conflict condition type for table "user_user_relationships" */
export type UserUserRelationshipsOnConflict = {
  constraint: UserUserRelationshipsConstraint;
  updateColumns?: Array<UserUserRelationshipsUpdateColumn>;
  where?: InputMaybe<UserUserRelationshipsBoolExp>;
};

/** Ordering options when selecting data from "user_user_relationships". */
export type UserUserRelationshipsOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  sourceUser?: InputMaybe<UsersOrderBy>;
  sourceUserId?: InputMaybe<OrderBy>;
  statesAggregate?: InputMaybe<UserUserRelationshipStatesAggregateOrderBy>;
  targetUser?: InputMaybe<UsersOrderBy>;
  targetUserId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user_user_relationships */
export type UserUserRelationshipsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user_user_relationships" */
export enum UserUserRelationshipsSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  SourceUserId = 'sourceUserId',
  /** column name */
  TargetUserId = 'targetUserId',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "user_user_relationships" */
export type UserUserRelationshipsSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sourceUserId?: InputMaybe<Scalars['uuid']['input']>;
  targetUserId?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<UserUserRelationshipTypesEnum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "user_user_relationships" */
export type UserUserRelationshipsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserUserRelationshipsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserUserRelationshipsStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  sourceUserId?: InputMaybe<Scalars['uuid']['input']>;
  targetUserId?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<UserUserRelationshipTypesEnum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "user_user_relationships" */
export enum UserUserRelationshipsUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  SourceUserId = 'sourceUserId',
  /** column name */
  TargetUserId = 'targetUserId',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type UserUserRelationshipsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserUserRelationshipsSetInput>;
  /** filter the rows which have to be updated */
  where: UserUserRelationshipsBoolExp;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'Users';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accountsAggregate: AccountsAggregate;
  bio?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  commentReactions: Array<CommentReactions>;
  /** An aggregate relationship */
  commentReactionsAggregate: CommentReactionsAggregate;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  commentsAggregate: CommentsAggregate;
  createdAt: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['uuid']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  postReactions: Array<PostReactions>;
  /** An aggregate relationship */
  postReactionsAggregate: PostReactionsAggregate;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  postsAggregate: PostsAggregate;
  /** An object relationship */
  profileImage?: Maybe<Images>;
  profileImageId?: Maybe<Scalars['uuid']['output']>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessionsAggregate: SessionsAggregate;
  updatedAt: Scalars['timestamptz']['output'];
  /** An array relationship */
  uploadedImages: Array<Images>;
  /** An aggregate relationship */
  uploadedImagesAggregate: ImagesAggregate;
  /** An array relationship */
  userSourceUserRelationships: Array<UserUserRelationships>;
  /** An aggregate relationship */
  userSourceUserRelationshipsAggregate: UserUserRelationshipsAggregate;
  /** An array relationship */
  userTargetUserRelationships: Array<UserUserRelationships>;
  /** An aggregate relationship */
  userTargetUserRelationshipsAggregate: UserUserRelationshipsAggregate;
};


/** columns and relationships of "users" */
export type UsersAccountsArgs = {
  distinctOn?: InputMaybe<Array<AccountsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
  where?: InputMaybe<AccountsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersAccountsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AccountsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
  where?: InputMaybe<AccountsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersCommentReactionsArgs = {
  distinctOn?: InputMaybe<Array<CommentReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentReactionsOrderBy>>;
  where?: InputMaybe<CommentReactionsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersCommentReactionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentReactionsOrderBy>>;
  where?: InputMaybe<CommentReactionsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersCommentsArgs = {
  distinctOn?: InputMaybe<Array<CommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
  where?: InputMaybe<CommentsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersCommentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
  where?: InputMaybe<CommentsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersPostReactionsArgs = {
  distinctOn?: InputMaybe<Array<PostReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostReactionsOrderBy>>;
  where?: InputMaybe<PostReactionsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersPostReactionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostReactionsOrderBy>>;
  where?: InputMaybe<PostReactionsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersPostsArgs = {
  distinctOn?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersPostsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersSessionsArgs = {
  distinctOn?: InputMaybe<Array<SessionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SessionsOrderBy>>;
  where?: InputMaybe<SessionsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersSessionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<SessionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SessionsOrderBy>>;
  where?: InputMaybe<SessionsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersUploadedImagesArgs = {
  distinctOn?: InputMaybe<Array<ImagesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ImagesOrderBy>>;
  where?: InputMaybe<ImagesBoolExp>;
};


/** columns and relationships of "users" */
export type UsersUploadedImagesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ImagesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ImagesOrderBy>>;
  where?: InputMaybe<ImagesBoolExp>;
};


/** columns and relationships of "users" */
export type UsersUserSourceUserRelationshipsArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipsOrderBy>>;
  where?: InputMaybe<UserUserRelationshipsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersUserSourceUserRelationshipsAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipsOrderBy>>;
  where?: InputMaybe<UserUserRelationshipsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersUserTargetUserRelationshipsArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipsOrderBy>>;
  where?: InputMaybe<UserUserRelationshipsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersUserTargetUserRelationshipsAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipsOrderBy>>;
  where?: InputMaybe<UserUserRelationshipsBoolExp>;
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'UsersAggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

export type UsersAggregateBoolExp = {
  count?: InputMaybe<UsersAggregateBoolExpCount>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'UsersAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};


/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "users" */
export type UsersAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UsersMaxOrderBy>;
  min?: InputMaybe<UsersMinOrderBy>;
};

/** input type for inserting array relation for remote table "users" */
export type UsersArrRelInsertInput = {
  data: Array<UsersInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<UsersOnConflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  accounts?: InputMaybe<AccountsBoolExp>;
  accountsAggregate?: InputMaybe<AccountsAggregateBoolExp>;
  bio?: InputMaybe<StringComparisonExp>;
  commentReactions?: InputMaybe<CommentReactionsBoolExp>;
  commentReactionsAggregate?: InputMaybe<CommentReactionsAggregateBoolExp>;
  comments?: InputMaybe<CommentsBoolExp>;
  commentsAggregate?: InputMaybe<CommentsAggregateBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  emailVerified?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  image?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  postReactions?: InputMaybe<PostReactionsBoolExp>;
  postReactionsAggregate?: InputMaybe<PostReactionsAggregateBoolExp>;
  posts?: InputMaybe<PostsBoolExp>;
  postsAggregate?: InputMaybe<PostsAggregateBoolExp>;
  profileImage?: InputMaybe<ImagesBoolExp>;
  profileImageId?: InputMaybe<UuidComparisonExp>;
  sessions?: InputMaybe<SessionsBoolExp>;
  sessionsAggregate?: InputMaybe<SessionsAggregateBoolExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  uploadedImages?: InputMaybe<ImagesBoolExp>;
  uploadedImagesAggregate?: InputMaybe<ImagesAggregateBoolExp>;
  userSourceUserRelationships?: InputMaybe<UserUserRelationshipsBoolExp>;
  userSourceUserRelationshipsAggregate?: InputMaybe<UserUserRelationshipsAggregateBoolExp>;
  userTargetUserRelationships?: InputMaybe<UserUserRelationshipsBoolExp>;
  userTargetUserRelationshipsAggregate?: InputMaybe<UserUserRelationshipsAggregateBoolExp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  accounts?: InputMaybe<AccountsArrRelInsertInput>;
  bio?: InputMaybe<Scalars['String']['input']>;
  commentReactions?: InputMaybe<CommentReactionsArrRelInsertInput>;
  comments?: InputMaybe<CommentsArrRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  postReactions?: InputMaybe<PostReactionsArrRelInsertInput>;
  posts?: InputMaybe<PostsArrRelInsertInput>;
  profileImage?: InputMaybe<ImagesObjRelInsertInput>;
  profileImageId?: InputMaybe<Scalars['uuid']['input']>;
  sessions?: InputMaybe<SessionsArrRelInsertInput>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  uploadedImages?: InputMaybe<ImagesArrRelInsertInput>;
  userSourceUserRelationships?: InputMaybe<UserUserRelationshipsArrRelInsertInput>;
  userTargetUserRelationships?: InputMaybe<UserUserRelationshipsArrRelInsertInput>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'UsersMaxFields';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  profileImageId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "users" */
export type UsersMaxOrderBy = {
  bio?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  emailVerified?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  profileImageId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'UsersMinFields';
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  profileImageId?: Maybe<Scalars['uuid']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "users" */
export type UsersMinOrderBy = {
  bio?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  emailVerified?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  profileImageId?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'UsersMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<UsersOnConflict>;
};

/** on_conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  updateColumns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  accountsAggregate?: InputMaybe<AccountsAggregateOrderBy>;
  bio?: InputMaybe<OrderBy>;
  commentReactionsAggregate?: InputMaybe<CommentReactionsAggregateOrderBy>;
  commentsAggregate?: InputMaybe<CommentsAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  emailVerified?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  postReactionsAggregate?: InputMaybe<PostReactionsAggregateOrderBy>;
  postsAggregate?: InputMaybe<PostsAggregateOrderBy>;
  profileImage?: InputMaybe<ImagesOrderBy>;
  profileImageId?: InputMaybe<OrderBy>;
  sessionsAggregate?: InputMaybe<SessionsAggregateOrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  uploadedImagesAggregate?: InputMaybe<ImagesAggregateOrderBy>;
  userSourceUserRelationshipsAggregate?: InputMaybe<UserUserRelationshipsAggregateOrderBy>;
  userTargetUserRelationshipsAggregate?: InputMaybe<UserUserRelationshipsAggregateOrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  ProfileImageId = 'profileImageId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profileImageId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type UsersStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UsersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UsersStreamCursorValueInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profileImageId?: InputMaybe<Scalars['uuid']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  ProfileImageId = 'profileImageId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type UsersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>;
  /** filter the rows which have to be updated */
  where: UsersBoolExp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _isNull?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "verification_tokens" */
export type VerificationTokens = {
  __typename?: 'VerificationTokens';
  expires: Scalars['timestamptz']['output'];
  identifier: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

/** aggregated selection of "verification_tokens" */
export type VerificationTokensAggregate = {
  __typename?: 'VerificationTokensAggregate';
  aggregate?: Maybe<VerificationTokensAggregateFields>;
  nodes: Array<VerificationTokens>;
};

/** aggregate fields of "verification_tokens" */
export type VerificationTokensAggregateFields = {
  __typename?: 'VerificationTokensAggregateFields';
  count: Scalars['Int']['output'];
  max?: Maybe<VerificationTokensMaxFields>;
  min?: Maybe<VerificationTokensMinFields>;
};


/** aggregate fields of "verification_tokens" */
export type VerificationTokensAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<VerificationTokensSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "verification_tokens". All fields are combined with a logical 'AND'. */
export type VerificationTokensBoolExp = {
  _and?: InputMaybe<Array<VerificationTokensBoolExp>>;
  _not?: InputMaybe<VerificationTokensBoolExp>;
  _or?: InputMaybe<Array<VerificationTokensBoolExp>>;
  expires?: InputMaybe<TimestamptzComparisonExp>;
  identifier?: InputMaybe<StringComparisonExp>;
  token?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "verification_tokens" */
export enum VerificationTokensConstraint {
  /** unique or primary key constraint on columns "token" */
  VerificationTokensPkey = 'verification_tokens_pkey'
}

/** input type for inserting data into table "verification_tokens" */
export type VerificationTokensInsertInput = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type VerificationTokensMaxFields = {
  __typename?: 'VerificationTokensMaxFields';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type VerificationTokensMinFields = {
  __typename?: 'VerificationTokensMinFields';
  expires?: Maybe<Scalars['timestamptz']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "verification_tokens" */
export type VerificationTokensMutationResponse = {
  __typename?: 'VerificationTokensMutationResponse';
  /** number of rows affected by the mutation */
  affectedRows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<VerificationTokens>;
};

/** on_conflict condition type for table "verification_tokens" */
export type VerificationTokensOnConflict = {
  constraint: VerificationTokensConstraint;
  updateColumns?: Array<VerificationTokensUpdateColumn>;
  where?: InputMaybe<VerificationTokensBoolExp>;
};

/** Ordering options when selecting data from "verification_tokens". */
export type VerificationTokensOrderBy = {
  expires?: InputMaybe<OrderBy>;
  identifier?: InputMaybe<OrderBy>;
  token?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: verification_tokens */
export type VerificationTokensPkColumnsInput = {
  token: Scalars['String']['input'];
};

/** select columns of table "verification_tokens" */
export enum VerificationTokensSelectColumn {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token'
}

/** input type for updating data in table "verification_tokens" */
export type VerificationTokensSetInput = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "verification_tokens" */
export type VerificationTokensStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: VerificationTokensStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type VerificationTokensStreamCursorValueInput = {
  expires?: InputMaybe<Scalars['timestamptz']['input']>;
  identifier?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "verification_tokens" */
export enum VerificationTokensUpdateColumn {
  /** column name */
  Expires = 'expires',
  /** column name */
  Identifier = 'identifier',
  /** column name */
  Token = 'token'
}

export type VerificationTokensUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<VerificationTokensSetInput>;
  /** filter the rows which have to be updated */
  where: VerificationTokensBoolExp;
};

export type AccountsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<AccountsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AccountsBoolExp>;
  predicate: IntComparisonExp;
};

export type CommentReactionsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CommentReactionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CommentReactionsBoolExp>;
  predicate: IntComparisonExp;
};

export type CommentsAggregateBoolExpBool_And = {
  arguments: CommentsSelectColumnCommentsAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CommentsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type CommentsAggregateBoolExpBool_Or = {
  arguments: CommentsSelectColumnCommentsAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CommentsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type CommentsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CommentsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CommentsBoolExp>;
  predicate: IntComparisonExp;
};

export type ImagesAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ImagesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ImagesBoolExp>;
  predicate: IntComparisonExp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "accounts" */
  deleteAccounts?: Maybe<AccountsMutationResponse>;
  /** delete single row from the table: "accounts" */
  deleteAccountsByPk?: Maybe<Accounts>;
  /** delete data from the table: "comment_reactions" */
  deleteCommentReactions?: Maybe<CommentReactionsMutationResponse>;
  /** delete single row from the table: "comment_reactions" */
  deleteCommentReactionsByPk?: Maybe<CommentReactions>;
  /** delete data from the table: "comments" */
  deleteComments?: Maybe<CommentsMutationResponse>;
  /** delete single row from the table: "comments" */
  deleteCommentsByPk?: Maybe<Comments>;
  /** delete data from the table: "images" */
  deleteImages?: Maybe<ImagesMutationResponse>;
  /** delete single row from the table: "images" */
  deleteImagesByPk?: Maybe<Images>;
  /** delete data from the table: "post_image_relationships" */
  deletePostImageRelationships?: Maybe<PostImageRelationshipsMutationResponse>;
  /** delete single row from the table: "post_image_relationships" */
  deletePostImageRelationshipsByPk?: Maybe<PostImageRelationships>;
  /** delete data from the table: "post_reactions" */
  deletePostReactions?: Maybe<PostReactionsMutationResponse>;
  /** delete single row from the table: "post_reactions" */
  deletePostReactionsByPk?: Maybe<PostReactions>;
  /** delete data from the table: "posts" */
  deletePosts?: Maybe<PostsMutationResponse>;
  /** delete single row from the table: "posts" */
  deletePostsByPk?: Maybe<Posts>;
  /** delete data from the table: "provider_type" */
  deleteProviderType?: Maybe<ProviderTypeMutationResponse>;
  /** delete single row from the table: "provider_type" */
  deleteProviderTypeByPk?: Maybe<ProviderType>;
  /** delete data from the table: "sessions" */
  deleteSessions?: Maybe<SessionsMutationResponse>;
  /** delete single row from the table: "sessions" */
  deleteSessionsByPk?: Maybe<Sessions>;
  /** delete data from the table: "user_user_relationship_state_types" */
  deleteUserUserRelationshipStateTypes?: Maybe<UserUserRelationshipStateTypesMutationResponse>;
  /** delete single row from the table: "user_user_relationship_state_types" */
  deleteUserUserRelationshipStateTypesByPk?: Maybe<UserUserRelationshipStateTypes>;
  /** delete data from the table: "user_user_relationship_states" */
  deleteUserUserRelationshipStates?: Maybe<UserUserRelationshipStatesMutationResponse>;
  /** delete single row from the table: "user_user_relationship_states" */
  deleteUserUserRelationshipStatesByPk?: Maybe<UserUserRelationshipStates>;
  /** delete data from the table: "user_user_relationship_types" */
  deleteUserUserRelationshipTypes?: Maybe<UserUserRelationshipTypesMutationResponse>;
  /** delete single row from the table: "user_user_relationship_types" */
  deleteUserUserRelationshipTypesByPk?: Maybe<UserUserRelationshipTypes>;
  /** delete data from the table: "user_user_relationships" */
  deleteUserUserRelationships?: Maybe<UserUserRelationshipsMutationResponse>;
  /** delete single row from the table: "user_user_relationships" */
  deleteUserUserRelationshipsByPk?: Maybe<UserUserRelationships>;
  /** delete data from the table: "users" */
  deleteUsers?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  deleteUsersByPk?: Maybe<Users>;
  /** delete data from the table: "verification_tokens" */
  deleteVerificationTokens?: Maybe<VerificationTokensMutationResponse>;
  /** delete single row from the table: "verification_tokens" */
  deleteVerificationTokensByPk?: Maybe<VerificationTokens>;
  /** insert data into the table: "accounts" */
  insertAccounts?: Maybe<AccountsMutationResponse>;
  /** insert a single row into the table: "accounts" */
  insertAccountsOne?: Maybe<Accounts>;
  /** insert data into the table: "comment_reactions" */
  insertCommentReactions?: Maybe<CommentReactionsMutationResponse>;
  /** insert a single row into the table: "comment_reactions" */
  insertCommentReactionsOne?: Maybe<CommentReactions>;
  /** insert data into the table: "comments" */
  insertComments?: Maybe<CommentsMutationResponse>;
  /** insert a single row into the table: "comments" */
  insertCommentsOne?: Maybe<Comments>;
  /** insert data into the table: "images" */
  insertImages?: Maybe<ImagesMutationResponse>;
  /** insert a single row into the table: "images" */
  insertImagesOne?: Maybe<Images>;
  /** insert data into the table: "post_image_relationships" */
  insertPostImageRelationships?: Maybe<PostImageRelationshipsMutationResponse>;
  /** insert a single row into the table: "post_image_relationships" */
  insertPostImageRelationshipsOne?: Maybe<PostImageRelationships>;
  /** insert data into the table: "post_reactions" */
  insertPostReactions?: Maybe<PostReactionsMutationResponse>;
  /** insert a single row into the table: "post_reactions" */
  insertPostReactionsOne?: Maybe<PostReactions>;
  /** insert data into the table: "posts" */
  insertPosts?: Maybe<PostsMutationResponse>;
  /** insert a single row into the table: "posts" */
  insertPostsOne?: Maybe<Posts>;
  /** insert data into the table: "provider_type" */
  insertProviderType?: Maybe<ProviderTypeMutationResponse>;
  /** insert a single row into the table: "provider_type" */
  insertProviderTypeOne?: Maybe<ProviderType>;
  /** insert data into the table: "sessions" */
  insertSessions?: Maybe<SessionsMutationResponse>;
  /** insert a single row into the table: "sessions" */
  insertSessionsOne?: Maybe<Sessions>;
  /** insert data into the table: "user_user_relationship_state_types" */
  insertUserUserRelationshipStateTypes?: Maybe<UserUserRelationshipStateTypesMutationResponse>;
  /** insert a single row into the table: "user_user_relationship_state_types" */
  insertUserUserRelationshipStateTypesOne?: Maybe<UserUserRelationshipStateTypes>;
  /** insert data into the table: "user_user_relationship_states" */
  insertUserUserRelationshipStates?: Maybe<UserUserRelationshipStatesMutationResponse>;
  /** insert a single row into the table: "user_user_relationship_states" */
  insertUserUserRelationshipStatesOne?: Maybe<UserUserRelationshipStates>;
  /** insert data into the table: "user_user_relationship_types" */
  insertUserUserRelationshipTypes?: Maybe<UserUserRelationshipTypesMutationResponse>;
  /** insert a single row into the table: "user_user_relationship_types" */
  insertUserUserRelationshipTypesOne?: Maybe<UserUserRelationshipTypes>;
  /** insert data into the table: "user_user_relationships" */
  insertUserUserRelationships?: Maybe<UserUserRelationshipsMutationResponse>;
  /** insert a single row into the table: "user_user_relationships" */
  insertUserUserRelationshipsOne?: Maybe<UserUserRelationships>;
  /** insert data into the table: "users" */
  insertUsers?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insertUsersOne?: Maybe<Users>;
  /** insert data into the table: "verification_tokens" */
  insertVerificationTokens?: Maybe<VerificationTokensMutationResponse>;
  /** insert a single row into the table: "verification_tokens" */
  insertVerificationTokensOne?: Maybe<VerificationTokens>;
  /** update data of the table: "accounts" */
  updateAccounts?: Maybe<AccountsMutationResponse>;
  /** update single row of the table: "accounts" */
  updateAccountsByPk?: Maybe<Accounts>;
  /** update multiples rows of table: "accounts" */
  updateAccountsMany?: Maybe<Array<Maybe<AccountsMutationResponse>>>;
  /** update data of the table: "comment_reactions" */
  updateCommentReactions?: Maybe<CommentReactionsMutationResponse>;
  /** update single row of the table: "comment_reactions" */
  updateCommentReactionsByPk?: Maybe<CommentReactions>;
  /** update multiples rows of table: "comment_reactions" */
  updateCommentReactionsMany?: Maybe<Array<Maybe<CommentReactionsMutationResponse>>>;
  /** update data of the table: "comments" */
  updateComments?: Maybe<CommentsMutationResponse>;
  /** update single row of the table: "comments" */
  updateCommentsByPk?: Maybe<Comments>;
  /** update multiples rows of table: "comments" */
  updateCommentsMany?: Maybe<Array<Maybe<CommentsMutationResponse>>>;
  /** update data of the table: "images" */
  updateImages?: Maybe<ImagesMutationResponse>;
  /** update single row of the table: "images" */
  updateImagesByPk?: Maybe<Images>;
  /** update multiples rows of table: "images" */
  updateImagesMany?: Maybe<Array<Maybe<ImagesMutationResponse>>>;
  /** update data of the table: "post_image_relationships" */
  updatePostImageRelationships?: Maybe<PostImageRelationshipsMutationResponse>;
  /** update single row of the table: "post_image_relationships" */
  updatePostImageRelationshipsByPk?: Maybe<PostImageRelationships>;
  /** update multiples rows of table: "post_image_relationships" */
  updatePostImageRelationshipsMany?: Maybe<Array<Maybe<PostImageRelationshipsMutationResponse>>>;
  /** update data of the table: "post_reactions" */
  updatePostReactions?: Maybe<PostReactionsMutationResponse>;
  /** update single row of the table: "post_reactions" */
  updatePostReactionsByPk?: Maybe<PostReactions>;
  /** update multiples rows of table: "post_reactions" */
  updatePostReactionsMany?: Maybe<Array<Maybe<PostReactionsMutationResponse>>>;
  /** update data of the table: "posts" */
  updatePosts?: Maybe<PostsMutationResponse>;
  /** update single row of the table: "posts" */
  updatePostsByPk?: Maybe<Posts>;
  /** update multiples rows of table: "posts" */
  updatePostsMany?: Maybe<Array<Maybe<PostsMutationResponse>>>;
  /** update data of the table: "provider_type" */
  updateProviderType?: Maybe<ProviderTypeMutationResponse>;
  /** update single row of the table: "provider_type" */
  updateProviderTypeByPk?: Maybe<ProviderType>;
  /** update multiples rows of table: "provider_type" */
  updateProviderTypeMany?: Maybe<Array<Maybe<ProviderTypeMutationResponse>>>;
  /** update data of the table: "sessions" */
  updateSessions?: Maybe<SessionsMutationResponse>;
  /** update single row of the table: "sessions" */
  updateSessionsByPk?: Maybe<Sessions>;
  /** update multiples rows of table: "sessions" */
  updateSessionsMany?: Maybe<Array<Maybe<SessionsMutationResponse>>>;
  /** update data of the table: "user_user_relationship_state_types" */
  updateUserUserRelationshipStateTypes?: Maybe<UserUserRelationshipStateTypesMutationResponse>;
  /** update single row of the table: "user_user_relationship_state_types" */
  updateUserUserRelationshipStateTypesByPk?: Maybe<UserUserRelationshipStateTypes>;
  /** update multiples rows of table: "user_user_relationship_state_types" */
  updateUserUserRelationshipStateTypesMany?: Maybe<Array<Maybe<UserUserRelationshipStateTypesMutationResponse>>>;
  /** update data of the table: "user_user_relationship_states" */
  updateUserUserRelationshipStates?: Maybe<UserUserRelationshipStatesMutationResponse>;
  /** update single row of the table: "user_user_relationship_states" */
  updateUserUserRelationshipStatesByPk?: Maybe<UserUserRelationshipStates>;
  /** update multiples rows of table: "user_user_relationship_states" */
  updateUserUserRelationshipStatesMany?: Maybe<Array<Maybe<UserUserRelationshipStatesMutationResponse>>>;
  /** update data of the table: "user_user_relationship_types" */
  updateUserUserRelationshipTypes?: Maybe<UserUserRelationshipTypesMutationResponse>;
  /** update single row of the table: "user_user_relationship_types" */
  updateUserUserRelationshipTypesByPk?: Maybe<UserUserRelationshipTypes>;
  /** update multiples rows of table: "user_user_relationship_types" */
  updateUserUserRelationshipTypesMany?: Maybe<Array<Maybe<UserUserRelationshipTypesMutationResponse>>>;
  /** update data of the table: "user_user_relationships" */
  updateUserUserRelationships?: Maybe<UserUserRelationshipsMutationResponse>;
  /** update single row of the table: "user_user_relationships" */
  updateUserUserRelationshipsByPk?: Maybe<UserUserRelationships>;
  /** update multiples rows of table: "user_user_relationships" */
  updateUserUserRelationshipsMany?: Maybe<Array<Maybe<UserUserRelationshipsMutationResponse>>>;
  /** update data of the table: "users" */
  updateUsers?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  updateUsersByPk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  updateUsersMany?: Maybe<Array<Maybe<UsersMutationResponse>>>;
  /** update data of the table: "verification_tokens" */
  updateVerificationTokens?: Maybe<VerificationTokensMutationResponse>;
  /** update single row of the table: "verification_tokens" */
  updateVerificationTokensByPk?: Maybe<VerificationTokens>;
  /** update multiples rows of table: "verification_tokens" */
  updateVerificationTokensMany?: Maybe<Array<Maybe<VerificationTokensMutationResponse>>>;
};


/** mutation root */
export type Mutation_RootDeleteAccountsArgs = {
  where: AccountsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteAccountsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteCommentReactionsArgs = {
  where: CommentReactionsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteCommentReactionsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteCommentsArgs = {
  where: CommentsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteCommentsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteImagesArgs = {
  where: ImagesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteImagesByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeletePostImageRelationshipsArgs = {
  where: PostImageRelationshipsBoolExp;
};


/** mutation root */
export type Mutation_RootDeletePostImageRelationshipsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeletePostReactionsArgs = {
  where: PostReactionsBoolExp;
};


/** mutation root */
export type Mutation_RootDeletePostReactionsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeletePostsArgs = {
  where: PostsBoolExp;
};


/** mutation root */
export type Mutation_RootDeletePostsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteProviderTypeArgs = {
  where: ProviderTypeBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteProviderTypeByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteSessionsArgs = {
  where: SessionsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteSessionsByPkArgs = {
  sessionToken: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteUserUserRelationshipStateTypesArgs = {
  where: UserUserRelationshipStateTypesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserUserRelationshipStateTypesByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteUserUserRelationshipStatesArgs = {
  where: UserUserRelationshipStatesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserUserRelationshipStatesByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteUserUserRelationshipTypesArgs = {
  where: UserUserRelationshipTypesBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserUserRelationshipTypesByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDeleteUserUserRelationshipsArgs = {
  where: UserUserRelationshipsBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUserUserRelationshipsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteUsersByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDeleteVerificationTokensArgs = {
  where: VerificationTokensBoolExp;
};


/** mutation root */
export type Mutation_RootDeleteVerificationTokensByPkArgs = {
  token: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsertAccountsArgs = {
  objects: Array<AccountsInsertInput>;
  onConflict?: InputMaybe<AccountsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertAccountsOneArgs = {
  object: AccountsInsertInput;
  onConflict?: InputMaybe<AccountsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCommentReactionsArgs = {
  objects: Array<CommentReactionsInsertInput>;
  onConflict?: InputMaybe<CommentReactionsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCommentReactionsOneArgs = {
  object: CommentReactionsInsertInput;
  onConflict?: InputMaybe<CommentReactionsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCommentsArgs = {
  objects: Array<CommentsInsertInput>;
  onConflict?: InputMaybe<CommentsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertCommentsOneArgs = {
  object: CommentsInsertInput;
  onConflict?: InputMaybe<CommentsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertImagesArgs = {
  objects: Array<ImagesInsertInput>;
  onConflict?: InputMaybe<ImagesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertImagesOneArgs = {
  object: ImagesInsertInput;
  onConflict?: InputMaybe<ImagesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPostImageRelationshipsArgs = {
  objects: Array<PostImageRelationshipsInsertInput>;
  onConflict?: InputMaybe<PostImageRelationshipsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPostImageRelationshipsOneArgs = {
  object: PostImageRelationshipsInsertInput;
  onConflict?: InputMaybe<PostImageRelationshipsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPostReactionsArgs = {
  objects: Array<PostReactionsInsertInput>;
  onConflict?: InputMaybe<PostReactionsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPostReactionsOneArgs = {
  object: PostReactionsInsertInput;
  onConflict?: InputMaybe<PostReactionsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPostsArgs = {
  objects: Array<PostsInsertInput>;
  onConflict?: InputMaybe<PostsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertPostsOneArgs = {
  object: PostsInsertInput;
  onConflict?: InputMaybe<PostsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProviderTypeArgs = {
  objects: Array<ProviderTypeInsertInput>;
  onConflict?: InputMaybe<ProviderTypeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertProviderTypeOneArgs = {
  object: ProviderTypeInsertInput;
  onConflict?: InputMaybe<ProviderTypeOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertSessionsArgs = {
  objects: Array<SessionsInsertInput>;
  onConflict?: InputMaybe<SessionsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertSessionsOneArgs = {
  object: SessionsInsertInput;
  onConflict?: InputMaybe<SessionsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserUserRelationshipStateTypesArgs = {
  objects: Array<UserUserRelationshipStateTypesInsertInput>;
  onConflict?: InputMaybe<UserUserRelationshipStateTypesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserUserRelationshipStateTypesOneArgs = {
  object: UserUserRelationshipStateTypesInsertInput;
  onConflict?: InputMaybe<UserUserRelationshipStateTypesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserUserRelationshipStatesArgs = {
  objects: Array<UserUserRelationshipStatesInsertInput>;
  onConflict?: InputMaybe<UserUserRelationshipStatesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserUserRelationshipStatesOneArgs = {
  object: UserUserRelationshipStatesInsertInput;
  onConflict?: InputMaybe<UserUserRelationshipStatesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserUserRelationshipTypesArgs = {
  objects: Array<UserUserRelationshipTypesInsertInput>;
  onConflict?: InputMaybe<UserUserRelationshipTypesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserUserRelationshipTypesOneArgs = {
  object: UserUserRelationshipTypesInsertInput;
  onConflict?: InputMaybe<UserUserRelationshipTypesOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserUserRelationshipsArgs = {
  objects: Array<UserUserRelationshipsInsertInput>;
  onConflict?: InputMaybe<UserUserRelationshipsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUserUserRelationshipsOneArgs = {
  object: UserUserRelationshipsInsertInput;
  onConflict?: InputMaybe<UserUserRelationshipsOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  onConflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersOneArgs = {
  object: UsersInsertInput;
  onConflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertVerificationTokensArgs = {
  objects: Array<VerificationTokensInsertInput>;
  onConflict?: InputMaybe<VerificationTokensOnConflict>;
};


/** mutation root */
export type Mutation_RootInsertVerificationTokensOneArgs = {
  object: VerificationTokensInsertInput;
  onConflict?: InputMaybe<VerificationTokensOnConflict>;
};


/** mutation root */
export type Mutation_RootUpdateAccountsArgs = {
  _inc?: InputMaybe<AccountsIncInput>;
  _set?: InputMaybe<AccountsSetInput>;
  where: AccountsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateAccountsByPkArgs = {
  _inc?: InputMaybe<AccountsIncInput>;
  _set?: InputMaybe<AccountsSetInput>;
  pkColumns: AccountsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateAccountsManyArgs = {
  updates: Array<AccountsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateCommentReactionsArgs = {
  _set?: InputMaybe<CommentReactionsSetInput>;
  where: CommentReactionsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateCommentReactionsByPkArgs = {
  _set?: InputMaybe<CommentReactionsSetInput>;
  pkColumns: CommentReactionsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateCommentReactionsManyArgs = {
  updates: Array<CommentReactionsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateCommentsArgs = {
  _set?: InputMaybe<CommentsSetInput>;
  where: CommentsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateCommentsByPkArgs = {
  _set?: InputMaybe<CommentsSetInput>;
  pkColumns: CommentsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateCommentsManyArgs = {
  updates: Array<CommentsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateImagesArgs = {
  _inc?: InputMaybe<ImagesIncInput>;
  _set?: InputMaybe<ImagesSetInput>;
  where: ImagesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateImagesByPkArgs = {
  _inc?: InputMaybe<ImagesIncInput>;
  _set?: InputMaybe<ImagesSetInput>;
  pkColumns: ImagesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateImagesManyArgs = {
  updates: Array<ImagesUpdates>;
};


/** mutation root */
export type Mutation_RootUpdatePostImageRelationshipsArgs = {
  _set?: InputMaybe<PostImageRelationshipsSetInput>;
  where: PostImageRelationshipsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdatePostImageRelationshipsByPkArgs = {
  _set?: InputMaybe<PostImageRelationshipsSetInput>;
  pkColumns: PostImageRelationshipsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdatePostImageRelationshipsManyArgs = {
  updates: Array<PostImageRelationshipsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdatePostReactionsArgs = {
  _set?: InputMaybe<PostReactionsSetInput>;
  where: PostReactionsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdatePostReactionsByPkArgs = {
  _set?: InputMaybe<PostReactionsSetInput>;
  pkColumns: PostReactionsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdatePostReactionsManyArgs = {
  updates: Array<PostReactionsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdatePostsArgs = {
  _set?: InputMaybe<PostsSetInput>;
  where: PostsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdatePostsByPkArgs = {
  _set?: InputMaybe<PostsSetInput>;
  pkColumns: PostsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdatePostsManyArgs = {
  updates: Array<PostsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateProviderTypeArgs = {
  _set?: InputMaybe<ProviderTypeSetInput>;
  where: ProviderTypeBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateProviderTypeByPkArgs = {
  _set?: InputMaybe<ProviderTypeSetInput>;
  pkColumns: ProviderTypePkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateProviderTypeManyArgs = {
  updates: Array<ProviderTypeUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateSessionsArgs = {
  _set?: InputMaybe<SessionsSetInput>;
  where: SessionsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateSessionsByPkArgs = {
  _set?: InputMaybe<SessionsSetInput>;
  pkColumns: SessionsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateSessionsManyArgs = {
  updates: Array<SessionsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserUserRelationshipStateTypesArgs = {
  _set?: InputMaybe<UserUserRelationshipStateTypesSetInput>;
  where: UserUserRelationshipStateTypesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUserUserRelationshipStateTypesByPkArgs = {
  _set?: InputMaybe<UserUserRelationshipStateTypesSetInput>;
  pkColumns: UserUserRelationshipStateTypesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserUserRelationshipStateTypesManyArgs = {
  updates: Array<UserUserRelationshipStateTypesUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserUserRelationshipStatesArgs = {
  _set?: InputMaybe<UserUserRelationshipStatesSetInput>;
  where: UserUserRelationshipStatesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUserUserRelationshipStatesByPkArgs = {
  _set?: InputMaybe<UserUserRelationshipStatesSetInput>;
  pkColumns: UserUserRelationshipStatesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserUserRelationshipStatesManyArgs = {
  updates: Array<UserUserRelationshipStatesUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserUserRelationshipTypesArgs = {
  _set?: InputMaybe<UserUserRelationshipTypesSetInput>;
  where: UserUserRelationshipTypesBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUserUserRelationshipTypesByPkArgs = {
  _set?: InputMaybe<UserUserRelationshipTypesSetInput>;
  pkColumns: UserUserRelationshipTypesPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserUserRelationshipTypesManyArgs = {
  updates: Array<UserUserRelationshipTypesUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUserUserRelationshipsArgs = {
  _set?: InputMaybe<UserUserRelationshipsSetInput>;
  where: UserUserRelationshipsBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUserUserRelationshipsByPkArgs = {
  _set?: InputMaybe<UserUserRelationshipsSetInput>;
  pkColumns: UserUserRelationshipsPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUserUserRelationshipsManyArgs = {
  updates: Array<UserUserRelationshipsUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateUsersByPkArgs = {
  _set?: InputMaybe<UsersSetInput>;
  pkColumns: UsersPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>;
};


/** mutation root */
export type Mutation_RootUpdateVerificationTokensArgs = {
  _set?: InputMaybe<VerificationTokensSetInput>;
  where: VerificationTokensBoolExp;
};


/** mutation root */
export type Mutation_RootUpdateVerificationTokensByPkArgs = {
  _set?: InputMaybe<VerificationTokensSetInput>;
  pkColumns: VerificationTokensPkColumnsInput;
};


/** mutation root */
export type Mutation_RootUpdateVerificationTokensManyArgs = {
  updates: Array<VerificationTokensUpdates>;
};

export type PostImageRelationshipsAggregateBoolExpBool_And = {
  arguments: PostImageRelationshipsSelectColumnPostImageRelationshipsAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PostImageRelationshipsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type PostImageRelationshipsAggregateBoolExpBool_Or = {
  arguments: PostImageRelationshipsSelectColumnPostImageRelationshipsAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PostImageRelationshipsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type PostImageRelationshipsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<PostImageRelationshipsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PostImageRelationshipsBoolExp>;
  predicate: IntComparisonExp;
};

export type PostReactionsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<PostReactionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PostReactionsBoolExp>;
  predicate: IntComparisonExp;
};

export type PostsAggregateBoolExpBool_And = {
  arguments: PostsSelectColumnPostsAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PostsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type PostsAggregateBoolExpBool_Or = {
  arguments: PostsSelectColumnPostsAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PostsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type PostsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<PostsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<PostsBoolExp>;
  predicate: IntComparisonExp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accountsAggregate: AccountsAggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accountsByPk?: Maybe<Accounts>;
  /** An array relationship */
  commentReactions: Array<CommentReactions>;
  /** An aggregate relationship */
  commentReactionsAggregate: CommentReactionsAggregate;
  /** fetch data from the table: "comment_reactions" using primary key columns */
  commentReactionsByPk?: Maybe<CommentReactions>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  commentsAggregate: CommentsAggregate;
  /** fetch data from the table: "comments" using primary key columns */
  commentsByPk?: Maybe<Comments>;
  /** fetch data from the table: "images" */
  images: Array<Images>;
  /** fetch aggregated fields from the table: "images" */
  imagesAggregate: ImagesAggregate;
  /** fetch data from the table: "images" using primary key columns */
  imagesByPk?: Maybe<Images>;
  /** An array relationship */
  postImageRelationships: Array<PostImageRelationships>;
  /** An aggregate relationship */
  postImageRelationshipsAggregate: PostImageRelationshipsAggregate;
  /** fetch data from the table: "post_image_relationships" using primary key columns */
  postImageRelationshipsByPk?: Maybe<PostImageRelationships>;
  /** An array relationship */
  postReactions: Array<PostReactions>;
  /** An aggregate relationship */
  postReactionsAggregate: PostReactionsAggregate;
  /** fetch data from the table: "post_reactions" using primary key columns */
  postReactionsByPk?: Maybe<PostReactions>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  postsAggregate: PostsAggregate;
  /** fetch data from the table: "posts" using primary key columns */
  postsByPk?: Maybe<Posts>;
  /** fetch data from the table: "provider_type" */
  providerType: Array<ProviderType>;
  /** fetch aggregated fields from the table: "provider_type" */
  providerTypeAggregate: ProviderTypeAggregate;
  /** fetch data from the table: "provider_type" using primary key columns */
  providerTypeByPk?: Maybe<ProviderType>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessionsAggregate: SessionsAggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessionsByPk?: Maybe<Sessions>;
  /** fetch data from the table: "user_user_relationship_state_types" */
  userUserRelationshipStateTypes: Array<UserUserRelationshipStateTypes>;
  /** fetch aggregated fields from the table: "user_user_relationship_state_types" */
  userUserRelationshipStateTypesAggregate: UserUserRelationshipStateTypesAggregate;
  /** fetch data from the table: "user_user_relationship_state_types" using primary key columns */
  userUserRelationshipStateTypesByPk?: Maybe<UserUserRelationshipStateTypes>;
  /** fetch data from the table: "user_user_relationship_states" */
  userUserRelationshipStates: Array<UserUserRelationshipStates>;
  /** fetch aggregated fields from the table: "user_user_relationship_states" */
  userUserRelationshipStatesAggregate: UserUserRelationshipStatesAggregate;
  /** fetch data from the table: "user_user_relationship_states" using primary key columns */
  userUserRelationshipStatesByPk?: Maybe<UserUserRelationshipStates>;
  /** fetch data from the table: "user_user_relationship_types" */
  userUserRelationshipTypes: Array<UserUserRelationshipTypes>;
  /** fetch aggregated fields from the table: "user_user_relationship_types" */
  userUserRelationshipTypesAggregate: UserUserRelationshipTypesAggregate;
  /** fetch data from the table: "user_user_relationship_types" using primary key columns */
  userUserRelationshipTypesByPk?: Maybe<UserUserRelationshipTypes>;
  /** fetch data from the table: "user_user_relationships" */
  userUserRelationships: Array<UserUserRelationships>;
  /** fetch aggregated fields from the table: "user_user_relationships" */
  userUserRelationshipsAggregate: UserUserRelationshipsAggregate;
  /** fetch data from the table: "user_user_relationships" using primary key columns */
  userUserRelationshipsByPk?: Maybe<UserUserRelationships>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
  /** fetch data from the table: "verification_tokens" */
  verificationTokens: Array<VerificationTokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verificationTokensAggregate: VerificationTokensAggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verificationTokensByPk?: Maybe<VerificationTokens>;
};


export type Query_RootAccountsArgs = {
  distinctOn?: InputMaybe<Array<AccountsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
  where?: InputMaybe<AccountsBoolExp>;
};


export type Query_RootAccountsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AccountsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
  where?: InputMaybe<AccountsBoolExp>;
};


export type Query_RootAccountsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCommentReactionsArgs = {
  distinctOn?: InputMaybe<Array<CommentReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentReactionsOrderBy>>;
  where?: InputMaybe<CommentReactionsBoolExp>;
};


export type Query_RootCommentReactionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentReactionsOrderBy>>;
  where?: InputMaybe<CommentReactionsBoolExp>;
};


export type Query_RootCommentReactionsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCommentsArgs = {
  distinctOn?: InputMaybe<Array<CommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
  where?: InputMaybe<CommentsBoolExp>;
};


export type Query_RootCommentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
  where?: InputMaybe<CommentsBoolExp>;
};


export type Query_RootCommentsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootImagesArgs = {
  distinctOn?: InputMaybe<Array<ImagesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ImagesOrderBy>>;
  where?: InputMaybe<ImagesBoolExp>;
};


export type Query_RootImagesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ImagesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ImagesOrderBy>>;
  where?: InputMaybe<ImagesBoolExp>;
};


export type Query_RootImagesByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPostImageRelationshipsArgs = {
  distinctOn?: InputMaybe<Array<PostImageRelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostImageRelationshipsOrderBy>>;
  where?: InputMaybe<PostImageRelationshipsBoolExp>;
};


export type Query_RootPostImageRelationshipsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostImageRelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostImageRelationshipsOrderBy>>;
  where?: InputMaybe<PostImageRelationshipsBoolExp>;
};


export type Query_RootPostImageRelationshipsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPostReactionsArgs = {
  distinctOn?: InputMaybe<Array<PostReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostReactionsOrderBy>>;
  where?: InputMaybe<PostReactionsBoolExp>;
};


export type Query_RootPostReactionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostReactionsOrderBy>>;
  where?: InputMaybe<PostReactionsBoolExp>;
};


export type Query_RootPostReactionsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootPostsArgs = {
  distinctOn?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
};


export type Query_RootPostsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
};


export type Query_RootPostsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootProviderTypeArgs = {
  distinctOn?: InputMaybe<Array<ProviderTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProviderTypeOrderBy>>;
  where?: InputMaybe<ProviderTypeBoolExp>;
};


export type Query_RootProviderTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProviderTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProviderTypeOrderBy>>;
  where?: InputMaybe<ProviderTypeBoolExp>;
};


export type Query_RootProviderTypeByPkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootSessionsArgs = {
  distinctOn?: InputMaybe<Array<SessionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SessionsOrderBy>>;
  where?: InputMaybe<SessionsBoolExp>;
};


export type Query_RootSessionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<SessionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SessionsOrderBy>>;
  where?: InputMaybe<SessionsBoolExp>;
};


export type Query_RootSessionsByPkArgs = {
  sessionToken: Scalars['String']['input'];
};


export type Query_RootUserUserRelationshipStateTypesArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipStateTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipStateTypesOrderBy>>;
  where?: InputMaybe<UserUserRelationshipStateTypesBoolExp>;
};


export type Query_RootUserUserRelationshipStateTypesAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipStateTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipStateTypesOrderBy>>;
  where?: InputMaybe<UserUserRelationshipStateTypesBoolExp>;
};


export type Query_RootUserUserRelationshipStateTypesByPkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootUserUserRelationshipStatesArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipStatesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipStatesOrderBy>>;
  where?: InputMaybe<UserUserRelationshipStatesBoolExp>;
};


export type Query_RootUserUserRelationshipStatesAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipStatesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipStatesOrderBy>>;
  where?: InputMaybe<UserUserRelationshipStatesBoolExp>;
};


export type Query_RootUserUserRelationshipStatesByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUserUserRelationshipTypesArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipTypesOrderBy>>;
  where?: InputMaybe<UserUserRelationshipTypesBoolExp>;
};


export type Query_RootUserUserRelationshipTypesAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipTypesOrderBy>>;
  where?: InputMaybe<UserUserRelationshipTypesBoolExp>;
};


export type Query_RootUserUserRelationshipTypesByPkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootUserUserRelationshipsArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipsOrderBy>>;
  where?: InputMaybe<UserUserRelationshipsBoolExp>;
};


export type Query_RootUserUserRelationshipsAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipsOrderBy>>;
  where?: InputMaybe<UserUserRelationshipsBoolExp>;
};


export type Query_RootUserUserRelationshipsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Query_RootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Query_RootUsersByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVerificationTokensArgs = {
  distinctOn?: InputMaybe<Array<VerificationTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VerificationTokensOrderBy>>;
  where?: InputMaybe<VerificationTokensBoolExp>;
};


export type Query_RootVerificationTokensAggregateArgs = {
  distinctOn?: InputMaybe<Array<VerificationTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VerificationTokensOrderBy>>;
  where?: InputMaybe<VerificationTokensBoolExp>;
};


export type Query_RootVerificationTokensByPkArgs = {
  token: Scalars['String']['input'];
};

export type SessionsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<SessionsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<SessionsBoolExp>;
  predicate: IntComparisonExp;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  accounts: Array<Accounts>;
  /** An aggregate relationship */
  accountsAggregate: AccountsAggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accountsByPk?: Maybe<Accounts>;
  /** fetch data from the table in a streaming manner: "accounts" */
  accountsStream: Array<Accounts>;
  /** An array relationship */
  commentReactions: Array<CommentReactions>;
  /** An aggregate relationship */
  commentReactionsAggregate: CommentReactionsAggregate;
  /** fetch data from the table: "comment_reactions" using primary key columns */
  commentReactionsByPk?: Maybe<CommentReactions>;
  /** fetch data from the table in a streaming manner: "comment_reactions" */
  commentReactionsStream: Array<CommentReactions>;
  /** An array relationship */
  comments: Array<Comments>;
  /** An aggregate relationship */
  commentsAggregate: CommentsAggregate;
  /** fetch data from the table: "comments" using primary key columns */
  commentsByPk?: Maybe<Comments>;
  /** fetch data from the table in a streaming manner: "comments" */
  commentsStream: Array<Comments>;
  /** fetch data from the table: "images" */
  images: Array<Images>;
  /** fetch aggregated fields from the table: "images" */
  imagesAggregate: ImagesAggregate;
  /** fetch data from the table: "images" using primary key columns */
  imagesByPk?: Maybe<Images>;
  /** fetch data from the table in a streaming manner: "images" */
  imagesStream: Array<Images>;
  /** An array relationship */
  postImageRelationships: Array<PostImageRelationships>;
  /** An aggregate relationship */
  postImageRelationshipsAggregate: PostImageRelationshipsAggregate;
  /** fetch data from the table: "post_image_relationships" using primary key columns */
  postImageRelationshipsByPk?: Maybe<PostImageRelationships>;
  /** fetch data from the table in a streaming manner: "post_image_relationships" */
  postImageRelationshipsStream: Array<PostImageRelationships>;
  /** An array relationship */
  postReactions: Array<PostReactions>;
  /** An aggregate relationship */
  postReactionsAggregate: PostReactionsAggregate;
  /** fetch data from the table: "post_reactions" using primary key columns */
  postReactionsByPk?: Maybe<PostReactions>;
  /** fetch data from the table in a streaming manner: "post_reactions" */
  postReactionsStream: Array<PostReactions>;
  /** An array relationship */
  posts: Array<Posts>;
  /** An aggregate relationship */
  postsAggregate: PostsAggregate;
  /** fetch data from the table: "posts" using primary key columns */
  postsByPk?: Maybe<Posts>;
  /** fetch data from the table in a streaming manner: "posts" */
  postsStream: Array<Posts>;
  /** fetch data from the table: "provider_type" */
  providerType: Array<ProviderType>;
  /** fetch aggregated fields from the table: "provider_type" */
  providerTypeAggregate: ProviderTypeAggregate;
  /** fetch data from the table: "provider_type" using primary key columns */
  providerTypeByPk?: Maybe<ProviderType>;
  /** fetch data from the table in a streaming manner: "provider_type" */
  providerTypeStream: Array<ProviderType>;
  /** An array relationship */
  sessions: Array<Sessions>;
  /** An aggregate relationship */
  sessionsAggregate: SessionsAggregate;
  /** fetch data from the table: "sessions" using primary key columns */
  sessionsByPk?: Maybe<Sessions>;
  /** fetch data from the table in a streaming manner: "sessions" */
  sessionsStream: Array<Sessions>;
  /** fetch data from the table: "user_user_relationship_state_types" */
  userUserRelationshipStateTypes: Array<UserUserRelationshipStateTypes>;
  /** fetch aggregated fields from the table: "user_user_relationship_state_types" */
  userUserRelationshipStateTypesAggregate: UserUserRelationshipStateTypesAggregate;
  /** fetch data from the table: "user_user_relationship_state_types" using primary key columns */
  userUserRelationshipStateTypesByPk?: Maybe<UserUserRelationshipStateTypes>;
  /** fetch data from the table in a streaming manner: "user_user_relationship_state_types" */
  userUserRelationshipStateTypesStream: Array<UserUserRelationshipStateTypes>;
  /** fetch data from the table: "user_user_relationship_states" */
  userUserRelationshipStates: Array<UserUserRelationshipStates>;
  /** fetch aggregated fields from the table: "user_user_relationship_states" */
  userUserRelationshipStatesAggregate: UserUserRelationshipStatesAggregate;
  /** fetch data from the table: "user_user_relationship_states" using primary key columns */
  userUserRelationshipStatesByPk?: Maybe<UserUserRelationshipStates>;
  /** fetch data from the table in a streaming manner: "user_user_relationship_states" */
  userUserRelationshipStatesStream: Array<UserUserRelationshipStates>;
  /** fetch data from the table: "user_user_relationship_types" */
  userUserRelationshipTypes: Array<UserUserRelationshipTypes>;
  /** fetch aggregated fields from the table: "user_user_relationship_types" */
  userUserRelationshipTypesAggregate: UserUserRelationshipTypesAggregate;
  /** fetch data from the table: "user_user_relationship_types" using primary key columns */
  userUserRelationshipTypesByPk?: Maybe<UserUserRelationshipTypes>;
  /** fetch data from the table in a streaming manner: "user_user_relationship_types" */
  userUserRelationshipTypesStream: Array<UserUserRelationshipTypes>;
  /** fetch data from the table: "user_user_relationships" */
  userUserRelationships: Array<UserUserRelationships>;
  /** fetch aggregated fields from the table: "user_user_relationships" */
  userUserRelationshipsAggregate: UserUserRelationshipsAggregate;
  /** fetch data from the table: "user_user_relationships" using primary key columns */
  userUserRelationshipsByPk?: Maybe<UserUserRelationships>;
  /** fetch data from the table in a streaming manner: "user_user_relationships" */
  userUserRelationshipsStream: Array<UserUserRelationships>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  usersByPk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  usersStream: Array<Users>;
  /** fetch data from the table: "verification_tokens" */
  verificationTokens: Array<VerificationTokens>;
  /** fetch aggregated fields from the table: "verification_tokens" */
  verificationTokensAggregate: VerificationTokensAggregate;
  /** fetch data from the table: "verification_tokens" using primary key columns */
  verificationTokensByPk?: Maybe<VerificationTokens>;
  /** fetch data from the table in a streaming manner: "verification_tokens" */
  verificationTokensStream: Array<VerificationTokens>;
};


export type Subscription_RootAccountsArgs = {
  distinctOn?: InputMaybe<Array<AccountsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
  where?: InputMaybe<AccountsBoolExp>;
};


export type Subscription_RootAccountsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AccountsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AccountsOrderBy>>;
  where?: InputMaybe<AccountsBoolExp>;
};


export type Subscription_RootAccountsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootAccountsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AccountsStreamCursorInput>>;
  where?: InputMaybe<AccountsBoolExp>;
};


export type Subscription_RootCommentReactionsArgs = {
  distinctOn?: InputMaybe<Array<CommentReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentReactionsOrderBy>>;
  where?: InputMaybe<CommentReactionsBoolExp>;
};


export type Subscription_RootCommentReactionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentReactionsOrderBy>>;
  where?: InputMaybe<CommentReactionsBoolExp>;
};


export type Subscription_RootCommentReactionsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCommentReactionsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CommentReactionsStreamCursorInput>>;
  where?: InputMaybe<CommentReactionsBoolExp>;
};


export type Subscription_RootCommentsArgs = {
  distinctOn?: InputMaybe<Array<CommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
  where?: InputMaybe<CommentsBoolExp>;
};


export type Subscription_RootCommentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CommentsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
  where?: InputMaybe<CommentsBoolExp>;
};


export type Subscription_RootCommentsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCommentsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CommentsStreamCursorInput>>;
  where?: InputMaybe<CommentsBoolExp>;
};


export type Subscription_RootImagesArgs = {
  distinctOn?: InputMaybe<Array<ImagesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ImagesOrderBy>>;
  where?: InputMaybe<ImagesBoolExp>;
};


export type Subscription_RootImagesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ImagesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ImagesOrderBy>>;
  where?: InputMaybe<ImagesBoolExp>;
};


export type Subscription_RootImagesByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootImagesStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ImagesStreamCursorInput>>;
  where?: InputMaybe<ImagesBoolExp>;
};


export type Subscription_RootPostImageRelationshipsArgs = {
  distinctOn?: InputMaybe<Array<PostImageRelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostImageRelationshipsOrderBy>>;
  where?: InputMaybe<PostImageRelationshipsBoolExp>;
};


export type Subscription_RootPostImageRelationshipsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostImageRelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostImageRelationshipsOrderBy>>;
  where?: InputMaybe<PostImageRelationshipsBoolExp>;
};


export type Subscription_RootPostImageRelationshipsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPostImageRelationshipsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PostImageRelationshipsStreamCursorInput>>;
  where?: InputMaybe<PostImageRelationshipsBoolExp>;
};


export type Subscription_RootPostReactionsArgs = {
  distinctOn?: InputMaybe<Array<PostReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostReactionsOrderBy>>;
  where?: InputMaybe<PostReactionsBoolExp>;
};


export type Subscription_RootPostReactionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostReactionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostReactionsOrderBy>>;
  where?: InputMaybe<PostReactionsBoolExp>;
};


export type Subscription_RootPostReactionsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPostReactionsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PostReactionsStreamCursorInput>>;
  where?: InputMaybe<PostReactionsBoolExp>;
};


export type Subscription_RootPostsArgs = {
  distinctOn?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
};


export type Subscription_RootPostsAggregateArgs = {
  distinctOn?: InputMaybe<Array<PostsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PostsOrderBy>>;
  where?: InputMaybe<PostsBoolExp>;
};


export type Subscription_RootPostsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootPostsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PostsStreamCursorInput>>;
  where?: InputMaybe<PostsBoolExp>;
};


export type Subscription_RootProviderTypeArgs = {
  distinctOn?: InputMaybe<Array<ProviderTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProviderTypeOrderBy>>;
  where?: InputMaybe<ProviderTypeBoolExp>;
};


export type Subscription_RootProviderTypeAggregateArgs = {
  distinctOn?: InputMaybe<Array<ProviderTypeSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProviderTypeOrderBy>>;
  where?: InputMaybe<ProviderTypeBoolExp>;
};


export type Subscription_RootProviderTypeByPkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootProviderTypeStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ProviderTypeStreamCursorInput>>;
  where?: InputMaybe<ProviderTypeBoolExp>;
};


export type Subscription_RootSessionsArgs = {
  distinctOn?: InputMaybe<Array<SessionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SessionsOrderBy>>;
  where?: InputMaybe<SessionsBoolExp>;
};


export type Subscription_RootSessionsAggregateArgs = {
  distinctOn?: InputMaybe<Array<SessionsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<SessionsOrderBy>>;
  where?: InputMaybe<SessionsBoolExp>;
};


export type Subscription_RootSessionsByPkArgs = {
  sessionToken: Scalars['String']['input'];
};


export type Subscription_RootSessionsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<SessionsStreamCursorInput>>;
  where?: InputMaybe<SessionsBoolExp>;
};


export type Subscription_RootUserUserRelationshipStateTypesArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipStateTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipStateTypesOrderBy>>;
  where?: InputMaybe<UserUserRelationshipStateTypesBoolExp>;
};


export type Subscription_RootUserUserRelationshipStateTypesAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipStateTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipStateTypesOrderBy>>;
  where?: InputMaybe<UserUserRelationshipStateTypesBoolExp>;
};


export type Subscription_RootUserUserRelationshipStateTypesByPkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootUserUserRelationshipStateTypesStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserUserRelationshipStateTypesStreamCursorInput>>;
  where?: InputMaybe<UserUserRelationshipStateTypesBoolExp>;
};


export type Subscription_RootUserUserRelationshipStatesArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipStatesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipStatesOrderBy>>;
  where?: InputMaybe<UserUserRelationshipStatesBoolExp>;
};


export type Subscription_RootUserUserRelationshipStatesAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipStatesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipStatesOrderBy>>;
  where?: InputMaybe<UserUserRelationshipStatesBoolExp>;
};


export type Subscription_RootUserUserRelationshipStatesByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUserUserRelationshipStatesStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserUserRelationshipStatesStreamCursorInput>>;
  where?: InputMaybe<UserUserRelationshipStatesBoolExp>;
};


export type Subscription_RootUserUserRelationshipTypesArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipTypesOrderBy>>;
  where?: InputMaybe<UserUserRelationshipTypesBoolExp>;
};


export type Subscription_RootUserUserRelationshipTypesAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipTypesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipTypesOrderBy>>;
  where?: InputMaybe<UserUserRelationshipTypesBoolExp>;
};


export type Subscription_RootUserUserRelationshipTypesByPkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootUserUserRelationshipTypesStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserUserRelationshipTypesStreamCursorInput>>;
  where?: InputMaybe<UserUserRelationshipTypesBoolExp>;
};


export type Subscription_RootUserUserRelationshipsArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipsOrderBy>>;
  where?: InputMaybe<UserUserRelationshipsBoolExp>;
};


export type Subscription_RootUserUserRelationshipsAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserUserRelationshipsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserUserRelationshipsOrderBy>>;
  where?: InputMaybe<UserUserRelationshipsBoolExp>;
};


export type Subscription_RootUserUserRelationshipsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUserUserRelationshipsStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserUserRelationshipsStreamCursorInput>>;
  where?: InputMaybe<UserUserRelationshipsBoolExp>;
};


export type Subscription_RootUsersArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Subscription_RootUsersByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsersStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UsersStreamCursorInput>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type Subscription_RootVerificationTokensArgs = {
  distinctOn?: InputMaybe<Array<VerificationTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VerificationTokensOrderBy>>;
  where?: InputMaybe<VerificationTokensBoolExp>;
};


export type Subscription_RootVerificationTokensAggregateArgs = {
  distinctOn?: InputMaybe<Array<VerificationTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<VerificationTokensOrderBy>>;
  where?: InputMaybe<VerificationTokensBoolExp>;
};


export type Subscription_RootVerificationTokensByPkArgs = {
  token: Scalars['String']['input'];
};


export type Subscription_RootVerificationTokensStreamArgs = {
  batchSize: Scalars['Int']['input'];
  cursor: Array<InputMaybe<VerificationTokensStreamCursorInput>>;
  where?: InputMaybe<VerificationTokensBoolExp>;
};

export type UserUserRelationshipStatesAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UserUserRelationshipStatesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserUserRelationshipStatesBoolExp>;
  predicate: IntComparisonExp;
};

export type UserUserRelationshipsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UserUserRelationshipsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserUserRelationshipsBoolExp>;
  predicate: IntComparisonExp;
};

export type UsersAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UsersBoolExp>;
  predicate: IntComparisonExp;
};

export type PostsPage_QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsPage_QueryQuery = { __typename?: 'query_root', posts: Array<{ __typename?: 'Posts', id: any }> };

export type UsersPage_QueryQueryVariables = Exact<{
  searchExpression: UsersBoolExp;
}>;


export type UsersPage_QueryQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'Users', id: any, createdAt: any, updatedAt: any, name?: string | null, bio?: string | null, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null }> };

export type AuthButton_UserFragmentFragment = { __typename?: 'Users', id: any, name?: string | null, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null };

export type BioSettingsSection_UserFragmentFragment = { __typename?: 'Users', id: any, bio?: string | null };

export type BioSettingsSection_UserQueryQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type BioSettingsSection_UserQueryQuery = { __typename?: 'query_root', usersByPk?: { __typename?: 'Users', id: any, bio?: string | null } | null };

export type UpdateUserBio_MutationMutationVariables = Exact<{
  userId: Scalars['uuid']['input'];
  bio: Scalars['String']['input'];
}>;


export type UpdateUserBio_MutationMutation = { __typename?: 'mutation_root', updateUsersByPk?: { __typename?: 'Users', id: any, bio?: string | null } | null };

export type CommentItem_CommentFragmentFragment = { __typename?: 'Comments', id: any, body: string, isArchived: boolean, createdAt: any, updatedAt: any, postId: any, objectCommentId?: any | null, commentReactions: Array<{ __typename?: 'CommentReactions', id: any, type: string, reactorId: any }>, author: { __typename?: 'Users', id: any, name?: string | null, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null }, subjectComments: Array<{ __typename?: 'Comments', id: any }> };

export type CommentItem_QueryQueryVariables = Exact<{
  commentId: Scalars['uuid']['input'];
}>;


export type CommentItem_QueryQuery = { __typename?: 'query_root', comment?: { __typename?: 'Comments', id: any, body: string, isArchived: boolean, createdAt: any, updatedAt: any, postId: any, objectCommentId?: any | null, commentReactions: Array<{ __typename?: 'CommentReactions', id: any, type: string, reactorId: any }>, author: { __typename?: 'Users', id: any, name?: string | null, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null }, subjectComments: Array<{ __typename?: 'Comments', id: any }> } | null };

export type CreateReplyComment_MutationMutationVariables = Exact<{
  body: Scalars['String']['input'];
  authorId: Scalars['uuid']['input'];
  postId: Scalars['uuid']['input'];
  objectCommentId?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type CreateReplyComment_MutationMutation = { __typename?: 'mutation_root', insertCommentsOne?: { __typename?: 'Comments', id: any, body: string, isArchived: boolean, createdAt: any, updatedAt: any, postId: any, objectCommentId?: any | null, commentReactions: Array<{ __typename?: 'CommentReactions', id: any, type: string, reactorId: any }>, author: { __typename?: 'Users', id: any, name?: string | null, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null }, subjectComments: Array<{ __typename?: 'Comments', id: any }> } | null };

export type SetCommentIsArchived_MutationMutationVariables = Exact<{
  commentId: Scalars['uuid']['input'];
  isArchived: Scalars['Boolean']['input'];
}>;


export type SetCommentIsArchived_MutationMutation = { __typename?: 'mutation_root', updateCommentsByPk?: { __typename?: 'Comments', id: any, body: string, isArchived: boolean, createdAt: any, updatedAt: any, postId: any, objectCommentId?: any | null, commentReactions: Array<{ __typename?: 'CommentReactions', id: any, type: string, reactorId: any }>, author: { __typename?: 'Users', id: any, name?: string | null, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null }, subjectComments: Array<{ __typename?: 'Comments', id: any }> } | null };

export type AddCommentReaction_MutationMutationVariables = Exact<{
  commentId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
  type: Scalars['String']['input'];
}>;


export type AddCommentReaction_MutationMutation = { __typename?: 'mutation_root', insertCommentReactionsOne?: { __typename?: 'CommentReactions', id: any, commentId: any, reactorId: any, type: string, createdAt: any, updatedAt: any } | null };

export type DeleteCommentReaction_MutationMutationVariables = Exact<{
  commentId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
  type: Scalars['String']['input'];
}>;


export type DeleteCommentReaction_MutationMutation = { __typename?: 'mutation_root', deleteCommentReactions?: { __typename?: 'CommentReactionsMutationResponse', affectedRows: number } | null };

export type ImageUploadButton_ImageFragmentFragment = { __typename?: 'Images', id: any, url: string, width: number, height: number, blurDataUrl?: string | null, name?: string | null, description?: string | null, createdAt: any, updatedAt: any };

export type CreateImages_MutationMutationVariables = Exact<{
  imageObjects: Array<ImagesInsertInput> | ImagesInsertInput;
}>;


export type CreateImages_MutationMutation = { __typename?: 'mutation_root', insertImages?: { __typename?: 'ImagesMutationResponse', returning: Array<{ __typename?: 'Images', id: any, url: string, width: number, height: number, blurDataUrl?: string | null, name?: string | null, description?: string | null, createdAt: any, updatedAt: any }> } | null };

export type NameSettingsSection_UserFragmentFragment = { __typename?: 'Users', id: any, name?: string | null };

export type NameSettingsSection_UserQueryQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type NameSettingsSection_UserQueryQuery = { __typename?: 'query_root', usersByPk?: { __typename?: 'Users', id: any, name?: string | null } | null };

export type UpdateUserName_MutationMutationVariables = Exact<{
  userId: Scalars['uuid']['input'];
  name: Scalars['String']['input'];
}>;


export type UpdateUserName_MutationMutation = { __typename?: 'mutation_root', updateUsersByPk?: { __typename?: 'Users', id: any, name?: string | null } | null };

export type PostCard_PostFragmentFragment = { __typename?: 'Posts', id: any, body: string, isArchived: boolean, authorId: any, createdAt: any, updatedAt: any, author: { __typename?: 'Users', id: any, name?: string | null, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null }, postReactions: Array<{ __typename?: 'PostReactions', id: any, postId: any, reactorId: any, type: string }>, comments: Array<{ __typename?: 'Comments', id: any, body: string, isArchived: boolean, createdAt: any, updatedAt: any, postId: any, objectCommentId?: any | null, commentReactions: Array<{ __typename?: 'CommentReactions', id: any, type: string, reactorId: any }>, author: { __typename?: 'Users', id: any, name?: string | null, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null }, subjectComments: Array<{ __typename?: 'Comments', id: any }> }>, postImageRelationships: Array<{ __typename?: 'PostImageRelationships', id: any, image: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } }> };

export type PostCard_CommentFragmentFragment = { __typename?: 'Comments', id: any, createdAt: any };

export type PostCard_PostQueryQueryVariables = Exact<{
  postId: Scalars['uuid']['input'];
}>;


export type PostCard_PostQueryQuery = { __typename?: 'query_root', postsByPk?: { __typename?: 'Posts', id: any, body: string, isArchived: boolean, authorId: any, createdAt: any, updatedAt: any, author: { __typename?: 'Users', id: any, name?: string | null, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null }, postReactions: Array<{ __typename?: 'PostReactions', id: any, postId: any, reactorId: any, type: string }>, comments: Array<{ __typename?: 'Comments', id: any, body: string, isArchived: boolean, createdAt: any, updatedAt: any, postId: any, objectCommentId?: any | null, commentReactions: Array<{ __typename?: 'CommentReactions', id: any, type: string, reactorId: any }>, author: { __typename?: 'Users', id: any, name?: string | null, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null }, subjectComments: Array<{ __typename?: 'Comments', id: any }> }>, postImageRelationships: Array<{ __typename?: 'PostImageRelationships', id: any, image: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } }> } | null };

export type SetPostIsArchived_MutationMutationVariables = Exact<{
  postId: Scalars['uuid']['input'];
  isArchived: Scalars['Boolean']['input'];
}>;


export type SetPostIsArchived_MutationMutation = { __typename?: 'mutation_root', updatePostsByPk?: { __typename?: 'Posts', id: any, body: string, isArchived: boolean, authorId: any, createdAt: any, updatedAt: any, author: { __typename?: 'Users', id: any, name?: string | null, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null }, postReactions: Array<{ __typename?: 'PostReactions', id: any, postId: any, reactorId: any, type: string }>, comments: Array<{ __typename?: 'Comments', id: any, body: string, isArchived: boolean, createdAt: any, updatedAt: any, postId: any, objectCommentId?: any | null, commentReactions: Array<{ __typename?: 'CommentReactions', id: any, type: string, reactorId: any }>, author: { __typename?: 'Users', id: any, name?: string | null, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null }, subjectComments: Array<{ __typename?: 'Comments', id: any }> }>, postImageRelationships: Array<{ __typename?: 'PostImageRelationships', id: any, image: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } }> } | null };

export type AddPostReaction_MutationMutationVariables = Exact<{
  postId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
  type: Scalars['String']['input'];
}>;


export type AddPostReaction_MutationMutation = { __typename?: 'mutation_root', insertPostReactionsOne?: { __typename?: 'PostReactions', id: any, postId: any, reactorId: any, type: string, createdAt: any, updatedAt: any } | null };

export type DeletePostReaction_MutationMutationVariables = Exact<{
  postId: Scalars['uuid']['input'];
  userId: Scalars['uuid']['input'];
  type: Scalars['String']['input'];
}>;


export type DeletePostReaction_MutationMutation = { __typename?: 'mutation_root', deletePostReactions?: { __typename?: 'PostReactionsMutationResponse', affectedRows: number } | null };

export type CreateRootComment_MutationMutationVariables = Exact<{
  body: Scalars['String']['input'];
  authorId: Scalars['uuid']['input'];
  postId: Scalars['uuid']['input'];
  objectCommentId?: InputMaybe<Scalars['uuid']['input']>;
}>;


export type CreateRootComment_MutationMutation = { __typename?: 'mutation_root', insertCommentsOne?: { __typename?: 'Comments', id: any, createdAt: any } | null };

export type PostComposer_PostFragmentFragment = { __typename?: 'Posts', id: any, createdAt: any, updatedAt: any };

export type CreatePost_MutationMutationVariables = Exact<{
  body: Scalars['String']['input'];
  authorId: Scalars['uuid']['input'];
}>;


export type CreatePost_MutationMutation = { __typename?: 'mutation_root', insertPostsOne?: { __typename?: 'Posts', id: any, createdAt: any, updatedAt: any } | null };

export type AddImageToPost_MutationMutationVariables = Exact<{
  postId: Scalars['uuid']['input'];
  imageId: Scalars['uuid']['input'];
}>;


export type AddImageToPost_MutationMutation = { __typename?: 'mutation_root', insertPostImageRelationshipsOne?: { __typename?: 'PostImageRelationships', id: any, post: { __typename?: 'Posts', id: any, body: string, isArchived: boolean, authorId: any, createdAt: any, updatedAt: any, author: { __typename?: 'Users', id: any, name?: string | null, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null }, postReactions: Array<{ __typename?: 'PostReactions', id: any, postId: any, reactorId: any, type: string }>, comments: Array<{ __typename?: 'Comments', id: any, body: string, isArchived: boolean, createdAt: any, updatedAt: any, postId: any, objectCommentId?: any | null, commentReactions: Array<{ __typename?: 'CommentReactions', id: any, type: string, reactorId: any }>, author: { __typename?: 'Users', id: any, name?: string | null, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null }, subjectComments: Array<{ __typename?: 'Comments', id: any }> }>, postImageRelationships: Array<{ __typename?: 'PostImageRelationships', id: any, image: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } }> } } | null };

export type ProfileImageSettingsSection_UserFragmentFragment = { __typename?: 'Users', id: any, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, blurDataUrl?: string | null, name?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null };

export type ProfileImageSettingsSection_UserQueryQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type ProfileImageSettingsSection_UserQueryQuery = { __typename?: 'query_root', usersByPk?: { __typename?: 'Users', id: any, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, blurDataUrl?: string | null, name?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null } | null };

export type SetProfileImage_MutationMutationVariables = Exact<{
  userId: Scalars['uuid']['input'];
  profileImageId: Scalars['uuid']['input'];
}>;


export type SetProfileImage_MutationMutation = { __typename?: 'mutation_root', updateUsersByPk?: { __typename?: 'Users', id: any, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, blurDataUrl?: string | null, name?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null } | null };

export type SettingsPanel_UserFragmentFragment = { __typename?: 'Users', id: any, image?: string | null, bio?: string | null, name?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null };

export type SocialAppShell_QueryQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type SocialAppShell_QueryQuery = { __typename?: 'query_root', usersByPk?: { __typename?: 'Users', id: any, image?: string | null, bio?: string | null, name?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null } | null };

export type UserActions_UserFragmentFragment = { __typename?: 'Users', id: any, bio?: string | null, name?: string | null, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null };

export type UserActions_UserUserRelationshipFragmentFragment = { __typename?: 'UserUserRelationships', id: any, type?: UserUserRelationshipTypesEnum | null, createdAt: any, updatedAt: any, states: Array<{ __typename?: 'UserUserRelationshipStates', id: any, type: UserUserRelationshipStateTypesEnum, createdAt: any, updatedAt: any }> };

export type UserActions_UserUserRelationshipStateFragmentFragment = { __typename?: 'UserUserRelationshipStates', id: any, type: UserUserRelationshipStateTypesEnum, createdAt: any, updatedAt: any };

export type UserActions_UserQueryQueryVariables = Exact<{
  sourceUserId: Scalars['uuid']['input'];
  targetUserId: Scalars['uuid']['input'];
}>;


export type UserActions_UserQueryQuery = { __typename?: 'query_root', sourceUser?: { __typename?: 'Users', id: any, userSourceUserRelationships: Array<{ __typename?: 'UserUserRelationships', id: any, type?: UserUserRelationshipTypesEnum | null, createdAt: any, updatedAt: any, states: Array<{ __typename?: 'UserUserRelationshipStates', id: any, type: UserUserRelationshipStateTypesEnum, createdAt: any, updatedAt: any }> }>, userTargetUserRelationships: Array<{ __typename?: 'UserUserRelationships', id: any, type?: UserUserRelationshipTypesEnum | null, createdAt: any, updatedAt: any, states: Array<{ __typename?: 'UserUserRelationshipStates', id: any, type: UserUserRelationshipStateTypesEnum, createdAt: any, updatedAt: any }> }> } | null };

export type CreateUserUserRelationship_MutationMutationVariables = Exact<{
  sourceUserId: Scalars['uuid']['input'];
  targetUserId: Scalars['uuid']['input'];
  type: UserUserRelationshipTypesEnum;
}>;


export type CreateUserUserRelationship_MutationMutation = { __typename?: 'mutation_root', insertUserUserRelationshipsOne?: { __typename?: 'UserUserRelationships', id: any } | null };

export type DeleteUserUserRelationship_MutationMutationVariables = Exact<{
  relationshipId: Scalars['uuid']['input'];
}>;


export type DeleteUserUserRelationship_MutationMutation = { __typename?: 'mutation_root', deleteUserUserRelationshipsByPk?: { __typename?: 'UserUserRelationships', id: any } | null };

export type CreateUserUserRelationshipState_MutationMutationVariables = Exact<{
  relationshipId: Scalars['uuid']['input'];
  type: UserUserRelationshipStateTypesEnum;
}>;


export type CreateUserUserRelationshipState_MutationMutation = { __typename?: 'mutation_root', insertUserUserRelationshipStatesOne?: { __typename?: 'UserUserRelationshipStates', id: any, type: UserUserRelationshipStateTypesEnum, createdAt: any, updatedAt: any } | null };

export type DeleteUserUserRelationshipState_MutationMutationVariables = Exact<{
  relationshipStateId: Scalars['uuid']['input'];
}>;


export type DeleteUserUserRelationshipState_MutationMutation = { __typename?: 'mutation_root', deleteUserUserRelationshipStatesByPk?: { __typename?: 'UserUserRelationshipStates', id: any } | null };

export type UserAvatar_UserFragmentFragment = { __typename?: 'Users', id: any, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null };

export type UserProfile_QueryQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
  profileUserId: Scalars['uuid']['input'];
}>;


export type UserProfile_QueryQuery = { __typename?: 'query_root', usersByPk?: { __typename?: 'Users', id: any, name?: string | null, bio?: string | null, image?: string | null, posts: Array<{ __typename?: 'Posts', id: any, body: string, isArchived: boolean, authorId: any, createdAt: any, updatedAt: any, author: { __typename?: 'Users', id: any, name?: string | null, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null }, postReactions: Array<{ __typename?: 'PostReactions', id: any, postId: any, reactorId: any, type: string }>, comments: Array<{ __typename?: 'Comments', id: any, body: string, isArchived: boolean, createdAt: any, updatedAt: any, postId: any, objectCommentId?: any | null, commentReactions: Array<{ __typename?: 'CommentReactions', id: any, type: string, reactorId: any }>, author: { __typename?: 'Users', id: any, name?: string | null, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null }, subjectComments: Array<{ __typename?: 'Comments', id: any }> }>, postImageRelationships: Array<{ __typename?: 'PostImageRelationships', id: any, image: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } }> }>, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null } | null };

export type UserSummary_UserFragmentFragment = { __typename?: 'Users', id: any, name?: string | null, image?: string | null, profileImage?: { __typename?: 'Images', id: any, url: string, width: number, height: number, name?: string | null, blurDataUrl?: string | null, description?: string | null, createdAt: any, updatedAt: any } | null };

export type UsePageTitle_QueryQueryVariables = Exact<{
  userId: Scalars['uuid']['input'];
}>;


export type UsePageTitle_QueryQuery = { __typename?: 'query_root', usersByPk?: { __typename?: 'Users', id: any, name?: string | null } | null };

export const NameSettingsSection_UserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NameSettingsSection_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<NameSettingsSection_UserFragmentFragment, unknown>;
export const UserAvatar_UserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserAvatar_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UserAvatar_UserFragmentFragment, unknown>;
export const UserSummary_UserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserAvatar_UserFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserAvatar_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UserSummary_UserFragmentFragment, unknown>;
export const CommentItem_CommentFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentItem_CommentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"objectCommentId"}},{"kind":"Field","name":{"kind":"Name","value":"commentReactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"reactorId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subjectComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserAvatar_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserAvatar_UserFragment"}}]}}]} as unknown as DocumentNode<CommentItem_CommentFragmentFragment, unknown>;
export const PostCard_PostFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCard_PostFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Posts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"postReactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"reactorId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"objectCommentId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_isNull"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentItem_CommentFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"postImageRelationships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserAvatar_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserAvatar_UserFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentItem_CommentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"objectCommentId"}},{"kind":"Field","name":{"kind":"Name","value":"commentReactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"reactorId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subjectComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PostCard_PostFragmentFragment, unknown>;
export const PostCard_CommentFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCard_CommentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<PostCard_CommentFragmentFragment, unknown>;
export const PostComposer_PostFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostComposer_PostFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Posts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<PostComposer_PostFragmentFragment, unknown>;
export const ImageUploadButton_ImageFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageUploadButton_ImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Images"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<ImageUploadButton_ImageFragmentFragment, unknown>;
export const ProfileImageSettingsSection_UserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileImageSettingsSection_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageUploadButton_ImageFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageUploadButton_ImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Images"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<ProfileImageSettingsSection_UserFragmentFragment, unknown>;
export const BioSettingsSection_UserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BioSettingsSection_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]} as unknown as DocumentNode<BioSettingsSection_UserFragmentFragment, unknown>;
export const AuthButton_UserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthButton_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserAvatar_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserAvatar_UserFragment"}}]}}]} as unknown as DocumentNode<AuthButton_UserFragmentFragment, unknown>;
export const SettingsPanel_UserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SettingsPanel_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileImageSettingsSection_UserFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BioSettingsSection_UserFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthButton_UserFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageUploadButton_ImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Images"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserAvatar_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserAvatar_UserFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileImageSettingsSection_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageUploadButton_ImageFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BioSettingsSection_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthButton_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}}]}}]} as unknown as DocumentNode<SettingsPanel_UserFragmentFragment, unknown>;
export const UserActions_UserFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActions_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserAvatar_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserAvatar_UserFragment"}}]}}]} as unknown as DocumentNode<UserActions_UserFragmentFragment, unknown>;
export const UserActions_UserUserRelationshipStateFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActions_UserUserRelationshipStateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserUserRelationshipStates"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<UserActions_UserUserRelationshipStateFragmentFragment, unknown>;
export const UserActions_UserUserRelationshipFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActions_UserUserRelationshipFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserUserRelationships"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"states"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActions_UserUserRelationshipStateFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActions_UserUserRelationshipStateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserUserRelationshipStates"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<UserActions_UserUserRelationshipFragmentFragment, unknown>;
export const PostsPage_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostsPage_Query"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isArchived"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_neq"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DESC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<PostsPage_QueryQuery, PostsPage_QueryQueryVariables>;
export const UsersPage_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UsersPage_Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchExpression"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UsersBoolExp"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchExpression"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActions_UserFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserAvatar_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserAvatar_UserFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActions_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}}]}}]} as unknown as DocumentNode<UsersPage_QueryQuery, UsersPage_QueryQueryVariables>;
export const BioSettingsSection_UserQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"BioSettingsSection_UserQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BioSettingsSection_UserFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BioSettingsSection_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]} as unknown as DocumentNode<BioSettingsSection_UserQueryQuery, BioSettingsSection_UserQueryQueryVariables>;
export const UpdateUserBio_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserBio_Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"bio"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUsersByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pkColumns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"bio"},"value":{"kind":"Variable","name":{"kind":"Name","value":"bio"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BioSettingsSection_UserFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BioSettingsSection_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}}]} as unknown as DocumentNode<UpdateUserBio_MutationMutation, UpdateUserBio_MutationMutationVariables>;
export const CommentItem_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CommentItem_Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"comment"},"name":{"kind":"Name","value":"commentsByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentItem_CommentFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserAvatar_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserAvatar_UserFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentItem_CommentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"objectCommentId"}},{"kind":"Field","name":{"kind":"Name","value":"commentReactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"reactorId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subjectComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CommentItem_QueryQuery, CommentItem_QueryQueryVariables>;
export const CreateReplyComment_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateReplyComment_Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objectCommentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertCommentsOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"authorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"objectCommentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objectCommentId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentItem_CommentFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserAvatar_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserAvatar_UserFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentItem_CommentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"objectCommentId"}},{"kind":"Field","name":{"kind":"Name","value":"commentReactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"reactorId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subjectComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateReplyComment_MutationMutation, CreateReplyComment_MutationMutationVariables>;
export const SetCommentIsArchived_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetCommentIsArchived_Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isArchived"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCommentsByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pkColumns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isArchived"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isArchived"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentItem_CommentFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserAvatar_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserAvatar_UserFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentItem_CommentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"objectCommentId"}},{"kind":"Field","name":{"kind":"Name","value":"commentReactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"reactorId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subjectComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<SetCommentIsArchived_MutationMutation, SetCommentIsArchived_MutationMutationVariables>;
export const AddCommentReaction_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddCommentReaction_Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertCommentReactionsOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"commentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"reactorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"onConflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"comment_reactions_comment_id_reactor_id_type_key"}},{"kind":"ObjectField","name":{"kind":"Name","value":"updateColumns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"updatedAt"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"commentId"}},{"kind":"Field","name":{"kind":"Name","value":"reactorId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<AddCommentReaction_MutationMutation, AddCommentReaction_MutationMutationVariables>;
export const DeleteCommentReaction_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCommentReaction_Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCommentReactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"commentId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"reactorId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedRows"}}]}}]}}]} as unknown as DocumentNode<DeleteCommentReaction_MutationMutation, DeleteCommentReaction_MutationMutationVariables>;
export const CreateImages_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateImages_Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageObjects"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ImagesInsertInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertImages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageObjects"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"returning"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageUploadButton_ImageFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageUploadButton_ImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Images"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<CreateImages_MutationMutation, CreateImages_MutationMutationVariables>;
export const NameSettingsSection_UserQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NameSettingsSection_UserQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NameSettingsSection_UserFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NameSettingsSection_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<NameSettingsSection_UserQueryQuery, NameSettingsSection_UserQueryQueryVariables>;
export const UpdateUserName_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserName_Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUsersByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pkColumns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"NameSettingsSection_UserFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NameSettingsSection_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<UpdateUserName_MutationMutation, UpdateUserName_MutationMutationVariables>;
export const PostCard_PostQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PostCard_PostQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"postsByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCard_PostFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserAvatar_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserAvatar_UserFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentItem_CommentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"objectCommentId"}},{"kind":"Field","name":{"kind":"Name","value":"commentReactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"reactorId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subjectComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCard_PostFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Posts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"postReactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"reactorId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"objectCommentId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_isNull"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentItem_CommentFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"postImageRelationships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<PostCard_PostQueryQuery, PostCard_PostQueryQueryVariables>;
export const SetPostIsArchived_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetPostIsArchived_Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isArchived"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updatePostsByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pkColumns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isArchived"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isArchived"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCard_PostFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserAvatar_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserAvatar_UserFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentItem_CommentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"objectCommentId"}},{"kind":"Field","name":{"kind":"Name","value":"commentReactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"reactorId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subjectComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCard_PostFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Posts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"postReactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"reactorId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"objectCommentId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_isNull"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentItem_CommentFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"postImageRelationships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<SetPostIsArchived_MutationMutation, SetPostIsArchived_MutationMutationVariables>;
export const AddPostReaction_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddPostReaction_Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertPostReactionsOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"reactorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"onConflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"post_reactions_post_id_reactor_id_type_key"}},{"kind":"ObjectField","name":{"kind":"Name","value":"updateColumns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"updatedAt"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"reactorId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<AddPostReaction_MutationMutation, AddPostReaction_MutationMutationVariables>;
export const DeletePostReaction_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeletePostReaction_Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deletePostReactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"postId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"reactorId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affectedRows"}}]}}]}}]} as unknown as DocumentNode<DeletePostReaction_MutationMutation, DeletePostReaction_MutationMutationVariables>;
export const CreateRootComment_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateRootComment_Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"objectCommentId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertCommentsOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"authorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"objectCommentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"objectCommentId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCard_CommentFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCard_CommentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]} as unknown as DocumentNode<CreateRootComment_MutationMutation, CreateRootComment_MutationMutationVariables>;
export const CreatePost_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreatePost_Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"body"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertPostsOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"body"},"value":{"kind":"Variable","name":{"kind":"Name","value":"body"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"authorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostComposer_PostFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostComposer_PostFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Posts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<CreatePost_MutationMutation, CreatePost_MutationMutationVariables>;
export const AddImageToPost_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddImageToPost_Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertPostImageRelationshipsOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"imageId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCard_PostFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserAvatar_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserAvatar_UserFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentItem_CommentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"objectCommentId"}},{"kind":"Field","name":{"kind":"Name","value":"commentReactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"reactorId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subjectComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCard_PostFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Posts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"postReactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"reactorId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"objectCommentId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_isNull"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentItem_CommentFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"postImageRelationships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<AddImageToPost_MutationMutation, AddImageToPost_MutationMutationVariables>;
export const ProfileImageSettingsSection_UserQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProfileImageSettingsSection_UserQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileImageSettingsSection_UserFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageUploadButton_ImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Images"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileImageSettingsSection_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageUploadButton_ImageFragment"}}]}}]}}]} as unknown as DocumentNode<ProfileImageSettingsSection_UserQueryQuery, ProfileImageSettingsSection_UserQueryQueryVariables>;
export const SetProfileImage_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetProfileImage_Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileImageId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateUsersByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pkColumns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"profileImageId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileImageId"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileImageSettingsSection_UserFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageUploadButton_ImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Images"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileImageSettingsSection_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageUploadButton_ImageFragment"}}]}}]}}]} as unknown as DocumentNode<SetProfileImage_MutationMutation, SetProfileImage_MutationMutationVariables>;
export const SocialAppShell_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SocialAppShell_Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SettingsPanel_UserFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageUploadButton_ImageFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Images"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProfileImageSettingsSection_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageUploadButton_ImageFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BioSettingsSection_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserAvatar_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserAvatar_UserFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AuthButton_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SettingsPanel_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProfileImageSettingsSection_UserFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"BioSettingsSection_UserFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"AuthButton_UserFragment"}}]}}]} as unknown as DocumentNode<SocialAppShell_QueryQuery, SocialAppShell_QueryQueryVariables>;
export const UserActions_UserQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserActions_UserQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sourceUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"targetUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"sourceUser"},"name":{"kind":"Name","value":"usersByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sourceUserId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userSourceUserRelationships"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"targetUserId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"targetUserId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActions_UserUserRelationshipFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userTargetUserRelationships"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sourceUserId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"targetUserId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"EnumValue","value":"FOLLOW"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActions_UserUserRelationshipFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActions_UserUserRelationshipStateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserUserRelationshipStates"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActions_UserUserRelationshipFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserUserRelationships"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"states"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActions_UserUserRelationshipStateFragment"}}]}}]}}]} as unknown as DocumentNode<UserActions_UserQueryQuery, UserActions_UserQueryQueryVariables>;
export const CreateUserUserRelationship_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserUserRelationship_Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sourceUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"targetUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserUserRelationshipTypesEnum"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertUserUserRelationshipsOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sourceUserId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sourceUserId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"targetUserId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"targetUserId"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"states"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"data"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"IS_ACTIVE"}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"onConflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"user_user_relationship_states_type_user_user_relationship_i_key"}},{"kind":"ObjectField","name":{"kind":"Name","value":"updateColumns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"updatedAt"}]}}]}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"onConflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"user_user_relationships_source_user_id_target_user_id_type_key"}},{"kind":"ObjectField","name":{"kind":"Name","value":"updateColumns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"updatedAt"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateUserUserRelationship_MutationMutation, CreateUserUserRelationship_MutationMutationVariables>;
export const DeleteUserUserRelationship_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUserUserRelationship_Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"relationshipId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUserUserRelationshipsByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"relationshipId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteUserUserRelationship_MutationMutation, DeleteUserUserRelationship_MutationMutationVariables>;
export const CreateUserUserRelationshipState_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserUserRelationshipState_Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"relationshipId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"type"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserUserRelationshipStateTypesEnum"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insertUserUserRelationshipStatesOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"type"},"value":{"kind":"Variable","name":{"kind":"Name","value":"type"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"userUserRelationshipId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"relationshipId"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"onConflict"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"constraint"},"value":{"kind":"EnumValue","value":"user_user_relationship_states_type_user_user_relationship_i_key"}},{"kind":"ObjectField","name":{"kind":"Name","value":"updateColumns"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"updatedAt"}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActions_UserUserRelationshipStateFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActions_UserUserRelationshipStateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserUserRelationshipStates"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<CreateUserUserRelationshipState_MutationMutation, CreateUserUserRelationshipState_MutationMutationVariables>;
export const DeleteUserUserRelationshipState_MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteUserUserRelationshipState_Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"relationshipStateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteUserUserRelationshipStatesByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"relationshipStateId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<DeleteUserUserRelationshipState_MutationMutation, DeleteUserUserRelationshipState_MutationMutationVariables>;
export const UserProfile_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserProfile_Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"profileUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"profileUserId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActions_UserFragment"}},{"kind":"Field","name":{"kind":"Name","value":"posts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"DESC"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"authorId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_not"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isArchived"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"BooleanValue","value":true}}]}}]}}]}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PostCard_PostFragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserAvatar_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserSummary_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserAvatar_UserFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CommentItem_CommentFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Comments"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"objectCommentId"}},{"kind":"Field","name":{"kind":"Name","value":"commentReactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"reactorId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subjectComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActions_UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Users"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bio"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PostCard_PostFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Posts"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserSummary_UserFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"postReactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"postId"}},{"kind":"Field","name":{"kind":"Name","value":"reactorId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"objectCommentId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_isNull"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"CommentItem_CommentFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"postImageRelationships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"blurDataUrl"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<UserProfile_QueryQuery, UserProfile_QueryQueryVariables>;
export const UsePageTitle_QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UsePageTitle_Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersByPk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UsePageTitle_QueryQuery, UsePageTitle_QueryQueryVariables>;