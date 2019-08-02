// @flow

import React from 'react';

export default function useFocus() {
  const htmlElRef = React.useRef<any>(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
}
