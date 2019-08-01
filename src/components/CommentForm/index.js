// @flow

import React from 'react';
import {Form, Input, Button} from 'antd';

const {TextArea} = Input;

function CommentForm(props: any) {
  const {onChange, onSubmit, submitting, value} = props;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        marginTop: 16,
      }}>
      <Form.Item style={{width: '100%'}}>
        <TextArea
          rows={4}
          onChange={onChange}
          value={value}
          style={{padding: 16, width: '100%'}}
        />
      </Form.Item>

      <Form.Item>
        <Button
          htmlType="submit"
          loading={submitting}
          onClick={onSubmit}
          type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </div>
  );
}

export default CommentForm;
