// @flow

import React from 'react';
import {Card} from 'antd';

import {
  StoryDetailHeaderUserContainer,
  StoryDetailHeaderContainer,
  StoryDetailHeaderInfoContainer,
} from '../../pages/StoryDetail/style';

import HeadingText from '../../components/HeadingText';

type Props = {
  fullname: string,
  message: string,
};

function CommentItem(props: Props) {
  const {fullname, message} = props;

  return (
    <Card style={{marginBottom: 16}}>
      <StoryDetailHeaderContainer>
        <StoryDetailHeaderInfoContainer>
          <StoryDetailHeaderUserContainer>
            <HeadingText type={'h4'}>{fullname}</HeadingText>
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
