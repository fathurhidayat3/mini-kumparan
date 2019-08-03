// @flow

import {RichUtils} from 'draft-js';

export default function handleKeyCommand(command: any, editorState: any) {
  const newState = RichUtils.handleKeyCommand(editorState, command);
  if (newState) {
    this.onChange(newState);
    return 'handled';
  }
  return 'not-handled';
}
