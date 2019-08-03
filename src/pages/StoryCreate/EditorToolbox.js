// @flow

import React from 'react';
import {Icon} from 'antd';

import handleInlineStyle from '../../utils/handleInlineStyle';

export default function EditorToolbox(props: any) {
  const {editorState, setEditorState} = props;

  return (
    <div>
      <button
        onClick={e => handleInlineStyle(e, 'BOLD', editorState, setEditorState)}
        style={{
          padding: 8,
          border: 'none',
          outline: 'none',
        }}>
        <Icon size={24} type={'bold'} />
      </button>

      <button
        onClick={e =>
          handleInlineStyle(e, 'ITALIC', editorState, setEditorState)
        }
        style={{
          padding: 8,
          border: 'none',
          outline: 'none',
        }}>
        <Icon size={24} type={'italic'} />
      </button>
      <button
        onClick={e =>
          handleInlineStyle(e, 'UNDERLINE', editorState, setEditorState)
        }
        style={{
          padding: 8,
          border: 'none',
          outline: 'none',
        }}>
        <Icon size={24} type={'underline'} />
      </button>
    </div>
  );
}
