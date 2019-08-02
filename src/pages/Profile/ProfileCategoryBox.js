// @flow

import React from 'react';
import {Col, Tag} from 'antd';
import styled from 'styled-components';

import HeadingText from '../../components/HeadingText';

const tagsData = [
  'ENTERTAINMENT',
  'TEKNOLOGI',
  'OLAHRAGA',
  'OTOMOTIF',
  'KUMPARANMOM',
];

export default function ProfileCategoryBox() {
  return (
    <ProfileCategoryBoxContainer span={5}>
      <HeadingText type={'h4'}>Categories</HeadingText>

      <CategoryContainer>
        {tagsData.map(tagItem => (
          <CustomTag key={tagItem}>{tagItem}</CustomTag>
        ))}
      </CategoryContainer>
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
