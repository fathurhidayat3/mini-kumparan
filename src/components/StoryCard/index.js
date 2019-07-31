// @flow

import React from 'react';
import {Avatar, Typography} from 'antd';

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
  author,
  avatar,
  thumbnail,
}: any) {
  return (
    <StoryCardContainer>
      <StoryCardHeader>
        <Avatar size={25} src={avatar} />

        <HeadingText
          type={'h4'}
          style={{display: 'inline-block', margin: '0 8px'}}>
          {author}
        </HeadingText>

        <Text>{createdAt}</Text>
      </StoryCardHeader>

      <StoryCardInnerBody>
        <StoryCardContentWrapper style={{}}>
          <StoryCardTopWrapper>
            <HeadingText type={'h3'}>{title}</HeadingText>
          </StoryCardTopWrapper>

          <StoryCardBottomWrapper>
            <IconText type="like-o" text="23" />
            <IconText type="like-o" text="156" />
          </StoryCardBottomWrapper>
        </StoryCardContentWrapper>
        <Avatar
          shape="square"
          size={100}
          src={thumbnail}
          style={{objectFit: 'contain'}}
        />
      </StoryCardInnerBody>
    </StoryCardContainer>
  );
}
