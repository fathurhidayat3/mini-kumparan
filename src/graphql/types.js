/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: QCreateArticle
// ====================================================

export type QCreateArticle_CreateArticle_user = {|
  __typename: "User",
  fullname: ?string,
|};

export type QCreateArticle_CreateArticle = {|
  __typename: "Article",
  id: ?string,
  title: ?string,
  slug: ?string,
  thumbnail: ?string,
  createdAt: ?string,
  totalComments: ?number,
  user: ?QCreateArticle_CreateArticle_user,
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

export type MutationUpdateArticle_UpdateArticle_user = {|
  __typename: "User",
  fullname: ?string,
|};

export type MutationUpdateArticle_UpdateArticle = {|
  __typename: "Article",
  id: ?string,
  title: ?string,
  slug: ?string,
  thumbnail: ?string,
  createdAt: ?string,
  totalComments: ?number,
  user: ?MutationUpdateArticle_UpdateArticle_user,
  body: ?string,
  status: ?string,
  userId: ?string,
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

export type QueryDashboardArticles_DashboardArticles_user = {|
  __typename: "User",
  fullname: ?string,
|};

export type QueryDashboardArticles_DashboardArticles_categories = {|
  __typename: "Category",
  userId: ?string,
  categoryId: ?string,
  categoryname: ?string,
  categoryslug: ?string,
|};

export type QueryDashboardArticles_DashboardArticles = {|
  __typename: "Article",
  id: ?string,
  title: ?string,
  slug: ?string,
  thumbnail: ?string,
  createdAt: ?string,
  totalComments: ?number,
  user: ?QueryDashboardArticles_DashboardArticles_user,
  body: ?string,
  status: ?string,
  updatedAt: ?string,
  categories: ?Array<?QueryDashboardArticles_DashboardArticles_categories>,
|};

export type QueryDashboardArticles = {|
  DashboardArticles: ?Array<?QueryDashboardArticles_DashboardArticles>
|};

export type QueryDashboardArticlesVariables = {|
  keyword: string,
  category: string,
  status: string,
  limit: number,
  offset: number,
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
  keyword: string,
  limit: number,
  offset: number,
|};
/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryGetPublishedArticleBySlug
// ====================================================

export type QueryGetPublishedArticleBySlug_GetPublishedArticleBySlug_user = {|
  __typename: "User",
  fullname: ?string,
  username: ?string,
|};

export type QueryGetPublishedArticleBySlug_GetPublishedArticleBySlug_categories = {|
  __typename: "Category",
  categoryId: ?string,
  categoryname: ?string,
  categoryslug: ?string,
|};

export type QueryGetPublishedArticleBySlug_GetPublishedArticleBySlug = {|
  __typename: "Article",
  id: ?string,
  title: ?string,
  slug: ?string,
  thumbnail: ?string,
  createdAt: ?string,
  totalComments: ?number,
  user: ?QueryGetPublishedArticleBySlug_GetPublishedArticleBySlug_user,
  body: ?string,
  status: ?string,
  updatedAt: ?string,
  categories: ?Array<?QueryGetPublishedArticleBySlug_GetPublishedArticleBySlug_categories>,
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
  category: string,
  offset: number,
  limit: number,
|};
/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MutationCreateUserCategory
// ====================================================

export type MutationCreateUserCategory_CreateUserCategory = {|
  __typename: "Category",
  categoryId: ?string,
  categoryname: ?string,
  categoryslug: ?string,
|};

export type MutationCreateUserCategory = {|
  CreateUserCategory: ?MutationCreateUserCategory_CreateUserCategory
|};

export type MutationCreateUserCategoryVariables = {|
  userId: string,
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
  categoryId: ?string,
  categoryname: ?string,
  categoryslug: ?string,
|};

export type QueryGetUserCategoriesByUsername = {|
  GetUserCategoriesByUsername: ?Array<?QueryGetUserCategoriesByUsername_GetUserCategoriesByUsername>
|};

export type QueryGetUserCategoriesByUsernameVariables = {|
  userId: string,
  limit: number,
  offset: number,
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
  fullname: ?string,
  userId: ?string,
  username: ?string,
|};

export type QueryProfileArticles_ProfileArticles_articles = {|
  __typename: "Article",
  id: ?string,
  title: ?string,
  slug: ?string,
  thumbnail: ?string,
  createdAt: ?string,
  totalComments: ?number,
  user: ?QueryProfileArticles_ProfileArticles_articles_user,
  body: ?string,
  status: ?string,
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
  limit: number,
  offset: number,
|};
/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ArticleParts
// ====================================================

export type ArticleParts_user = {|
  __typename: "User",
  fullname: ?string,
|};

export type ArticleParts = {|
  __typename: "Article",
  id: ?string,
  title: ?string,
  slug: ?string,
  thumbnail: ?string,
  createdAt: ?string,
  totalComments: ?number,
  user: ?ArticleParts_user,
|};/* @flow */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================