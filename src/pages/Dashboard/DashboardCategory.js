// @flow

import React from 'react';
import {Table, Card, Button} from 'antd';

import DashboardCategoryToolbox from './DashboardCategoryToolbox';

import QueryDashboardCategories from '../../graphql/Category/QueryDashboardCategories';

function DashboardCategory() {
  const [keyword, setKeyword] = React.useState('');

  const columns = [
    {
      title: 'Name',
      dataIndex: 'categoryname',
      key: 'categoryname',
      width: 200,
    },
    {
      title: 'Slug',
      dataIndex: 'categoryslug',
      key: 'categoryslug',
      width: 300,
    },
    {
      title: 'Action',
      key: 'action',
      // eslint-disable-next-line react/display-name
      render: text => <Button type={'primary'}>EDIT</Button>,
      width: 120,
    },
  ];

  const handleFilterSubmit = tempKeyword => {
    setKeyword(tempKeyword);
  };

  return (
    <div>
      <DashboardCategoryToolbox
        keyword={keyword}
        handleFilterSubmit={handleFilterSubmit}
      />

      <Card style={{marginTop: 16}} bodyStyle={{padding: '0'}}>
        <QueryDashboardCategories
          query={QueryDashboardCategories.query}
          variables={{username: 'jri'}}>
          {({loading, error, data}) => {
            if (loading || error) {
              return null;
            }

            return (
              <Table
                columns={columns}
                dataSource={data.GetUserCategoriesByUsername}
                pagination={false}
              />
            );
          }}
        </QueryDashboardCategories>
      </Card>
    </div>
  );
}

export default DashboardCategory;
