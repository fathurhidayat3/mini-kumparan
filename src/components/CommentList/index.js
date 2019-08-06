// @flow

import React from 'react';
import {List} from 'antd';

import CommentItem from '../CommentItem';

type Props = {
  comments: Array<Object>,
};

function CommentList(props: Props) {
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
