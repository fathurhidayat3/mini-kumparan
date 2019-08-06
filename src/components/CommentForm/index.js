// @flow

import React from 'react';
import {Form, Input, Button} from 'antd';

import MutationCreateComment from '../../graphql/Comment/MutationCreateComment';
import QueryGetPublishedArticleBySlug from '../../graphql/Article/QueryGetPublishedArticleBySlug';

const {TextArea} = Input;

type Props = {
  value: Object,
  setValue: Function,
  userData: Object,
  dataDetail: Object,
  slug: string,
  isDisabled: boolean,
  onChange: Function,
};

function CommentForm(props: Props) {
  const {
    value,
    setValue,
    userData,
    dataDetail,
    slug,
    isDisabled,
    onChange,
  } = props;

  return (
    <MutationCreateComment
      mutation={MutationCreateComment.mutation}
      variables={{
        articleID: dataDetail.id,
        fullname: userData && userData.fullname,
        username: userData && userData.username,
        message: value,
      }}
      onCompleted={() => setValue('')}
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
              disabled={isDisabled}
            />
          </Form.Item>

          <div>
            <Button
              htmlType="submit"
              // loading={submitting}
              onClick={CreateComment}
              type="primary"
              disabled={isDisabled}>
              Add Comment
            </Button>
          </div>
        </div>
      )}
    </MutationCreateComment>
  );
}

export default CommentForm;
