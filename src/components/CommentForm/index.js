// @flow

import React from 'react';
import {Form, Input, Button} from 'antd';
import styled from 'styled-components';

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
      onCompleted={() => setValue('')}
      refetchQueries={[
        {
          query: QueryGetPublishedArticleBySlug.query,
          variables: {slug},
        },
      ]}>
      {CreateComment => (
        <CommentFormContainer>
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
              onClick={() =>
                CreateComment({
                  variables: {
                    articleID: dataDetail.id,
                    fullname: userData && userData.fullname,
                    username: userData && userData.username,
                    message: value,
                  },
                  optimisticResponse: {
                    __typename: 'Comment',
                    CreateComment: {
                      __typename: 'Comment',
                      id: 'yey',
                      articleID: dataDetail.id,
                      fullname: userData && userData.fullname,
                      username: userData && userData.username,
                      message: value,
                    },
                  },
                })
              }
              type="primary"
              disabled={isDisabled}>
              Add Comment
            </Button>
          </div>
        </CommentFormContainer>
      )}
    </MutationCreateComment>
  );
}

const CommentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 16px;
`;

export default CommentForm;
