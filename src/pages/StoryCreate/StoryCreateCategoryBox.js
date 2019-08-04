// @flow

import React from 'react';
import {Col, Card, Divider} from 'antd';

import QueryDashboardCategories from '../../graphql/Category/QueryDashboardCategories';

import HeadingText from '../../components/HeadingText';
import CategoryForm from '../../components/CategoryForm';

export default function StoryCreateCategoryBox(props: any) {
  const {checkedCategories, setCheckedCategories, userdata} = props;

  const [defaultCategories, setDefaultCategories] = React.useState([
    {categoryname: 'News', categoryslug: 'NEWS'},
    {categoryname: 'Politik', categoryslug: 'POLITIK'},
    {categoryname: 'Entertainment', categoryslug: 'ENTERTAINMENT'},
    {categoryname: 'Otomotif', categoryslug: 'OTOMOTIF'},
  ]);

  return (
    <Col span={16}>
      <Card style={{minHeight: 236}}>
        <HeadingText type={'h4'}>Category</HeadingText>

        <Divider />

        <QueryDashboardCategories
          query={QueryDashboardCategories.query}
          variables={{
            username: userdata.username,
          }}>
          {({data}) => {
            let categories = data.GetUserCategoriesByUsername || [];
            categories = categories.concat(defaultCategories);

            return (
              <CategoryForm
                checkedCategories={checkedCategories}
                setCheckedCategories={setCheckedCategories}
                categories={categories}
              />
            );
          }}
        </QueryDashboardCategories>
      </Card>
    </Col>
  );
}
