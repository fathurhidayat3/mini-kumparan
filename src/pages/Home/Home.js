// @flow

import * as React from 'react';

import {withRouter} from 'react-router-dom';

import HomeMeta from './HomeMeta';

import GetPublishedArticles from '../../graphql/Articles/QueryGetPublishedArticles';
import FilterContext from '../../contexts/FilterContext';

import Base from '../../components/Base';
import ArticleList from './ArticleList';
import SkeletonLoaderList from '../../components/SkeletonLoaderList';

function Home(props: any) {
  const pathname = props.history.location.pathname;
  const categoryName =
    (pathname.split('/')[2] && pathname.split('/')[2].toUpperCase()) || '';

  return (
    <FilterContext.Consumer>
      {({filterData}) => (
        <Base>
          <GetPublishedArticles
            query={GetPublishedArticles.query}
            variables={{category: filterData.category || categoryName}}>
            {({loading, error, data}) => {
              // if (loading) return 'Loading...';
              // if (error) return `Error! ${error.message}`;

              if (loading || error) {
                return <SkeletonLoaderList length={4} />;
              }

              return (
                <>
                  <HomeMeta />
                  <ArticleList data={data.GetPublishedArticlesByCategory} />
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
