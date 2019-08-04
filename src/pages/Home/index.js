// @flow

import * as React from 'react';

import {withRouter} from 'react-router-dom';

import HomeMeta from './HomeMeta';

import GetPublishedArticles from '../../graphql/Article/QueryGetPublishedArticles';
import FilterContext from '../../contexts/FilterContext';

import Base from '../../components/Base';
import ArticleList from './ArticleList';
import SkeletonLoaderList from '../../components/SkeletonLoaderList';

import gql from 'graphql-tag';

const query = gql`
  query QueryFindPublishedArticles($keyword: String!) {
    FindPublishedArticles(keyword: $keyword) {
      id
      title
      slug
      thumbnail
      createdAt
      totalComments
      user {
        fullname
      }
    }
  }
`;

type Props = {
  history: Object,
};

function Home(props: Props) {
  const pathname = props.history.location.pathname;
  const categoryName =
    (pathname.split('/')[2] && pathname.split('/')[2].toUpperCase()) || '';

  return (
    <FilterContext.Consumer>
      {({filterData}) => (
        <Base>
          {filterData.keyword && (
            <div style={{marginBottom: 16}}>
              Hasil pencarian dari kunci
              <span style={{fontWeight: 'bold'}}> {filterData.keyword}</span>
            </div>
          )}

          <GetPublishedArticles
            query={
              filterData.keyword !== '' ? query : GetPublishedArticles.query
            }
            variables={{
              category: filterData.category || categoryName,
              keyword: filterData.keyword || '',
            }}>
            {({loading, error, data}) => {
              if (loading || error) {
                return <SkeletonLoaderList length={4} />;
              }

              const resdata =
                data.GetPublishedArticlesByCategory ||
                data.FindPublishedArticles;

              return (
                <>
                  <HomeMeta />
                  <ArticleList data={resdata} />
                </>
              );
            }}
          </GetPublishedArticles>
        </Base>
      )}
    </FilterContext.Consumer>
  );
}

export default withRouter(Home);
