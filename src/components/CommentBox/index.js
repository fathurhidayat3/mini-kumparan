// @flow

import React from 'react';
import {Avatar, Comment} from 'antd';

function CommentBox(props: any) {
  const {avatar, value, handleChange, handleSubmit} = props;

  return (
    <Comment
      avatar={<Avatar src={avatar} alt="Guest" icon={'user'} />}
      content={
        <CommentBox
          onChange={handleChange}
          onSubmit={handleSubmit}
          value={value}
        />
      }
    />
  );
}

export default CommentBox;
