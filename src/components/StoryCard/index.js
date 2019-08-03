// @flow

import React from 'react';
import {Avatar, Typography} from 'antd';

import getTimeDifference from '../../utils/getTimeDifference';

import {
  StoryCardContainer,
  StoryCardHeader,
  StoryCardInnerBody,
  StoryCardContentWrapper,
  StoryCardTopWrapper,
  StoryCardBottomWrapper,
} from './style';

import HeadingText from '../HeadingText';
import IconText from '../IconText';

const {Text} = Typography;

export default function StoryCard({
  title,
  createdAt,
  user,
  avatar,
  thumbnail,
  totalComments,
}: any) {
  return (
    <StoryCardContainer>
      <StoryCardHeader>
        <Avatar size={28} src={avatar} icon={'user'} />

        <HeadingText
          type={'h4'}
          style={{display: 'inline-block', margin: '0 6px'}}>
          {user.fullName}
        </HeadingText>

        <Text>{getTimeDifference(new Date(), new Date(createdAt))}</Text>
      </StoryCardHeader>

      <StoryCardInnerBody>
        <StoryCardContentWrapper style={{}}>
          <StoryCardTopWrapper>
            <HeadingText type={'h3'}>{title}</HeadingText>
          </StoryCardTopWrapper>

          <StoryCardBottomWrapper>
            <IconText type="wechat" text={totalComments} />
          </StoryCardBottomWrapper>
        </StoryCardContentWrapper>

        <Avatar
          shape="square"
          size={100}
          src={thumbnail}
          style={{minWidth: 100, objectFit: 'cover'}}
          icon={'file-image'}
        />
      </StoryCardInnerBody>
    </StoryCardContainer>
  );
}
