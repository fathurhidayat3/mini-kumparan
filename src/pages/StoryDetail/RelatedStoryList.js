// @flow

import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {List, Card, Skeleton} from 'antd';

import GetPublishedArticles from '../../graphql/Articles/QueryGetPublishedArticles';

import StoryCard from '../../components/StoryCard';

function RelatedStoryList(props: any) {
  const {filterData} = props;

  return (
    <RelatedStoryListContainer>
      <GetPublishedArticles
        query={GetPublishedArticles.query}
        variables={{category: filterData.category}}>
        {({loading, error, data}) => {
          // if (loading) return 'Loading...';
          // if (error) return `Error! ${error.message}`;

          if (loading || error) {
            return [0, 1, 2].map((item, index) => (
              <Card style={{marginBottom: 16}} key={index}>
                <Skeleton avatar paragraph={{rows: 2}} loading={true} active />
              </Card>
            ));
          }

          return (
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
          );
        }}
      </GetPublishedArticles>
    </RelatedStoryListContainer>
  );
}

const RelatedStoryListContainer = styled.div`
  margin-top: 16px;
`;

export default RelatedStoryList;
