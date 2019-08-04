// @flow

import {RichUtils} from 'draft-js';

export default function handleKeyCommand(command: string, editorState: Object) {
  const newState = RichUtils.handleKeyCommand(editorState, command);
  if (newState) {
    this.onChange(newState);
    return 'handled';
  }
  return 'not-handled';
}
