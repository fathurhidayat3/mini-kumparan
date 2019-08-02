// @flow

import {RichUtils} from 'draft-js';

export default function handleInlineStyle(
  e: any,
  type: string,
  editorState: any,
  editorSetter: Function
) {
  e.preventDefault();

  editorSetter(RichUtils.toggleInlineStyle(editorState, type));
}
