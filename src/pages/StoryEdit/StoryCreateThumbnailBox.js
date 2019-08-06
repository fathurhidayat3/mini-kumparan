// @flow

import * as React from 'react';
import {Col, Card, Divider} from 'antd';

import HeadingText from '../../components/HeadingText';
import Thumbnail from '../../components/Thumbnail';

export default function StoryCreateThumbnailBox(props: any) {
  const {thumbnail, setThumbnail} = props;

  return (
    <Col span={8}>
      <Card style={{minHeight: 236}}>
        <HeadingText type={'h4'}>Attach Thumbnail</HeadingText>

        <Divider />

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
          <Thumbnail thumbnail={thumbnail} setThumbnail={setThumbnail} />
        </div>
      </Card>
    </Col>
  );
}
