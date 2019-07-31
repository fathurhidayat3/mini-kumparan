// @flow

import * as React from 'react';

import {List} from 'antd';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';

import GetPublishedArticles from '../../graphql/Articles/QueryGetPublishedArticles';

import FilterContext from '../../contexts/FilterContext';

import Base from '../../components/Base';
import StoryCard from '../../components/StoryCard';

function Home() {
  return (
    <FilterContext.Consumer>
      {({filterData}) => {
        return (
          <Base>
            <GetPublishedArticles
              query={GetPublishedArticles.query}
              variables={{category: filterData.category}}>
              {({loading, error, data}) => {
                if (loading) return 'Loading...';
                if (error) return `Error! ${error.message}`;

                return (
                  <>
                    <Helmet>
                      <meta charSet="utf-8" />
                      <meta name="description" content="Mini Kumparan" />

                      <title>Mini Kumparan</title>
                      <link rel="canonical" href={`http://mini-kumparan.com`} />
                    </Helmet>
                    <List
                      itemLayout="vertical"
                      size="large"
                      dataSource={data.GetPublishedArticlesByCategory}
                      renderItem={item => (
                        <Link to={`/story/${item.slug}`}>
                          <StoryCard {...item} />
                        </Link>
                      )}
                    />
                  </>
                );
              }}
            </GetPublishedArticles>
          </Base>
        );
      }}
    </FilterContext.Consumer>
  );
}

export default Home;
