import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Cursor: any,
  Datetime: any,
};


export type Comment = Node & {
   __typename?: 'Comment',
  nodeId: Scalars['ID'],
  id: Scalars['Int'],
  comment: Scalars['String'],
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['Int']>,
  userName: Scalars['String'],
  postId?: Maybe<Scalars['Int']>,
  userByUserId?: Maybe<User>,
  postByPostId?: Maybe<Post>,
};

export type CommentCondition = {
  id?: Maybe<Scalars['Int']>,
  comment?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['Int']>,
  userName?: Maybe<Scalars['String']>,
  postId?: Maybe<Scalars['Int']>,
};

export type CommentInput = {
  id?: Maybe<Scalars['Int']>,
  comment: Scalars['String'],
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['Int']>,
  userName: Scalars['String'],
  postId?: Maybe<Scalars['Int']>,
};

export type CommentPatch = {
  id?: Maybe<Scalars['Int']>,
  comment?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['Int']>,
  userName?: Maybe<Scalars['String']>,
  postId?: Maybe<Scalars['Int']>,
};

export type CommentsConnection = {
   __typename?: 'CommentsConnection',
  nodes: Array<Maybe<Comment>>,
  edges: Array<CommentsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type CommentsEdge = {
   __typename?: 'CommentsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Comment>,
};

export enum CommentsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  CommentAsc = 'COMMENT_ASC',
  CommentDesc = 'COMMENT_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  UserNameAsc = 'USER_NAME_ASC',
  UserNameDesc = 'USER_NAME_DESC',
  PostIdAsc = 'POST_ID_ASC',
  PostIdDesc = 'POST_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type CreateCommentInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  comment: CommentInput,
};

export type CreateCommentPayload = {
   __typename?: 'CreateCommentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  comment?: Maybe<Comment>,
  query?: Maybe<Query>,
  userByUserId?: Maybe<User>,
  postByPostId?: Maybe<Post>,
  commentEdge?: Maybe<CommentsEdge>,
};


export type CreateCommentPayloadCommentEdgeArgs = {
  orderBy?: Maybe<Array<CommentsOrderBy>>
};

export type CreateKnexMigrationInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  knexMigration: KnexMigrationInput,
};

export type CreateKnexMigrationPayload = {
   __typename?: 'CreateKnexMigrationPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  knexMigration?: Maybe<KnexMigration>,
  query?: Maybe<Query>,
  knexMigrationEdge?: Maybe<KnexMigrationsEdge>,
};


export type CreateKnexMigrationPayloadKnexMigrationEdgeArgs = {
  orderBy?: Maybe<Array<KnexMigrationsOrderBy>>
};

export type CreateKnexMigrationsLockInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  knexMigrationsLock: KnexMigrationsLockInput,
};

export type CreateKnexMigrationsLockPayload = {
   __typename?: 'CreateKnexMigrationsLockPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  knexMigrationsLock?: Maybe<KnexMigrationsLock>,
  query?: Maybe<Query>,
  knexMigrationsLockEdge?: Maybe<KnexMigrationsLocksEdge>,
};


export type CreateKnexMigrationsLockPayloadKnexMigrationsLockEdgeArgs = {
  orderBy?: Maybe<Array<KnexMigrationsLocksOrderBy>>
};

export type CreatePostInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  post: PostInput,
};

export type CreatePostPayload = {
   __typename?: 'CreatePostPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  post?: Maybe<Post>,
  query?: Maybe<Query>,
  userByUserId?: Maybe<User>,
  postEdge?: Maybe<PostsEdge>,
};


export type CreatePostPayloadPostEdgeArgs = {
  orderBy?: Maybe<Array<PostsOrderBy>>
};

export type CreateUserInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  user: UserInput,
};

export type CreateUserPayload = {
   __typename?: 'CreateUserPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
  query?: Maybe<Query>,
  userEdge?: Maybe<UsersEdge>,
};


export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>
};



export type DeleteCommentByIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
};

export type DeleteCommentInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteCommentPayload = {
   __typename?: 'DeleteCommentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  comment?: Maybe<Comment>,
  deletedCommentId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  userByUserId?: Maybe<User>,
  postByPostId?: Maybe<Post>,
  commentEdge?: Maybe<CommentsEdge>,
};


export type DeleteCommentPayloadCommentEdgeArgs = {
  orderBy?: Maybe<Array<CommentsOrderBy>>
};

export type DeleteKnexMigrationByIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
};

export type DeleteKnexMigrationInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteKnexMigrationPayload = {
   __typename?: 'DeleteKnexMigrationPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  knexMigration?: Maybe<KnexMigration>,
  deletedKnexMigrationId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  knexMigrationEdge?: Maybe<KnexMigrationsEdge>,
};


export type DeleteKnexMigrationPayloadKnexMigrationEdgeArgs = {
  orderBy?: Maybe<Array<KnexMigrationsOrderBy>>
};

export type DeleteKnexMigrationsLockByIndexInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  index: Scalars['Int'],
};

export type DeleteKnexMigrationsLockInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteKnexMigrationsLockPayload = {
   __typename?: 'DeleteKnexMigrationsLockPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  knexMigrationsLock?: Maybe<KnexMigrationsLock>,
  deletedKnexMigrationsLockId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  knexMigrationsLockEdge?: Maybe<KnexMigrationsLocksEdge>,
};


export type DeleteKnexMigrationsLockPayloadKnexMigrationsLockEdgeArgs = {
  orderBy?: Maybe<Array<KnexMigrationsLocksOrderBy>>
};

export type DeletePostByIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
};

export type DeletePostInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeletePostPayload = {
   __typename?: 'DeletePostPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  post?: Maybe<Post>,
  deletedPostId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  userByUserId?: Maybe<User>,
  postEdge?: Maybe<PostsEdge>,
};


export type DeletePostPayloadPostEdgeArgs = {
  orderBy?: Maybe<Array<PostsOrderBy>>
};

export type DeleteUserByIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  id: Scalars['Int'],
};

export type DeleteUserInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
};

export type DeleteUserPayload = {
   __typename?: 'DeleteUserPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
  deletedUserId?: Maybe<Scalars['ID']>,
  query?: Maybe<Query>,
  userEdge?: Maybe<UsersEdge>,
};


export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>
};

export type KnexMigration = Node & {
   __typename?: 'KnexMigration',
  nodeId: Scalars['ID'],
  id: Scalars['Int'],
  name?: Maybe<Scalars['String']>,
  batch?: Maybe<Scalars['Int']>,
  migrationTime?: Maybe<Scalars['Datetime']>,
};

export type KnexMigrationCondition = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  batch?: Maybe<Scalars['Int']>,
  migrationTime?: Maybe<Scalars['Datetime']>,
};

export type KnexMigrationInput = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  batch?: Maybe<Scalars['Int']>,
  migrationTime?: Maybe<Scalars['Datetime']>,
};

export type KnexMigrationPatch = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  batch?: Maybe<Scalars['Int']>,
  migrationTime?: Maybe<Scalars['Datetime']>,
};

export type KnexMigrationsConnection = {
   __typename?: 'KnexMigrationsConnection',
  nodes: Array<Maybe<KnexMigration>>,
  edges: Array<KnexMigrationsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type KnexMigrationsEdge = {
   __typename?: 'KnexMigrationsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<KnexMigration>,
};

export type KnexMigrationsLock = Node & {
   __typename?: 'KnexMigrationsLock',
  nodeId: Scalars['ID'],
  index: Scalars['Int'],
  isLocked?: Maybe<Scalars['Int']>,
};

export type KnexMigrationsLockCondition = {
  index?: Maybe<Scalars['Int']>,
  isLocked?: Maybe<Scalars['Int']>,
};

export type KnexMigrationsLockInput = {
  index?: Maybe<Scalars['Int']>,
  isLocked?: Maybe<Scalars['Int']>,
};

export type KnexMigrationsLockPatch = {
  index?: Maybe<Scalars['Int']>,
  isLocked?: Maybe<Scalars['Int']>,
};

export type KnexMigrationsLocksConnection = {
   __typename?: 'KnexMigrationsLocksConnection',
  nodes: Array<Maybe<KnexMigrationsLock>>,
  edges: Array<KnexMigrationsLocksEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type KnexMigrationsLocksEdge = {
   __typename?: 'KnexMigrationsLocksEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<KnexMigrationsLock>,
};

export enum KnexMigrationsLocksOrderBy {
  Natural = 'NATURAL',
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  IsLockedAsc = 'IS_LOCKED_ASC',
  IsLockedDesc = 'IS_LOCKED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export enum KnexMigrationsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  BatchAsc = 'BATCH_ASC',
  BatchDesc = 'BATCH_DESC',
  MigrationTimeAsc = 'MIGRATION_TIME_ASC',
  MigrationTimeDesc = 'MIGRATION_TIME_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Mutation = {
   __typename?: 'Mutation',
  createComment?: Maybe<CreateCommentPayload>,
  createKnexMigration?: Maybe<CreateKnexMigrationPayload>,
  createKnexMigrationsLock?: Maybe<CreateKnexMigrationsLockPayload>,
  createPost?: Maybe<CreatePostPayload>,
  createUser?: Maybe<CreateUserPayload>,
  updateComment?: Maybe<UpdateCommentPayload>,
  updateCommentById?: Maybe<UpdateCommentPayload>,
  updateKnexMigration?: Maybe<UpdateKnexMigrationPayload>,
  updateKnexMigrationById?: Maybe<UpdateKnexMigrationPayload>,
  updateKnexMigrationsLock?: Maybe<UpdateKnexMigrationsLockPayload>,
  updateKnexMigrationsLockByIndex?: Maybe<UpdateKnexMigrationsLockPayload>,
  updatePost?: Maybe<UpdatePostPayload>,
  updatePostById?: Maybe<UpdatePostPayload>,
  updateUser?: Maybe<UpdateUserPayload>,
  updateUserById?: Maybe<UpdateUserPayload>,
  deleteComment?: Maybe<DeleteCommentPayload>,
  deleteCommentById?: Maybe<DeleteCommentPayload>,
  deleteKnexMigration?: Maybe<DeleteKnexMigrationPayload>,
  deleteKnexMigrationById?: Maybe<DeleteKnexMigrationPayload>,
  deleteKnexMigrationsLock?: Maybe<DeleteKnexMigrationsLockPayload>,
  deleteKnexMigrationsLockByIndex?: Maybe<DeleteKnexMigrationsLockPayload>,
  deletePost?: Maybe<DeletePostPayload>,
  deletePostById?: Maybe<DeletePostPayload>,
  deleteUser?: Maybe<DeleteUserPayload>,
  deleteUserById?: Maybe<DeleteUserPayload>,
};


export type MutationCreateCommentArgs = {
  input: CreateCommentInput
};


export type MutationCreateKnexMigrationArgs = {
  input: CreateKnexMigrationInput
};


export type MutationCreateKnexMigrationsLockArgs = {
  input: CreateKnexMigrationsLockInput
};


export type MutationCreatePostArgs = {
  input: CreatePostInput
};


export type MutationCreateUserArgs = {
  input: CreateUserInput
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput
};


export type MutationUpdateCommentByIdArgs = {
  input: UpdateCommentByIdInput
};


export type MutationUpdateKnexMigrationArgs = {
  input: UpdateKnexMigrationInput
};


export type MutationUpdateKnexMigrationByIdArgs = {
  input: UpdateKnexMigrationByIdInput
};


export type MutationUpdateKnexMigrationsLockArgs = {
  input: UpdateKnexMigrationsLockInput
};


export type MutationUpdateKnexMigrationsLockByIndexArgs = {
  input: UpdateKnexMigrationsLockByIndexInput
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInput
};


export type MutationUpdatePostByIdArgs = {
  input: UpdatePostByIdInput
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput
};


export type MutationUpdateUserByIdArgs = {
  input: UpdateUserByIdInput
};


export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput
};


export type MutationDeleteCommentByIdArgs = {
  input: DeleteCommentByIdInput
};


export type MutationDeleteKnexMigrationArgs = {
  input: DeleteKnexMigrationInput
};


export type MutationDeleteKnexMigrationByIdArgs = {
  input: DeleteKnexMigrationByIdInput
};


export type MutationDeleteKnexMigrationsLockArgs = {
  input: DeleteKnexMigrationsLockInput
};


export type MutationDeleteKnexMigrationsLockByIndexArgs = {
  input: DeleteKnexMigrationsLockByIndexInput
};


export type MutationDeletePostArgs = {
  input: DeletePostInput
};


export type MutationDeletePostByIdArgs = {
  input: DeletePostByIdInput
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput
};


export type MutationDeleteUserByIdArgs = {
  input: DeleteUserByIdInput
};

export type Node = {
  nodeId: Scalars['ID'],
};

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['Cursor']>,
  endCursor?: Maybe<Scalars['Cursor']>,
};

export type Post = Node & {
   __typename?: 'Post',
  nodeId: Scalars['ID'],
  id: Scalars['Int'],
  title: Scalars['String'],
  body: Scalars['String'],
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['Int']>,
  userByUserId?: Maybe<User>,
  commentsByPostId: CommentsConnection,
};


export type PostCommentsByPostIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<CommentsOrderBy>>,
  condition?: Maybe<CommentCondition>
};

export type PostCondition = {
  id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['Int']>,
};

export type PostInput = {
  id?: Maybe<Scalars['Int']>,
  title: Scalars['String'],
  body: Scalars['String'],
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['Int']>,
};

export type PostPatch = {
  id?: Maybe<Scalars['Int']>,
  title?: Maybe<Scalars['String']>,
  body?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
  userId?: Maybe<Scalars['Int']>,
};

export type PostsConnection = {
   __typename?: 'PostsConnection',
  nodes: Array<Maybe<Post>>,
  edges: Array<PostsEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type PostsEdge = {
   __typename?: 'PostsEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<Post>,
};

export enum PostsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  TitleAsc = 'TITLE_ASC',
  TitleDesc = 'TITLE_DESC',
  BodyAsc = 'BODY_ASC',
  BodyDesc = 'BODY_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type Query = Node & {
   __typename?: 'Query',
  query: Query,
  nodeId: Scalars['ID'],
  node?: Maybe<Node>,
  allComments?: Maybe<CommentsConnection>,
  allKnexMigrations?: Maybe<KnexMigrationsConnection>,
  allKnexMigrationsLocks?: Maybe<KnexMigrationsLocksConnection>,
  allPosts?: Maybe<PostsConnection>,
  allUsers?: Maybe<UsersConnection>,
  commentById?: Maybe<Comment>,
  knexMigrationById?: Maybe<KnexMigration>,
  knexMigrationsLockByIndex?: Maybe<KnexMigrationsLock>,
  postById?: Maybe<Post>,
  userById?: Maybe<User>,
  comment?: Maybe<Comment>,
  knexMigration?: Maybe<KnexMigration>,
  knexMigrationsLock?: Maybe<KnexMigrationsLock>,
  post?: Maybe<Post>,
  user?: Maybe<User>,
};


export type QueryNodeArgs = {
  nodeId: Scalars['ID']
};


export type QueryAllCommentsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<CommentsOrderBy>>,
  condition?: Maybe<CommentCondition>
};


export type QueryAllKnexMigrationsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<KnexMigrationsOrderBy>>,
  condition?: Maybe<KnexMigrationCondition>
};


export type QueryAllKnexMigrationsLocksArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<KnexMigrationsLocksOrderBy>>,
  condition?: Maybe<KnexMigrationsLockCondition>
};


export type QueryAllPostsArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<PostsOrderBy>>,
  condition?: Maybe<PostCondition>
};


export type QueryAllUsersArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<UsersOrderBy>>,
  condition?: Maybe<UserCondition>
};


export type QueryCommentByIdArgs = {
  id: Scalars['Int']
};


export type QueryKnexMigrationByIdArgs = {
  id: Scalars['Int']
};


export type QueryKnexMigrationsLockByIndexArgs = {
  index: Scalars['Int']
};


export type QueryPostByIdArgs = {
  id: Scalars['Int']
};


export type QueryUserByIdArgs = {
  id: Scalars['Int']
};


export type QueryCommentArgs = {
  nodeId: Scalars['ID']
};


export type QueryKnexMigrationArgs = {
  nodeId: Scalars['ID']
};


export type QueryKnexMigrationsLockArgs = {
  nodeId: Scalars['ID']
};


export type QueryPostArgs = {
  nodeId: Scalars['ID']
};


export type QueryUserArgs = {
  nodeId: Scalars['ID']
};

export type UpdateCommentByIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  commentPatch: CommentPatch,
  id: Scalars['Int'],
};

export type UpdateCommentInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  commentPatch: CommentPatch,
};

export type UpdateCommentPayload = {
   __typename?: 'UpdateCommentPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  comment?: Maybe<Comment>,
  query?: Maybe<Query>,
  userByUserId?: Maybe<User>,
  postByPostId?: Maybe<Post>,
  commentEdge?: Maybe<CommentsEdge>,
};


export type UpdateCommentPayloadCommentEdgeArgs = {
  orderBy?: Maybe<Array<CommentsOrderBy>>
};

export type UpdateKnexMigrationByIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  knexMigrationPatch: KnexMigrationPatch,
  id: Scalars['Int'],
};

export type UpdateKnexMigrationInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  knexMigrationPatch: KnexMigrationPatch,
};

export type UpdateKnexMigrationPayload = {
   __typename?: 'UpdateKnexMigrationPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  knexMigration?: Maybe<KnexMigration>,
  query?: Maybe<Query>,
  knexMigrationEdge?: Maybe<KnexMigrationsEdge>,
};


export type UpdateKnexMigrationPayloadKnexMigrationEdgeArgs = {
  orderBy?: Maybe<Array<KnexMigrationsOrderBy>>
};

export type UpdateKnexMigrationsLockByIndexInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  knexMigrationsLockPatch: KnexMigrationsLockPatch,
  index: Scalars['Int'],
};

export type UpdateKnexMigrationsLockInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  knexMigrationsLockPatch: KnexMigrationsLockPatch,
};

export type UpdateKnexMigrationsLockPayload = {
   __typename?: 'UpdateKnexMigrationsLockPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  knexMigrationsLock?: Maybe<KnexMigrationsLock>,
  query?: Maybe<Query>,
  knexMigrationsLockEdge?: Maybe<KnexMigrationsLocksEdge>,
};


export type UpdateKnexMigrationsLockPayloadKnexMigrationsLockEdgeArgs = {
  orderBy?: Maybe<Array<KnexMigrationsLocksOrderBy>>
};

export type UpdatePostByIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  postPatch: PostPatch,
  id: Scalars['Int'],
};

export type UpdatePostInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  postPatch: PostPatch,
};

export type UpdatePostPayload = {
   __typename?: 'UpdatePostPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  post?: Maybe<Post>,
  query?: Maybe<Query>,
  userByUserId?: Maybe<User>,
  postEdge?: Maybe<PostsEdge>,
};


export type UpdatePostPayloadPostEdgeArgs = {
  orderBy?: Maybe<Array<PostsOrderBy>>
};

export type UpdateUserByIdInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  userPatch: UserPatch,
  id: Scalars['Int'],
};

export type UpdateUserInput = {
  clientMutationId?: Maybe<Scalars['String']>,
  nodeId: Scalars['ID'],
  userPatch: UserPatch,
};

export type UpdateUserPayload = {
   __typename?: 'UpdateUserPayload',
  clientMutationId?: Maybe<Scalars['String']>,
  user?: Maybe<User>,
  query?: Maybe<Query>,
  userEdge?: Maybe<UsersEdge>,
};


export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: Maybe<Array<UsersOrderBy>>
};

export type User = Node & {
   __typename?: 'User',
  nodeId: Scalars['ID'],
  id: Scalars['Int'],
  name: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
  accountVerified: Scalars['Boolean'],
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
  postsByUserId: PostsConnection,
  commentsByUserId: CommentsConnection,
};


export type UserPostsByUserIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<PostsOrderBy>>,
  condition?: Maybe<PostCondition>
};


export type UserCommentsByUserIdArgs = {
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['Cursor']>,
  after?: Maybe<Scalars['Cursor']>,
  orderBy?: Maybe<Array<CommentsOrderBy>>,
  condition?: Maybe<CommentCondition>
};

export type UserCondition = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  accountVerified?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
};

export type UserInput = {
  id?: Maybe<Scalars['Int']>,
  name: Scalars['String'],
  email: Scalars['String'],
  password: Scalars['String'],
  accountVerified?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
};

export type UserPatch = {
  id?: Maybe<Scalars['Int']>,
  name?: Maybe<Scalars['String']>,
  email?: Maybe<Scalars['String']>,
  password?: Maybe<Scalars['String']>,
  accountVerified?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['Datetime']>,
  updatedAt?: Maybe<Scalars['Datetime']>,
};

export type UsersConnection = {
   __typename?: 'UsersConnection',
  nodes: Array<Maybe<User>>,
  edges: Array<UsersEdge>,
  pageInfo: PageInfo,
  totalCount: Scalars['Int'],
};

export type UsersEdge = {
   __typename?: 'UsersEdge',
  cursor?: Maybe<Scalars['Cursor']>,
  node?: Maybe<User>,
};

export enum UsersOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  PasswordAsc = 'PASSWORD_ASC',
  PasswordDesc = 'PASSWORD_DESC',
  AccountVerifiedAsc = 'ACCOUNT_VERIFIED_ASC',
  AccountVerifiedDesc = 'ACCOUNT_VERIFIED_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  UpdatedAtAsc = 'UPDATED_AT_ASC',
  UpdatedAtDesc = 'UPDATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

export type CreateUserMutationVariables = {
  user: UserInput
};


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: Maybe<(
    { __typename?: 'CreateUserPayload' }
    & Pick<CreateUserPayload, 'clientMutationId'>
  )> }
);

export type UpdateUserByIdMutationVariables = {
  id: Scalars['Int'],
  UserPatch: UserPatch
};


export type UpdateUserByIdMutation = (
  { __typename?: 'Mutation' }
  & { updateUserById: Maybe<(
    { __typename?: 'UpdateUserPayload' }
    & Pick<UpdateUserPayload, 'clientMutationId'>
  )> }
);

export type GetUsersQueryVariables = {};


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { allUsers: Maybe<(
    { __typename?: 'UsersConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'email' | 'id' | 'name' | 'createdAt'>
    )>> }
  )> }
);


export const CreateUserDocument = gql`
    mutation createUser($user: UserInput!) {
  createUser(input: {user: $user}) {
    clientMutationId
  }
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;
export type CreateUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateUserMutation, CreateUserMutationVariables>, 'mutation'>;

    export const CreateUserComponent = (props: CreateUserComponentProps) => (
      <ApolloReactComponents.Mutation<CreateUserMutation, CreateUserMutationVariables> mutation={CreateUserDocument} {...props} />
    );
    
export type CreateUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<CreateUserMutation, CreateUserMutationVariables> & TChildProps;
export function withCreateUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateUserMutation,
  CreateUserMutationVariables,
  CreateUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, CreateUserMutation, CreateUserMutationVariables, CreateUserProps<TChildProps>>(CreateUserDocument, {
      alias: 'createUser',
      ...operationOptions
    });
};

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, baseOptions);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserByIdDocument = gql`
    mutation updateUserById($id: Int!, $UserPatch: UserPatch!) {
  updateUserById(input: {id: $id, userPatch: $UserPatch}) {
    clientMutationId
  }
}
    `;
export type UpdateUserByIdMutationFn = ApolloReactCommon.MutationFunction<UpdateUserByIdMutation, UpdateUserByIdMutationVariables>;
export type UpdateUserByIdComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateUserByIdMutation, UpdateUserByIdMutationVariables>, 'mutation'>;

    export const UpdateUserByIdComponent = (props: UpdateUserByIdComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateUserByIdMutation, UpdateUserByIdMutationVariables> mutation={UpdateUserByIdDocument} {...props} />
    );
    
export type UpdateUserByIdProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateUserByIdMutation, UpdateUserByIdMutationVariables> & TChildProps;
export function withUpdateUserById<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateUserByIdMutation,
  UpdateUserByIdMutationVariables,
  UpdateUserByIdProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateUserByIdMutation, UpdateUserByIdMutationVariables, UpdateUserByIdProps<TChildProps>>(UpdateUserByIdDocument, {
      alias: 'updateUserById',
      ...operationOptions
    });
};

/**
 * __useUpdateUserByIdMutation__
 *
 * To run a mutation, you first call `useUpdateUserByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserByIdMutation, { data, loading, error }] = useUpdateUserByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *      UserPatch: // value for 'UserPatch'
 *   },
 * });
 */
export function useUpdateUserByIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserByIdMutation, UpdateUserByIdMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateUserByIdMutation, UpdateUserByIdMutationVariables>(UpdateUserByIdDocument, baseOptions);
      }
export type UpdateUserByIdMutationHookResult = ReturnType<typeof useUpdateUserByIdMutation>;
export type UpdateUserByIdMutationResult = ApolloReactCommon.MutationResult<UpdateUserByIdMutation>;
export type UpdateUserByIdMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserByIdMutation, UpdateUserByIdMutationVariables>;
export const GetUsersDocument = gql`
    query getUsers {
  allUsers {
    nodes {
      email
      id
      name
      createdAt
    }
  }
}
    `;
export type GetUsersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUsersQuery, GetUsersQueryVariables>, 'query'>;

    export const GetUsersComponent = (props: GetUsersComponentProps) => (
      <ApolloReactComponents.Query<GetUsersQuery, GetUsersQueryVariables> query={GetUsersDocument} {...props} />
    );
    
export type GetUsersProps<TChildProps = {}> = ApolloReactHoc.DataProps<GetUsersQuery, GetUsersQueryVariables> & TChildProps;
export function withGetUsers<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUsersQuery,
  GetUsersQueryVariables,
  GetUsersProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, GetUsersQuery, GetUsersQueryVariables, GetUsersProps<TChildProps>>(GetUsersDocument, {
      alias: 'getUsers',
      ...operationOptions
    });
};

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<GetUsersQuery, GetUsersQueryVariables>;