// @flow

export default function checkContentLength(editorState: Object) {
  const editorPlainText = editorState.getCurrentContent().getPlainText('');
  const editorContentlength = editorPlainText.length;

  if (editorContentlength === 0) {
    return `Hello, you can write me 250 characters`;
  } else if (0 < editorContentlength && editorContentlength < 250) {
    return `Write ${250 - editorContentlength} more characters`;
  } else if (editorContentlength < 999) {
    return `Good job, now you can publish your article`;
  }

  return `Oops, you've reached the words limit`;
}
