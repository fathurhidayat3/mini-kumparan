// @flow

import React from 'react';
import {Col, Tag} from 'antd';
import styled from 'styled-components';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

import HeadingText from '../../components/HeadingText';

const tagsData = [
  'ENTERTAINMENT',
  'TEKNOLOGI',
  'OLAHRAGA',
  'OTOMOTIF',
  'KUMPARANMOM',
];

const query = gql`
  query QueryGetUserCategoriesByUsername($username: String!) {
    GetUserCategoriesByUsername(username: $username) {
      username
      categoryname
      categoryslug
    }
  }
`;

export default function ProfileCategoryBox(props: any) {
  const {userdata} = props;

  return (
    <ProfileCategoryBoxContainer span={5}>
      <HeadingText type={'h4'}>Categories</HeadingText>

      <Query query={query} variables={{username: userdata.username}}>
        {({loading, error, data}) => {
          if (loading || error) {
            return '';
          }

          return (
            <CategoryContainer>
              {data.GetUserCategoriesByUsername.map(categoryItem => (
                <CustomTag key={categoryItem.categoryslug}>
                  {categoryItem.categoryname}
                </CustomTag>
              ))}
            </CategoryContainer>
          );
        }}
      </Query>
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
