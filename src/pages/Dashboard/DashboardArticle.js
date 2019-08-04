// @flow

import React from 'react';
import {Table, Tag, Card, Button, Col} from 'antd';
import {Link} from 'react-router-dom';

import DashboardArticleToolbox from './DashboardArticleToolbox';

import QueryDashboardArticles from '../../graphql/Article/QueryDashboardArticles';

function DashboardArticle() {
  const [status, setStatus] = React.useState('ALL');
  const [keyword, setKeyword] = React.useState('');
  const [category, setCategory] = React.useState('');

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: 400,
    },
    {
      title: 'Slug',
      dataIndex: 'slug',
      key: 'slug',
      width: 300,
    },
    {
      title: 'Thumbnail',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
      width: 100,
      // eslint-disable-next-line react/display-name
      render: thumbnail => (
        <img
          // $FlowFixMe
          src={`${process.env.REACT_APP_GQL_URL}${thumbnail}`}
          style={{height: 50, width: 50}}
          alt={'thumbnail-image'}
        />
      ),
    },
    {
      title: 'Categories',
      key: 'categories',
      dataIndex: 'categories',
      // eslint-disable-next-line react/display-name
      render: categories => (
        <span>
          {categories.map((category, index) => (
            <Tag key={index}>{category.toUpperCase()}</Tag>
          ))}
        </span>
      ),
      width: 250,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 150,
    },
    {
      title: 'Action',
      key: 'action',
      // eslint-disable-next-line react/display-name
      render: text => (
        <Link to={`/story/${text.slug}`}>
          <Button type={'primary'}>Preview</Button>
        </Link>
      ),
      width: 120,
    },
  ];

  const handleFilterSubmit = (tempStatus, tempKeyword, tempCategory) => {
    setStatus(tempStatus);
    setKeyword(tempKeyword);
    setCategory(tempCategory);
  };

  return (
    <Col span={17} offset={1}>
      <DashboardArticleToolbox
        keyword={keyword}
        category={category}
        status={status}
        handleFilterSubmit={handleFilterSubmit}
      />

      <Card style={{marginTop: 16}} bodyStyle={{padding: '0'}}>
        <QueryDashboardArticles
          query={QueryDashboardArticles.query}
          variables={{category, status, keyword}}>
          {({loading, error, data}) => {
            if (loading || error) {
              return null;
            }

            return (
              <Table
                columns={columns}
                dataSource={data.DashboardArticles}
                pagination={false}
              />
            );
          }}
        </QueryDashboardArticles>
      </Card>
    </Col>
  );
}

export default DashboardArticle;
