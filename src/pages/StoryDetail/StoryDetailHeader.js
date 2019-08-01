// @flow

import React from 'react';
import dayjs from 'dayjs';
import {Typography, Avatar} from 'antd';

import {
  StoryDetailHeaderContainer,
  StoryDetailHeaderInfoContainer,
  StoryDetailHeaderUserContainer,
} from './style';

import HeadingText from '../../components/HeadingText';

const {Text} = Typography;

function StoryDetailHeader(props: any) {
  const {dataDetail} = props;

  return (
    <StoryDetailHeaderContainer>
      <HeadingText type={'h1'}>{dataDetail.title}</HeadingText>

      <StoryDetailHeaderInfoContainer>
        <Avatar size={32} icon={'user'} />

        <StoryDetailHeaderUserContainer>
          <HeadingText type={'h4'}>{dataDetail.user.fullname}</HeadingText>

          <Text>{`Published at : ${dayjs(dataDetail.createdAt).format(
            'DD/MM/YYYY HH:mm'
          )}`}</Text>
        </StoryDetailHeaderUserContainer>
      </StoryDetailHeaderInfoContainer>
    </StoryDetailHeaderContainer>
  );
}

export default StoryDetailHeader;
