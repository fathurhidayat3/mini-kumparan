// @flow

import React from 'react';
import {Typography} from 'antd';

import {StoryDetailBodyContainer} from './style';

const {Text} = Typography;

type Props = {
  dataDetail: Object,
};

function StoryDetailBody(props: Props) {
  const {dataDetail} = props;

  return (
    <StoryDetailBodyContainer>
      <Text>{dataDetail.body}</Text>
    </StoryDetailBodyContainer>
  );
}

export default StoryDetailBody;
