// @flow

import React from 'react';
import {
  HeadingTextH1,
  HeadingTextH2,
  HeadingTextH3,
  HeadingTextH4,
  HeadingTextH5,
} from './style';

const checkType = ({type, ...otherProps}: any) => {
  switch (type) {
    case 'h1':
      return <HeadingTextH1 {...otherProps} />;
    case 'h2':
      return <HeadingTextH2 {...otherProps} />;
    case 'h3':
      return <HeadingTextH3 {...otherProps} />;
    case 'h4':
      return <HeadingTextH4 {...otherProps} />;
    case 'h5':
      return <HeadingTextH5 {...otherProps} />;
    default:
      return <HeadingTextH1 {...otherProps} />;
  }
};

const HeadingText = (props: any) => {
  return <>{checkType(props)}</>;
};

export default HeadingText;
