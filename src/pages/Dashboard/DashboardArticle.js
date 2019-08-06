// @flow

import React from 'react';
import {Table, Tag, Card, Button, Col} from 'antd';
import {Link} from 'react-router-dom';

import DashboardArticleToolbox from './DashboardArticleToolbox';

import QueryDashboardArticles from '../../graphql/Article/QueryDashboardArticles';

import timeAgo from '../../utils/timeAgo';

function DashboardArticle() {
  const [status, setStatus] = React.useState('ALL');
  const [keyword, setKeyword] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [saved, setSaved] = React.useState({});

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
      // eslint-disable-next-line react/display-name
      render: slug => (
        <Link to={`/story/${slug}`} style={{textDecoration: 'underline'}}>
          {slug}
        </Link>
      ),
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
          alt={'story-thumbnail'}
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
            <Tag key={index} style={{marginBottom: 8}}>
              {category.toUpperCase()}
            </Tag>
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
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 150,
      render: createdAt => timeAgo(createdAt),
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      width: 150,
      render: updatedAt => timeAgo(updatedAt),
    },
    {
      title: 'Action',
      key: 'action',
      // eslint-disable-next-line react/display-name
      render: text => (
        <Link to={{pathname: `/story/edit/${text.slug}`, state: {saved}}}>
          <Button type={'primary'}>Edit</Button>
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

  React.useEffect(() => {}, [saved]);

  return (
    <Col span={17} offset={1}>
      <DashboardArticleToolbox
        keyword={keyword}
        category={category}
        status={status}
        handleFilterSubmit={handleFilterSubmit}
      />

      <Card style={{marginTop: 24}} bodyStyle={{padding: '0'}}>
        <QueryDashboardArticles
          query={QueryDashboardArticles.query}
          variables={{category, status, keyword}}>
          {({loading, error, data}) => {
            if (loading || error) {
              return null;
            }

            setSaved(data.DashboardArticles);

            return (
              <Table
                columns={columns}
                dataSource={data.DashboardArticles}
                pagination={false}
                rowKey="slug"
              />
            );
          }}
        </QueryDashboardArticles>
      </Card>
    </Col>
  );
}

export default DashboardArticle;
