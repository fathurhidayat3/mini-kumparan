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

  return (
    <Col span={16}>
      <Card style={{minHeight: 236}}>
        <HeadingText type={'h4'}>Category</HeadingText>

        <Divider />

        <QueryDashboardCategories
          query={QueryDashboardCategories.query}
          variables={{
            userId: userdata && userdata.userId,
            limit: 5,
            offset: 0,
          }}>
          {({data}) => {
            // const categories = data && data.GetUserCategoriesByUsername;
            const categories = (data && data.GetUserCategoriesByUsername) || [];
            // categories = [...categories, ...defaultCategories];

            // setDefaultCategories([...defaultCategories, ...categories]);

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
