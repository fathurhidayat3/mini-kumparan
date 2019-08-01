// @flow

import * as React from 'react';
import {Editor, EditorState, convertToRaw, RichUtils} from 'draft-js';
import {Card, Button, Input} from 'antd';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';

import generateSlug from '../utils/generateSlug';

const CREATE_STORY = gql`
  mutation QCreateArticle($title: String!, $body: String!, $slug: String!) {
    CreateArticle(
      article: {
        title: $title
        body: $body
        status: "DRAFT"
        userId: "94237f27-aed7-4390-b3bd-80aadcb974ba"
        slug: $slug
        thumbnail: "https://pbs.twimg.com/media/EAKLX0bUYAAOMMT.jpg"
        categories: ["POLITIK", "OTOMOTIF"]
      }
    ) {
      id
      title
      thumbnail
    }
  }
`;

export default function DummyPage() {
  const [title, setTitle] = React.useState('');
  const [slug, setSlug] = React.useState('');
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  function handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
    setSlug(generateSlug(e.target.value));
  }

  return (
    <Mutation
      mutation={CREATE_STORY}
      variables={{
        title,
        body: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
        slug,
      }}>
      {CreateArticle => (
        <div style={{padding: 16}}>
          <div style={{margin: '16px 0'}}>
            <Input
              value={title}
              onChange={e => handleTitleChange(e)}
              placeholder="Title"
            />
          </div>

          <div style={{margin: '16px 0'}}>
            <Input
              value={slug}
              onChange={e => setSlug(e.target.value)}
              placeholder="Slug"
            />
          </div>

          <Card bodyStyle={{padding: 16}}>
            <Editor
              editorState={editorState}
              handleKeyCommand={handleKeyCommand}
              onChange={setEditorState}
            />
          </Card>

          <div style={{marginTop: 16}}>
            <Button onClick={CreateArticle}>Save</Button>
          </div>
        </div>
      )}
    </Mutation>
  );
}
