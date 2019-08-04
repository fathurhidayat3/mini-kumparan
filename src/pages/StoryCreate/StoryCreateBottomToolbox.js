// @flow

import * as React from 'react';
import styled from 'styled-components';
import {Button, Select} from 'antd';

const {Option} = Select;

type Props = {
  articleStatus: string,
  setArticleStatus: Function,
  editorBottomOnSubmit: Function,
  storyStates: {
    title: string,
    editorState: Object,
  },
};

export default function StoryCreateBottomToolbox(props: Props) {
  const {
    articleStatus,
    setArticleStatus,
    editorBottomOnSubmit,
    storyStates,
  } = props;

  function validateStory() {
    const {title, editorState} = storyStates;
    const editorPlainText = editorState.getCurrentContent().getPlainText('');
    const editorContentlength = editorPlainText.length;

    if (articleStatus === 'PUBLISHED') {
      if (title.length <= 10 || editorContentlength <= 250) {
        return true;
      }
    }

    return false;
  }

  return (
    <EditorBottomToolbox>
      <Select
        style={{marginRight: 8, width: 150}}
        value={articleStatus}
        onChange={setArticleStatus}>
        <Option value="DRAFT">DRAFT</Option>
        <Option value="PUBLISHED">PUBLISH</Option>
      </Select>

      <Button
        type={'primary'}
        onClick={editorBottomOnSubmit}
        disabled={validateStory()}>
        Save
      </Button>
    </EditorBottomToolbox>
  );
}

const EditorBottomToolbox = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 32px;
`;
