// @flow

import React from 'react';
import {Table, Card, Col} from 'antd';

import AuthContext from '../../contexts/AuthContext';

import DashboardCategoryToolbox from './DashboardCategoryToolbox';

import QueryDashboardCategories from '../../graphql/Category/QueryDashboardCategories';

function DashboardCategory() {
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
  ];

  return (
    <AuthContext.Consumer>
      {userdata => (
        <Col span={10} offset={1}>
          <DashboardCategoryToolbox />

          <Card style={{marginTop: 16}} bodyStyle={{padding: '0'}}>
            <QueryDashboardCategories
              query={QueryDashboardCategories.query}
              variables={{username: userdata.userdata.username}}>
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
        </Col>
      )}
    </AuthContext.Consumer>
  );
}

export default DashboardCategory;
