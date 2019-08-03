// @flow

import getWordCount from './getWordCount';

export default function checkContentLength(editorState: any) {
  const editorContentlength = getWordCount(editorState);

  if (editorContentlength === 0) {
    return `Hello, you can write me 250 words`;
  } else if (0 < editorContentlength && editorContentlength < 250) {
    return `Write ${250 - editorContentlength} more words`;
  } else if (editorContentlength < 999) {
    return `Good job, now you can publish your article`;
  }

  return `Oops, you've reached the words limit`;
}
