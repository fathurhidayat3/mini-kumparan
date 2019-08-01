// @flow

import React from 'react';
import {List} from 'antd';

import CommentItem from '../CommentItem';

function CommentList(props: any) {
  const {comments} = props;

  return (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={props => <CommentItem {...props} />}
    />
  );
}

export default CommentList;
