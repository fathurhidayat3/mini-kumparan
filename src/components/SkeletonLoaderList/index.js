// @flow

import React from 'react';
import {Card, Skeleton} from 'antd';

type Props = {
  length: number,
};

export default function SkeletonLoaderList(props: Props) {
  const {length} = props;

  // $FlowFixMe
  return Array.from(Array(length).keys()).map(item => (
    <Card style={{marginBottom: 16}} key={item}>
      <Skeleton avatar paragraph={{rows: 2}} loading={true} active />
    </Card>
  ));
}
