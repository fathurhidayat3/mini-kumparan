// @flow

import React from 'react';
import {Col, Tag} from 'antd';
import styled from 'styled-components';

import QueryGetUserCategoriesByUsername from '../../graphql/User/QueryGetUserCategoriesByUsername';

import HeadingText from '../../components/HeadingText';

export default function ProfileCategoryBox(props: any) {
  const {userdata, setCategory} = props;

  const defaultCategories = ['NEWS', 'POLITIK', 'ENTERTAINMENT', 'OTOMOTIF'];

  return (
    <ProfileCategoryBoxContainer span={5}>
      <HeadingText type={'h4'}>Categories</HeadingText>

      <QueryGetUserCategoriesByUsername
        query={QueryGetUserCategoriesByUsername.query}
        variables={{username: userdata.username}}>
        {({loading, error, data}) => {
          if (loading || error) {
            return '';
          }

          return (
            <CategoryContainer>
              {defaultCategories.map(categoryDefaultItem => (
                <CustomTag
                  onClick={() => setCategory(categoryDefaultItem)}
                  key={categoryDefaultItem}>
                  {categoryDefaultItem}
                </CustomTag>
              ))}

              {data.GetUserCategoriesByUsername.map(categoryItem => (
                <CustomTag
                  onClick={() => setCategory(categoryItem.categoryslug)}
                  key={categoryItem.categoryslug}>
                  {categoryItem.categoryname.toUpperCase()}
                </CustomTag>
              ))}
            </CategoryContainer>
          );
        }}
      </QueryGetUserCategoriesByUsername>
    </ProfileCategoryBoxContainer>
  );
}

const ProfileCategoryBoxContainer = styled(Col)`
  padding: 8px 0;
`;

const CategoryContainer = styled.div`
  margin-top: 24px;
`;

const CustomTag = styled(Tag)`
  margin-bottom: 16px;
`;
