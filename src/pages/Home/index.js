// @flow

import * as React from 'react';

import {withRouter} from 'react-router-dom';

import HomeMeta from './HomeMeta';

import QueryGetPublishedArticles from '../../graphql/Article/QueryGetPublishedArticles';
import QueryFindPublishedArticles from '../../graphql/Article/QueryFindPublishedArticles';

import FilterContext from '../../contexts/FilterContext';

import Base from '../../components/Base';
import ArticleList from './ArticleList';
import SkeletonLoaderList from '../../components/SkeletonLoaderList';

import gql from 'graphql-tag';

type Props = {
  history: Object,
};

function Home(props: Props) {
  const pathname = props.history.location.pathname;
  const categoryName =
    (pathname.split('/')[2] && pathname.split('/')[2].toUpperCase()) || '';

  const {filterData} = React.useContext(FilterContext);

  return (
    <Base>
      {filterData.keyword && (
        <div style={{marginBottom: 16}}>
          Hasil pencarian dari kunci
          <span style={{fontWeight: 'bold'}}> {filterData.keyword}</span>
        </div>
      )}

      {filterData.keyword !== '' ? (
        <QueryFindPublishedArticles
          query={QueryFindPublishedArticles.query}
          variables={{
            keyword: filterData.keyword || '',
          }}>
          {({loading, error, data}) => {
            if (loading || error) {
              return <SkeletonLoaderList length={4} />;
            }

            const resdata = data && data.FindPublishedArticles;

            return (
              <>
                <HomeMeta />
                <ArticleList data={resdata} />
              </>
            );
          }}
        </QueryFindPublishedArticles>
      ) : (
        <QueryGetPublishedArticles
          query={QueryGetPublishedArticles.query}
          variables={{
            category: filterData.category || categoryName,
          }}>
          {({loading, error, data}) => {
            if (loading || error) {
              return <SkeletonLoaderList length={4} />;
            }

            const resdata = data && data.GetPublishedArticlesByCategory;

            return (
              <>
                <HomeMeta />
                <ArticleList data={resdata} />
              </>
            );
          }}
        </QueryGetPublishedArticles>
      )}
    </Base>
  );
}

export default withRouter(Home);
