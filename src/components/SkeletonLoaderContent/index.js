// @flow

import React from 'react';
import {Card, Skeleton, Divider} from 'antd';

export default function SkeletonLoaderContent() {
  return (
    <>
      <Card style={{marginBottom: 16}}>
        <Skeleton title paragraph={{rows: 0}} loading={true} active />

        <Skeleton avatar paragraph={{rows: 0}} loading={true} active />

        <Divider />

        <Skeleton paragraph={{rows: 9}} loading={true} active />

        <Divider />

        <Skeleton title paragraph={{rows: 0}} loading={true} active />
      </Card>
    </>
  );
}
