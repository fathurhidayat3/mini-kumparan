// @flow

import * as React from 'react';
import styled from 'styled-components';
import {Button, Select} from 'antd';

const {Option} = Select;

type Props = {
  articleStatus: string,
  setArticleStatus: Function,
  editorBottomOnSubmit: Function,
};

export default function StoryCreateBottomToolbox(props: Props) {
  const {articleStatus, setArticleStatus, editorBottomOnSubmit} = props;

  return (
    <EditorBottomToolbox>
      <Select
        style={{marginRight: 8, width: 150}}
        value={articleStatus}
        onChange={setArticleStatus}>
        <Option value="DRAFT">DRAFT</Option>
        <Option value="PUBLISHED">PUBLISH</Option>
      </Select>

      <Button type={'primary'} onClick={editorBottomOnSubmit}>
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
