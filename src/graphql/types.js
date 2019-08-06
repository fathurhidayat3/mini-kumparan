/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: QCreateArticle
// ====================================================

export type QCreateArticle_CreateArticle = {|
  __typename: "Article",
  id: ?string,
  title: ?string,
  body: ?string,
  slug: ?string,
  thumbnail: ?string,
|};

export type QCreateArticle = {|
  CreateArticle: ?QCreateArticle_CreateArticle
|};

export type QCreateArticleVariables = {|
  username: string,
  title: string,
  body: string,
  slug: string,
  status: string,
  thumbnail: string,
  categories: Array<?string>,
|};
/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MutationUpdateArticle
// ====================================================

export type MutationUpdateArticle_UpdateArticle = {|
  __typename: "Article",
  title: ?string,
  slug: ?string,
  body: ?string,
  status: ?string,
  categories: ?Array<?string>,
  userId: ?string,
  id: ?string,
  createdAt: ?string,
  updatedAt: ?string,
|};

export type MutationUpdateArticle = {|
  UpdateArticle: ?MutationUpdateArticle_UpdateArticle
|};

export type MutationUpdateArticleVariables = {|
  title: string,
  slug: string,
  body: string,
  status: string,
  username: string,
  categories: Array<?string>,
  thumbnail: string,
  id: string,
|};
/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryDashboardArticles
// ====================================================

export type QueryDashboardArticles_DashboardArticles = {|
  __typename: "Article",
  id: ?string,
  title: ?string,
  body: ?string,
  categories: ?Array<?string>,
  status: ?string,
  slug: ?string,
  thumbnail: ?string,
  createdAt: ?string,
  updatedAt: ?string,
|};

export type QueryDashboardArticles = {|
  DashboardArticles: ?Array<?QueryDashboardArticles_DashboardArticles>
|};

export type QueryDashboardArticlesVariables = {|
  keyword: string,
  category: string,
  status: string,
|};
/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryGetPublishedArticleBySlug
// ====================================================

export type QueryGetPublishedArticleBySlug_GetPublishedArticleBySlug_user = {|
  __typename: "User",
  username: ?string,
  fullname: ?string,
|};

export type QueryGetPublishedArticleBySlug_GetPublishedArticleBySlug_comments = {|
  __typename: "Comment",
  fullname: ?string,
  message: ?string,
|};

export type QueryGetPublishedArticleBySlug_GetPublishedArticleBySlug = {|
  __typename: "Article",
  id: ?string,
  title: ?string,
  slug: ?string,
  body: ?string,
  thumbnail: ?string,
  status: ?string,
  createdAt: ?string,
  updatedAt: ?string,
  categories: ?Array<?string>,
  user: ?QueryGetPublishedArticleBySlug_GetPublishedArticleBySlug_user,
  totalComments: ?number,
  comments: ?Array<?QueryGetPublishedArticleBySlug_GetPublishedArticleBySlug_comments>,
|};

export type QueryGetPublishedArticleBySlug = {|
  GetPublishedArticleBySlug: ?QueryGetPublishedArticleBySlug_GetPublishedArticleBySlug
|};

export type QueryGetPublishedArticleBySlugVariables = {|
  slug: string
|};
/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryGetPublishedArticlesByCategory
// ====================================================

export type QueryGetPublishedArticlesByCategory_GetPublishedArticlesByCategory_user = {|
  __typename: "User",
  fullname: ?string,
|};

export type QueryGetPublishedArticlesByCategory_GetPublishedArticlesByCategory = {|
  __typename: "Article",
  id: ?string,
  title: ?string,
  slug: ?string,
  thumbnail: ?string,
  createdAt: ?string,
  totalComments: ?number,
  user: ?QueryGetPublishedArticlesByCategory_GetPublishedArticlesByCategory_user,
|};

export type QueryGetPublishedArticlesByCategory = {|
  GetPublishedArticlesByCategory: ?Array<?QueryGetPublishedArticlesByCategory_GetPublishedArticlesByCategory>
|};

export type QueryGetPublishedArticlesByCategoryVariables = {|
  category: string
|};
/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MutationCreateUserCategory
// ====================================================

export type MutationCreateUserCategory_CreateUserCategory = {|
  __typename: "Category",
  username: ?string,
  categoryname: ?string,
|};

export type MutationCreateUserCategory = {|
  CreateUserCategory: ?MutationCreateUserCategory_CreateUserCategory
|};

export type MutationCreateUserCategoryVariables = {|
  username: string,
  categoryname: string,
  categoryslug: string,
|};
/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryGetUserCategoriesByUsername
// ====================================================

export type QueryGetUserCategoriesByUsername_GetUserCategoriesByUsername = {|
  __typename: "Category",
  username: ?string,
  categoryname: ?string,
  categoryslug: ?string,
|};

export type QueryGetUserCategoriesByUsername = {|
  GetUserCategoriesByUsername: ?Array<?QueryGetUserCategoriesByUsername_GetUserCategoriesByUsername>
|};

export type QueryGetUserCategoriesByUsernameVariables = {|
  username: string
|};
/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MutationCreateComment
// ====================================================

export type MutationCreateComment_CreateComment = {|
  __typename: "Comment",
  message: ?string,
  articleID: ?string,
|};

export type MutationCreateComment = {|
  CreateComment: ?MutationCreateComment_CreateComment
|};

export type MutationCreateCommentVariables = {|
  articleID: string,
  fullname: string,
  username: string,
  message: string,
|};
/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProfileArticles
// ====================================================

export type QueryProfileArticles_ProfileArticles_articles_user = {|
  __typename: "User",
  userId: ?string,
  username: ?string,
  fullname: ?string,
|};

export type QueryProfileArticles_ProfileArticles_articles = {|
  __typename: "Article",
  id: ?string,
  title: ?string,
  body: ?string,
  status: ?string,
  slug: ?string,
  createdAt: ?string,
  thumbnail: ?string,
  totalComments: ?number,
  user: ?QueryProfileArticles_ProfileArticles_articles_user,
|};

export type QueryProfileArticles_ProfileArticles_user = {|
  __typename: "User",
  username: ?string,
  fullname: ?string,
|};

export type QueryProfileArticles_ProfileArticles = {|
  __typename: "Profile",
  articles: ?Array<?QueryProfileArticles_ProfileArticles_articles>,
  user: ?QueryProfileArticles_ProfileArticles_user,
|};

export type QueryProfileArticles = {|
  ProfileArticles: ?QueryProfileArticles_ProfileArticles
|};

export type QueryProfileArticlesVariables = {|
  username: string,
  category: string,
|};
/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryFindPublishedArticles
// ====================================================

export type QueryFindPublishedArticles_FindPublishedArticles_user = {|
  __typename: "User",
  fullname: ?string,
|};

export type QueryFindPublishedArticles_FindPublishedArticles = {|
  __typename: "Article",
  id: ?string,
  title: ?string,
  slug: ?string,
  thumbnail: ?string,
  createdAt: ?string,
  totalComments: ?number,
  user: ?QueryFindPublishedArticles_FindPublishedArticles_user,
|};

export type QueryFindPublishedArticles = {|
  FindPublishedArticles: ?Array<?QueryFindPublishedArticles_FindPublishedArticles>
|};

export type QueryFindPublishedArticlesVariables = {|
  keyword: string
|};/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================