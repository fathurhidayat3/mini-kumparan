// @flow

import React from 'react';
import {Tag} from 'antd';
import styled from 'styled-components';

import CategoryContext from '../../contexts/CategoryContext';

import QueryGetUserCategoriesByUsername from '../../graphql/User/QueryGetUserCategoriesByUsername';

import HeadingText from '../../components/HeadingText';

export default function ProfileCategoryBox(props: any) {
  const {userdata} = props;
  const {setCategory} = React.useContext(CategoryContext);

  const defaultCategories = ['News', 'Politik', 'Entertainment', 'Otomotif'];
  return (
    <>
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
                  onClick={() => setCategory(categoryDefaultItem.toUpperCase())}
                  key={categoryDefaultItem}>
                  {categoryDefaultItem.toUpperCase()}
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
    </>
  );
}

const CategoryContainer = styled.div`
  margin-top: 24px;
`;

const CustomTag = styled(Tag)`
  margin-bottom: 16px;
`;
