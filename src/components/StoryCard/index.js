// @flow

import React from 'react';
import {Avatar, Typography} from 'antd';

import timeAgo from '../../utils/timeAgo';

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
  thumbnail,
  totalComments,
}: any) {
  return (
    <StoryCardContainer>
      <StoryCardHeader>
        <HeadingText
          type={'h4'}
          style={{display: 'inline-block', marginRight: 8}}>
          {user.fullname}
        </HeadingText>

        <Text>{timeAgo(createdAt)}</Text>
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
          // $FlowFixMe
          src={`${process.env.REACT_APP_GQL_URL}${thumbnail}`}
          style={{minWidth: 100, objectFit: 'cover'}}
          icon={'file-image'}
        />
      </StoryCardInnerBody>
    </StoryCardContainer>
  );
}
