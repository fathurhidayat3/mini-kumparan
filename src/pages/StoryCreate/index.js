// @flow

import * as React from 'react';
import {Editor, EditorState, convertToRaw} from 'draft-js';
import {Card, Input, Col, Row, Affix} from 'antd';
import {withRouter} from 'react-router-dom';

import {CustomInputTitle, EditorTopToolbox, WordCounter} from './style';

import EditorToolbox from './EditorToolbox';
import StoryCreateMeta from './StoryCreateMeta';
import StoryCreateThumbnailBox from './StoryCreateThumbnailBox';
import StoryCreateCategoryBox from './StoryCreateCategoryBox';
import StoryCreateBottomToolbox from './StoryCreateBottomToolbox';

import MutationCreateArticle from '../../graphql/Article/MutationCreateArticle';
import QueryGetProfileArticles from '../../graphql/User/QueryGetProfileArticles';

import AuthContext from '../../contexts/AuthContext';

import Navbar from '../../components/Navbar';
import {Layout, Content} from '../../components/Base/style';

import generateSlug from '../../utils/generateSlug';
import useFocus from '../../utils/useFocus';
import checkContentLength from '../../utils/checkContentLength';
import handleKeyCommand from '../../utils/handleKeyCommand';

type Props = {
  history: Object,
};

function StoryCreate(props: Props) {
  const [title, setTitle] = React.useState('');
  const [thumbnail, setThumbnail] = React.useState('');
  const [slug, setSlug] = React.useState('');
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
  const [articleStatus, setArticleStatus] = React.useState('PUBLISHED');
  const [checkedCategories, setCheckedCategories] = React.useState([
    {categoryname: 'NEWS', categoryslug: 'NEWS'},
    {categoryname: 'POLITIK', categoryslug: 'POLITIK'},
    {categoryname: 'ENTERTAINMENT', categoryslug: 'ENTERTAINMENT'},
    {categoryname: 'OTOMOTIF', categoryslug: 'OTOMOTIF'},
  ]);

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
            <StoryCreateMeta />

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
                    categories:
                      checkedCategories &&
                      checkedCategories
                        .filter(checkedItem => checkedItem.isChecked === true)
                        .map(checkedItem => checkedItem.categoryslug),
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
                      <div>
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
                        <StoryCreateThumbnailBox setThumbnail={setThumbnail} />

                        <StoryCreateCategoryBox
                          userdata={userdata}
                          checkedCategories={checkedCategories}
                          setCheckedCategories={setCheckedCategories}
                        />
                      </Row>

                      <StoryCreateBottomToolbox
                        articleStatus={articleStatus}
                        setArticleStatus={setArticleStatus}
                        editorBottomOnSubmit={CreateArticle}
                      />
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

export default withRouter(StoryCreate);
