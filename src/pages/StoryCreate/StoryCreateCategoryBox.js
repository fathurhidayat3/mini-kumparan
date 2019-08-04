// @flow

import * as React from 'react';
import {Col, Card, Divider} from 'antd';

import QueryDashboardCategories from '../../graphql/Category/QueryDashboardCategories';

import HeadingText from '../../components/HeadingText';
import CategoryForm from '../../components/CategoryForm';

type Props = {
  checkedCategories: Array<Object>,
  setCheckedCategories: Function,
  userdata: Object,
};

export default function StoryCreateCategoryBox(props: Props) {
  const {checkedCategories, setCheckedCategories, userdata} = props;

  const [defaultCategories] = React.useState([
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
            // const categories = data && data.GetUserCategoriesByUsername;
            let categories = (data && data.GetUserCategoriesByUsername) || [];
            categories = [...categories, ...defaultCategories];

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
