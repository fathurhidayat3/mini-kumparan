// @flow

import * as React from 'react';
import {Button, Divider} from 'antd';
import {withRouter} from 'react-router-dom';

import HomeMeta from './HomeMeta';

import QueryGetPublishedArticles from '../../graphql/Article/QueryGetPublishedArticles';
import QueryFindPublishedArticles from '../../graphql/Article/QueryFindPublishedArticles';

import FilterContext from '../../contexts/FilterContext';

import Base from '../../components/Base';
import ArticleList from './ArticleList';
import SkeletonLoaderList from '../../components/SkeletonLoaderList';

type Props = {
  history: Object,
};

function Home(props: Props) {
  const pathname = props.history.location.pathname;
  const categoryName =
    (pathname.split('/')[2] && pathname.split('/')[2].toUpperCase()) || '';

  const {filterData} = React.useContext(FilterContext);

  const [isNextAvailable, setIsNextAvailable] = React.useState(true);

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
            const resdata =
              data && data.FindPublishedArticles
                ? data.FindPublishedArticles
                : [];

            return loading && resdata ? (
              <SkeletonLoaderList length={4} />
            ) : (
              <>
                <>
                  <HomeMeta />
                  <ArticleList data={resdata} />

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      margin: '16px 0',
                    }}>
                    {/* <Button>Load more...</Button> */}
                  </div>
                </>
              </>
            );
          }}
        </QueryFindPublishedArticles>
      ) : (
        <QueryGetPublishedArticles
          query={QueryGetPublishedArticles.query}
          variables={{
            category: filterData.category || categoryName,
            limit: 5,
            offset: 0,
          }}>
          {({loading, error, data, fetchMore}) => {
            const resdata =
              data && data.GetPublishedArticlesByCategory
                ? data.GetPublishedArticlesByCategory
                : [];

            return loading && resdata ? (
              <SkeletonLoaderList length={4} />
            ) : (
              <>
                <HomeMeta />
                <ArticleList data={resdata} />

                <Divider />

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '16px 0',
                  }}>
                  {isNextAvailable ? (
                    <Button
                      onClick={() => {
                        fetchMore({
                          variables: {
                            offset: resdata.length,
                          },
                          updateQuery: (prev, {fetchMoreResult}) => {
                            if (
                              fetchMoreResult &&
                              fetchMoreResult.GetPublishedArticlesByCategory &&
                              fetchMoreResult.GetPublishedArticlesByCategory
                                .length < 5
                            ) {
                              setIsNextAvailable(false);
                              return prev;
                            }

                            const prevPublishedArticle =
                              prev && prev.GetPublishedArticlesByCategory
                                ? prev.GetPublishedArticlesByCategory
                                : [];

                            const morePublishedArticle =
                              fetchMoreResult &&
                              fetchMoreResult.GetPublishedArticlesByCategory
                                ? fetchMoreResult.GetPublishedArticlesByCategory
                                : [];

                            return {
                              GetPublishedArticlesByCategory: [
                                ...prevPublishedArticle,
                                ...morePublishedArticle,
                              ],
                            };
                          },
                        });
                      }}>
                      Load more...
                    </Button>
                  ) : (
                    <span>No more items</span>
                  )}
                </div>
              </>
            );
          }}
        </QueryGetPublishedArticles>
      )}
    </Base>
  );
}

export default withRouter(Home);
