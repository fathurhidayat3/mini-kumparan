// @flow
import React from 'react';
import {Icon} from 'antd';

import {IconTextContainer} from './style';

type Props = {type: string, text: string};

export default function IconText(props: Props) {
  const {type, text} = props;

  return (
    <IconTextContainer>
      <Icon type={type} style={{marginRight: 8}} />
      {text}
    </IconTextContainer>
  );
}
