// @flow

import React from 'react';
import {withRouter} from 'react-router-dom';
import {Divider, Card, Skeleton} from 'antd';
import styled from 'styled-components';
import {Editor, EditorState, convertFromRaw} from 'draft-js';

import StoryDetailMeta from './StoryDetailMeta';

import {StoryDetailContainer, StoryImageThumbnail} from './style';

import StoryDetailHeader from './StoryDetailHeader';
import StoryDetailBody from './StoryDetailBody';
import StoryDetailCategories from './StoryDetailCategories';

import RelatedStoryList from './RelatedStoryList';

import QueryGetPublishedArticleBySlug from '../../graphql/Articles/QueryGetPublishedArticleBySlug';

import Base from '../../components/Base';
import HeadingText from '../../components/HeadingText';
import CommentList from '../../components/CommentList';
import CommentForm from '../../components/CommentForm';

// const dummyBody =
//   '{"blocks":[{"key":"5fjf8","text":"Penggemar Mobile Legends: Bang Bang bersiaplah untuk kedatangan sekuel dari game tersebut. Moonton telah mengumumkan bakal meluncurkan game Mobile Legends: Adventure pada 1 Agustus mendatang.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[{"offset":10,"length":14,"key":0}],"data":{}},{"key":"b3a5b","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"fbp5i","text":"Berbeda dengan Mobile Legends: Bang Bang yang mengusung genre MOBA (Multiplayer Online Battle Arena), Mobile Legends: Adventure memiliki konsep strategy card. Tapi, di dalamnya tetap bakal tampil hero-hero yang telah kita kenal dari Mobile Legends: Bang Bang, seperti Miya, Tigreal, Layla, dan lain-lain.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":68,"length":31,"style":"ITALIC"},{"offset":144,"length":13,"style":"ITALIC"},{"offset":196,"length":4,"style":"ITALIC"},{"offset":201,"length":5,"style":"ITALIC"}],"entityRanges":[],"data":{}},{"key":"f8i2","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"fsdru","text":"Pemain dapat melakukan pra-registrasi di Google Play Store mulai 18 Juli 2019 sampai 1 Agustus 2019 untuk mendapatkan hadiah berupa Premium Summon Scroll dan 100.000 Battle Points.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{"0":{"type":"LINK","mutability":"MUTABLE","data":{"href":"https://kumparan.com/topic/mobile-legends","rel":"noopener noreferrer","target":"_blank","url":"https://kumparan.com/topic/mobile-legends"}}}}';

function MyEditor(props: any) {
  // "{\"blocks\":[{\"key\":\"5fjf8\",\"text\":\"This is just its content, with a bold and italic but without underline\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":33,\"length\":5,\"style\":\"BOLD\"},{\"offset\":42,\"length\":6,\"style\":\"ITALIC\"},{\"offset\":61,\"length\":9,\"style\":\"UNDERLINE\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"

  const [editorState, setEditorState] = React.useState(
    EditorState.createWithContent(convertFromRaw(JSON.parse(props.body)))
  );

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      readOnly={true}
    />
  );
}

function StoryDetail(props: any) {
  const {filterData, setFilterData} = props;

  const [value, setValue] = React.useState('');
  const [comments, setComments] = React.useState([]);
  const [userData] = React.useState(
    JSON.parse(localStorage.getItem('user-data'))
  );

  const pathname = props.history.location.pathname;
  const slug = pathname.split('/')[2];

  function handleSubmit() {
    if (!value) {
      return;
    }

    setValue('');

    setComments([
      {
        author: 'Han Solo',
        avatar:
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        content: <p>{value}</p>,
        datetime: 'asdas',
      },
      ...comments,
    ]);
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  // const dataDetail = {
  //   title:
  //     'Kebahagiaan Kecil dari Sido Muncul untuk Dolok Sanggul, Sumatera Utara',
  //   thumbnail:
  //     'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1564028912/sold65vxraawed8egt5n.jpg',
  //   user: {fullName: 'kuro'},
  //   body:
  //     '{"blocks":[{"key":"5fjf8","text":"Googlekembali menambah aplikasi baru yang ramah memori, dan ini juga menjadi bagian dari program Android Go. Aplikasi baru yang dinamakan Gallery Go ini dibuat khusus untuk mengatur penyimpanan foto yang dilengkapi teknologi kecerdasan buatan (artificial intelligence/AI).","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":244,"length":23,"style":"ITALIC"}],"entityRanges":[],"data":{}},{"key":"dd8mu","text":"","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"c6c15","text":"Singkatnya, aplikasi Gallery Go adalah wujud sederhana dari Google Photos. Gallery Go dirancang dapat bekerja secara offline dan hanya memakan ruang memori penyimpanan sekitar 10 MB, namun tetap mempertahankan beberapa fitur Google Photos yang terbaik.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":117,"length":8,"style":"ITALIC"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
  //   categories: [
  //     'BISNIS',
  //     'KATARAK',
  //     'SUMATERA UTARA',
  //     'SOSIAL',
  //     'MUDIK SIDO MUNCUL',
  //   ],
  //   comments: [
  //     {fullname: 'Jarwo', message: 'lorem ipsum'},
  //     {fullname: 'Supardi', message: 'dolor sit amet'},
  //   ],
  // };

  return (
    <Base>
      <QueryGetPublishedArticleBySlug
        query={QueryGetPublishedArticleBySlug.query}
        variables={{slug}}>
        {({loading, error, data}) => {
          // if (loading) return 'Loading...';
          // if (error) return `Error! ${error.message}`;

          if (loading || error) {
            return (
              <>
                <Card style={{marginBottom: 16}}>
                  <Skeleton title paragraph={{rows: 0}} loading={true} active />

                  <Skeleton
                    avatar
                    paragraph={{rows: 0}}
                    loading={true}
                    active
                  />

                  <Divider />

                  <Skeleton paragraph={{rows: 9}} loading={true} active />

                  <Divider />

                  <Skeleton title paragraph={{rows: 0}} loading={true} active />
                </Card>
              </>
            );
          }

          const dataDetail = data.GetPublishedArticleBySlug;

          return (
            <>
              <StoryDetailContainer>
                <StoryDetailMeta title={dataDetail.title} pathname={pathname} />

                <StoryDetailHeader dataDetail={dataDetail} />

                <Divider />

                <StoryImageThumbnail
                  shape="square"
                  src={dataDetail.thumbnail}
                  icon={'file-image'}
                />

                {/* <StoryDetailBody dataDetail={dataDetail}></StoryDetailBody> */}

                <MyEditor body={dataDetail && dataDetail.body} />

                <Divider />

                <StoryDetailCategories
                  dataDetail={dataDetail}
                  setFilterData={setFilterData}
                />
              </StoryDetailContainer>

              <div style={{marginTop: 36}}>
                <HeadingText type={'h3'}>Comments</HeadingText>

                {dataDetail.comments.length > 0 && (
                  <CommentList comments={dataDetail.comments} />
                )}

                {userData && (
                  <CommentForm
                    slug={slug}
                    userData={userData}
                    dataDetail={dataDetail}
                    value={value}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                  />
                )}
              </div>

              <Divider />
            </>
          );
        }}
      </QueryGetPublishedArticleBySlug>

      <RelatedStoryListContainer>
        <HeadingText type={'h3'}>Related Story</HeadingText>

        <RelatedStoryList filterData={filterData} />
      </RelatedStoryListContainer>
    </Base>
  );
}

const RelatedStoryListContainer = styled.div`
  /* margin-top: 24px; */
`;

export default withRouter(StoryDetail);
