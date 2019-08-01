// @flow

import React from 'react';
import dayjs from 'dayjs';
import {Card, Avatar, Typography} from 'antd';

import {
  StoryDetailHeaderUserContainer,
  StoryDetailHeaderContainer,
  StoryDetailHeaderInfoContainer,
} from '../../pages/StoryDetail/style';

import HeadingText from '../../components/HeadingText';

const {Text} = Typography;

function CommentItem(props: any) {
  const {fullname, message} = props;
  return (
    <Card style={{margin: '16px 0'}}>
      <StoryDetailHeaderContainer>
        <StoryDetailHeaderInfoContainer>
          <Avatar size={32} icon={'user'} />

          <StoryDetailHeaderUserContainer>
            <HeadingText type={'h4'}>{fullname}</HeadingText>

            <Text>{`Published at : ${dayjs().format(
              'DD/MM/YYYY HH:mm'
            )}`}</Text>
          </StoryDetailHeaderUserContainer>
        </StoryDetailHeaderInfoContainer>

        <div style={{marginTop: 16}}>
          <p>{message}</p>
        </div>
      </StoryDetailHeaderContainer>
    </Card>
  );
}

export default CommentItem;
