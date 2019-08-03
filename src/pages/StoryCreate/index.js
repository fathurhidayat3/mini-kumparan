// @flow

import * as React from 'react';
import {useDropzone} from 'react-dropzone';
import {Editor, EditorState, convertToRaw, RichUtils} from 'draft-js';
import {
  Card,
  Button,
  Input,
  Col,
  Row,
  Divider,
  Affix,
  Icon,
  Select,
} from 'antd';
import styled from 'styled-components';
import {Helmet} from 'react-helmet';
import {withRouter} from 'react-router-dom';

import MutationCreateArticle from '../../graphql/Article/MutationCreateArticle';
import QueryGetProfileArticles from '../../graphql/User/QueryGetProfileArticles';

import AuthContext from '../../contexts/AuthContext';

import Navbar from '../../components/Navbar';
import {Layout, Content} from '../../components/Base/style';
import HeadingText from '../../components/HeadingText';
import CategoryForm from '../../components/CategoryForm';

import generateSlug from '../../utils/generateSlug';
import useFocus from '../../utils/useFocus';
import handleInlineStyle from '../../utils/handleInlineStyle';
import getWordCount from '../../utils/getWordCount';

const {Option} = Select;

function DummyPage(props: any) {
  const [title, setTitle] = React.useState('');
  const [slug, setSlug] = React.useState('');
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
  const [articleStatus, setArticleStatus] = React.useState('DRAFT');

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

  function checkContentLength() {
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

  const [files, setFiles] = React.useState([]);

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map(file => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{height: 100, width: 100}} />
      </div>
    </div>
  ));

  function handleStatusChange(e) {
    setArticleStatus(e);
  }

  React.useEffect(() => {
    setTitleInputFocus();
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [titleInputRef]);

  return (
    <AuthContext.Consumer>
      {({userdata, setUserdata}) => (
        <Layout>
          <Navbar />
          <Content style={{position: 'relative'}}>
            <Helmet>
              <meta charSet="utf-8" />
              <meta name="description" content="Write Article" />

              <title>Write Article</title>

              <link rel="canonical" href={`http://mini-kumparan.com/dummy`} />
            </Helmet>

            <Row type={'flex'} justify={'center'}>
              <Col span={13}>
                <MutationCreateArticle
                  mutation={MutationCreateArticle.mutation}
                  variables={{
                    title,
                    body: JSON.stringify(
                      convertToRaw(editorState.getCurrentContent())
                    ),
                    slug,
                    username: userdata && userdata.username,
                    status: articleStatus,
                  }}
                  refetchQueries={[
                    {
                      query: QueryGetProfileArticles.query,
                      variables: {username: userdata.username, category: ''},
                    },
                  ]}
                  onCompleted={() =>
                    props.history.push(`/profile/${userdata.username}`)
                  }>
                  {CreateArticle => (
                    <div style={{padding: 16}}>
                      <div style={{margin: '00'}}>
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

                      <Affix offsetTop={63}>
                        <Card bodyStyle={{padding: '8px'}}>
                          <EditorTopToolbox>
                            <div>
                              <button
                                onClick={e =>
                                  handleInlineStyle(
                                    e,
                                    'BOLD',
                                    editorState,
                                    setEditorState
                                  )
                                }
                                style={{
                                  padding: 8,
                                  border: 'none',
                                  outline: 'none',
                                }}>
                                <Icon size={24} type={'bold'} />
                              </button>

                              <button
                                onClick={e =>
                                  handleInlineStyle(
                                    e,
                                    'ITALIC',
                                    editorState,
                                    setEditorState
                                  )
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
                                  handleInlineStyle(
                                    e,
                                    'UNDERLINE',
                                    editorState,
                                    setEditorState
                                  )
                                }
                                style={{
                                  padding: 8,
                                  border: 'none',
                                  outline: 'none',
                                }}>
                                <Icon size={24} type={'underline'} />
                              </button>
                            </div>

                            <WordCounter>{checkContentLength()}</WordCounter>
                          </EditorTopToolbox>
                        </Card>
                      </Affix>

                      <Card
                        bodyStyle={{
                          padding: 16,
                          minHeight: 450,
                        }}
                        onClick={setContentInputFocus}
                        style={{marginTop: 16}}>
                        <Editor
                          ref={contentInputRef}
                          editorState={editorState}
                          handleKeyCommand={handleKeyCommand}
                          onChange={setEditorState}
                        />
                      </Card>

                      <Row style={{marginTop: 32}} gutter={24}>
                        <Col span={12}>
                          <Card>
                            <HeadingText type={'h4'}>
                              Attach Thumbnail
                            </HeadingText>

                            <Divider />

                            <section className="container">
                              <div {...getRootProps({className: 'dropzone'})}>
                                <input {...getInputProps()} />
                                <Button>Click me to upload</Button>
                              </div>
                              <aside>{thumbs}</aside>
                            </section>
                          </Card>
                        </Col>

                        <Col span={12}>
                          <Card>
                            <HeadingText type={'h4'}>Category</HeadingText>

                            <Divider />

                            <CategoryForm />
                          </Card>
                        </Col>
                      </Row>

                      <EditorBottomToolbox>
                        <Select
                          style={{marginRight: 8, width: 150}}
                          value={articleStatus}
                          onChange={handleStatusChange}>
                          <Option value="DRAFT">DRAFT</Option>
                          <Option value="PUBLISHED">PUBLISHED</Option>
                        </Select>

                        <Button
                          type={'primary'}
                          onClick={CreateArticle}
                          // disabled={getWordCount(editorState) < 250 && true}
                        >
                          Save
                        </Button>
                      </EditorBottomToolbox>
                    </div>
                  )}
                </MutationCreateArticle>
              </Col>
            </Row>
          </Content>
        </Layout>
      )}
    </AuthContext.Consumer>
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

const EditorBottomToolbox = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 32px;
`;

const EditorTopToolbox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const WordCounter = styled.div`
  padding: 8px;

  background: white;
`;

export default withRouter(DummyPage);
