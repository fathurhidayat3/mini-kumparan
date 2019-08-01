// @flow

import React from 'react';
import {Typography} from 'antd';

import {StoryDetailBodyContainer} from './style';

const {Text} = Typography;

function StoryDetailBody(props: any) {
  const {dataDetail} = props;

  return (
    <StoryDetailBodyContainer>
      <Text>{dataDetail.body}</Text>
    </StoryDetailBodyContainer>
  );
}

export default StoryDetailBody;
