// @flow

import React from 'react';

import {Editor, EditorState, convertFromRaw} from 'draft-js';

type Props = {
  body: Object,
};

export default function CustomEditor(props: Props) {
  const {body} = props;

  const [editorState, setEditorState] = React.useState(
    EditorState.createWithContent(convertFromRaw(JSON.parse(body)))
  );

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      readOnly={true}
    />
  );
}
