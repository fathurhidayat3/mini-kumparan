// @flow

import * as React from 'react';
import {Editor, EditorState, convertToRaw, RichUtils} from 'draft-js';
import {Card, Button, Input, Col, Row, Divider, Tag, Tooltip, Icon} from 'antd';

import MutationCreateArticle from '../graphql/Articles/MutationCreateArticle';

import Navbar from '../components/Navbar';
import {Layout, Content} from '../components/Base/style';
import HeadingText from '../components/HeadingText';

import generateSlug from '../utils/generateSlug';

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

                  <Card bodyStyle={{padding: 16, minHeight: 530}}>
                    <Editor
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
                        <EditableTagGroup />
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

class EditableTagGroup extends React.Component {
  state = {
    tags: ['Unremovable', 'Tag 2', 'Tag 3'],
    inputVisible: false,
    inputValue: '',
  };

  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({tags});
  };

  showInput = () => {
    this.setState({inputVisible: true}, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({inputValue: e.target.value});
  };

  handleInputConfirm = () => {
    const {inputValue} = this.state;
    let {tags} = this.state;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  };

  saveInputRef = input => (this.input = input);

  render() {
    const {tags, inputVisible, inputValue} = this.state;
    return (
      <div>
        {tags.map((tag, index) => {
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag
              key={tag}
              closable={index !== 0}
              onClose={() => this.handleClose(tag)}
              style={{marginBottom: 16}}>
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{width: 78}}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag
            onClick={this.showInput}
            style={{
              background: '#fff',
              borderStyle: 'dashed',
              marginBottom: 16,
            }}>
            <Icon type="plus" /> New Tag
          </Tag>
        )}
      </div>
    );
  }
}
