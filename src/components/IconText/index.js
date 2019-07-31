// @flow
import React from 'react';
import {Icon} from 'antd';

import {IconTextContainer} from './style';

export default function IconText({type, text, ...otherProps}: any) {
  return (
    <IconTextContainer {...otherProps}>
      <Icon type={type} style={{marginRight: 8}} />
      {text}
    </IconTextContainer>
  );
}
