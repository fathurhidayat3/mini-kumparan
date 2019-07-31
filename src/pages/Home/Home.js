// @flow

import * as React from 'react';

import {List} from 'antd';
import {Link} from 'react-router-dom';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

import Base from '../../components/Base';
import StoryCard from '../../components/StoryCard';

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `Story ke ${i + 1} created in North Pole with my Friend`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    thumbnail:
      'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1564395669/kyfxbaax1mihfankpebg.jpg',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    createdAt: '30 July 2019',
    author: 'Joni Hermanto',
    like: 156,
    comment: 23,
  });
}

const GET_PUBLISHED_ARTICLES = gql`
  query {
    GetPublishedArticles {
      id
      title
      slug
      createdAt
      user {
        fullName
      }
    }
  }
`;

function Home() {
  return (
    <Base>
      <Query query={GET_PUBLISHED_ARTICLES}>
        {({loading, error, data}) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <List
              itemLayout="vertical"
              size="large"
              dataSource={data.GetPublishedArticles}
              // data.GetPublishedArticles
              renderItem={item => (
                <Link to={`/story/${item.slug}`}>
                  <StoryCard {...item} />
                </Link>
              )}
            />
          );
        }}
      </Query>
    </Base>
  );
}

export default Home;
