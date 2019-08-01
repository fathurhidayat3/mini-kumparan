// @flow

import React from 'react';
import {Avatar, Typography} from 'antd';
import dayjs from 'dayjs';

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
  like,
  totalComments,
}: any) {
  return (
    <StoryCardContainer>
      <StoryCardHeader>
        <Avatar size={28} src={avatar} icon={'user'} />

        <HeadingText
          type={'h4'}
          style={{display: 'inline-block', margin: '0 8px'}}>
          {user.fullName}
        </HeadingText>

        <Text>{`Published at : ${dayjs(createdAt).format(
          'DD/MM/YYYY HH:mm'
        )}`}</Text>
      </StoryCardHeader>

      <StoryCardInnerBody>
        <StoryCardContentWrapper style={{}}>
          <StoryCardTopWrapper>
            <HeadingText type={'h3'}>{title}</HeadingText>
          </StoryCardTopWrapper>

          <StoryCardBottomWrapper>
            {/* {like &&  */}
            <IconText type="like-o" text={like || 0} />
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
