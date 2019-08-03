// @flow

import * as React from 'react';
import {Editor, EditorState, convertToRaw} from 'draft-js';
import {Card, Button, Input, Col, Row, Divider, Affix, Select} from 'antd';
import {Helmet} from 'react-helmet';
import {withRouter} from 'react-router-dom';

import {
  CustomInputTitle,
  EditorBottomToolbox,
  EditorTopToolbox,
  WordCounter,
} from './style';

import EditorToolbox from './EditorToolbox';

import MutationCreateArticle from '../../graphql/Article/MutationCreateArticle';
import QueryGetProfileArticles from '../../graphql/User/QueryGetProfileArticles';

import AuthContext from '../../contexts/AuthContext';

import Navbar from '../../components/Navbar';
import {Layout, Content} from '../../components/Base/style';
import HeadingText from '../../components/HeadingText';
import CategoryForm from '../../components/CategoryForm';
import Thumbnail from '../../components/Thumbnail';

import generateSlug from '../../utils/generateSlug';
import useFocus from '../../utils/useFocus';
import checkContentLength from '../../utils/checkContentLength';
import handleKeyCommand from '../../utils/handleKeyCommand';

const {Option} = Select;

function DummyPage(props: any) {
  const [title, setTitle] = React.useState('');
  const [thumbnail, setThumbnail] = React.useState('');
  const [slug, setSlug] = React.useState('');
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
  const [articleStatus, setArticleStatus] = React.useState('PUBLISHED');

  const [titleInputRef, setTitleInputFocus] = useFocus();
  const [contentInputRef, setContentInputFocus] = useFocus();

  function handleTitleChange(e) {
    setTitle(e.target.value);
    setSlug(generateSlug(e.target.value));
  }

  React.useEffect(() => {
    setTitleInputFocus();
  }, [titleInputRef]);

  return (
    <AuthContext.Consumer>
      {({userdata}) => (
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
                    thumbnail,
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
                            <EditorToolbox
                              editorState={editorState}
                              setEditorState={setEditorState}
                            />

                            <WordCounter>
                              {checkContentLength(editorState)}
                            </WordCounter>
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

                      <Row
                        style={{
                          marginTop: 32,
                        }}
                        gutter={24}>
                        <Col span={8}>
                          <Card>
                            <HeadingText type={'h4'}>
                              Attach Thumbnail
                            </HeadingText>

                            <Divider />

                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'center',
                              }}>
                              <Thumbnail setThumbnail={setThumbnail} />
                            </div>
                          </Card>
                        </Col>

                        <Col span={16}>
                          <Card style={{minHeight: 236}}>
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
                          onChange={setArticleStatus}>
                          <Option value="DRAFT">DRAFT</Option>
                          <Option value="PUBLISHED">PUBLISH</Option>
                        </Select>

                        <Button type={'primary'} onClick={CreateArticle}>
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

export default withRouter(DummyPage);
