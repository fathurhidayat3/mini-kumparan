// @flow

import React from 'react';
import {Form, Input, Button} from 'antd';

import MutationCreateComment from '../../graphql/Comment/MutationCreateComment';
import QueryGetPublishedArticleBySlug from '../../graphql/Article/QueryGetPublishedArticleBySlug';

const {TextArea} = Input;

function CommentForm(props: any) {
  const {onChange, value, userData, dataDetail, slug} = props;

  return (
    <MutationCreateComment
      mutation={MutationCreateComment.mutation}
      variables={{
        articleID: dataDetail.id,
        fullname: userData.fullname,
        username: userData.username,
        message: value,
      }}
      // onCompleted={() => setEditorState('')}
      refetchQueries={[
        {
          query: QueryGetPublishedArticleBySlug.query,
          variables: {slug},
        },
      ]}>
      {CreateComment => (
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
              // loading={submitting}
              onClick={CreateComment}
              type="primary">
              Add Comment
            </Button>
          </Form.Item>
        </div>
      )}
    </MutationCreateComment>
  );
}

export default CommentForm;
