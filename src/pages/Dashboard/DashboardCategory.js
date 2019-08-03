// @flow

import React from 'react';
import {Table, Tag, Card, Button} from 'antd';
import {Link} from 'react-router-dom';

import DashboardToolbox from './DashboardToolbox';

import QueryDashboardArticles from '../../graphql/Article/QueryDashboardArticles';

function DashboardCategory() {
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
      width: 300,
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
    <div>
      <DashboardToolbox
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
              return 'yeye';
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
    </div>
  );
}

export default DashboardCategory;
