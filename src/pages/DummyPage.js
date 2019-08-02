// @flow

import * as React from 'react';
import {Editor, EditorState, convertToRaw, RichUtils} from 'draft-js';
import {Card, Button, Input, Col, Row, Divider} from 'antd';
import styled from 'styled-components';

import MutationCreateArticle from '../graphql/Articles/MutationCreateArticle';

import Navbar from '../components/Navbar';
import {Layout, Content} from '../components/Base/style';
import HeadingText from '../components/HeadingText';
import CategoryForm from '../components/CategoryForm';

import generateSlug from '../utils/generateSlug';
import useFocus from '../utils/useFocus';

export default function DummyPage() {
  const [title, setTitle] = React.useState('');
  const [slug, setSlug] = React.useState('');
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
  const [titleInputRef, setTitleInputFocus] = useFocus();
  const [contentInputRef, setContentInputFocus] = useFocus();

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

  React.useEffect(() => {
    setTitleInputFocus();
  }, [titleInputRef]);

  return (
    <Layout>
      <Navbar />
      <Content>
        <Row type={'flex'} justify={'center'} gutter={48}>
          <Col span={13}>
            <MutationCreateArticle
              mutation={MutationCreateArticle.mutation}
              variables={{
                title,
                body: JSON.stringify(
                  convertToRaw(editorState.getCurrentContent())
                ),
                slug,
              }}>
              {CreateArticle => (
                <div style={{padding: 16}}>
                  <div style={{margin: '0'}}>
                    <CustomInputTitle
                      value={title}
                      ref={titleInputRef}
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

                  <Card
                    bodyStyle={{padding: 16, minHeight: 530}}
                    onClick={setContentInputFocus}>
                    <Editor
                      ref={contentInputRef}
                      editorState={editorState}
                      handleKeyCommand={handleKeyCommand}
                      onChange={setEditorState}
                    />
                  </Card>

                  <Row style={{marginTop: 32}}>
                    <Col span={12}>
                      <Card>
                        <HeadingText type={'h4'}>Category</HeadingText>

                        <Divider />

                        <CategoryForm />
                      </Card>
                    </Col>
                  </Row>

                  <div style={{marginTop: 16}}>
                    <Button onClick={CreateArticle}>Save</Button>
                  </div>
                </div>
              )}
            </MutationCreateArticle>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

const CustomInputTitle = styled.input`
  width: 100%;

  background: transparent;
  border: none !important;
  outline: none !important;

  font-size: 1.5rem;
  font-weight: bold;
`;
