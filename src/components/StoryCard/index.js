// @flow

import React from 'react';
import {Avatar} from 'antd';

import {StoryCardContainer, StoryCardInnerBody} from './style';

export default function StoryCard({title, createdAt, author}: any) {
  return (
    <StoryCardContainer style={{height: 150}}>
      <StoryCardInnerBody>
        <Avatar shape="square" size={100} icon="user" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingLeft: 16,
          }}>
          <div>
            <h3 style={{margin: 0}}>{title}</h3>
            <h5>{createdAt}</h5>
          </div>

          <div style={{display: 'flex', alignItems: 'center'}}>
            <Avatar size={20} icon="user" />
            <span style={{marginLeft: 8}}>{author}</span>
          </div>
        </div>
      </StoryCardInnerBody>
    </StoryCardContainer>
  );
}
