// @flow

import React from 'react';
import dayjs from 'dayjs';
import {Typography, Avatar} from 'antd';

import {withRouter, Link} from 'react-router-dom';

import {
  StoryDetailHeaderContainer,
  StoryDetailHeaderInfoContainer,
  StoryDetailHeaderUserContainer,
} from './style';

import HeadingText from '../../components/HeadingText';
import timeAgo from '../../utils/timeAgo';

const {Text} = Typography;

function StoryDetailHeader(props: any) {
  const {dataDetail} = props;
  const {user} = dataDetail;

  return (
    <StoryDetailHeaderContainer>
      <HeadingText type={'h1'}>{dataDetail.title}</HeadingText>
      <StoryDetailHeaderInfoContainer>
        <Avatar size={32} icon={'user'} />

        <StoryDetailHeaderUserContainer style={{flex: 1}}>
          <Link to={`/profile/${user.username}`}>
            <HeadingText type={'h4'}>{user.fullname}</HeadingText>
          </Link>

          <Text>{timeAgo(dataDetail.createdAt)}</Text>
        </StoryDetailHeaderUserContainer>
      </StoryDetailHeaderInfoContainer>
    </StoryDetailHeaderContainer>
  );
}

export default withRouter(StoryDetailHeader);
