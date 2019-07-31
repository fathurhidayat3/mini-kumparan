// @flow

import * as React from 'react';

import {List, Row, Col} from 'antd';
import dayjs from 'dayjs';
import {Link} from 'react-router-dom';

import {Layout, Content, Footer} from '../../components/Base';
import Navbar from '../../components/Navbar/';
import StoryCard from '../../components/StoryCard';

import {Query} from 'react-apollo';

import gql from 'graphql-tag';

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
  });
}

const GET_PUBLISHED_ARTICLES = gql`
  query {
    GetPublishedArticles {
      id
      title
      createdAt
      userId
    }
  }
`;

function Home() {
  return (
    <Layout>
      <Navbar />

      <Content style={{margin: '88px 0 36px 0'}}>
        <Row type="flex" justify="center">
          <Query query={GET_PUBLISHED_ARTICLES}>
            {({loading, error, data}) => {
              // if (loading) return 'Loading...';
              // if (error) return `Error! ${error.message}`;

              return (
                <Col span={9}>
                  <List
                    itemLayout="vertical"
                    size="large"
                    dataSource={listData}
                    // data.GetPublishedArticles
                    renderItem={item => (
                      <Link to={`/story/${item.id}`}>
                        <StoryCard
                          createdAt={`Published at : ${dayjs(
                            item.createdAt
                          ).format('DD/MM/YYYY HH:mm')}`}
                          {...item}
                        />
                      </Link>
                    )}
                  />
                </Col>
              );
            }}
          </Query>
        </Row>
      </Content>
      <Footer>by siapa aja</Footer>
    </Layout>
  );
}

export default Home;
