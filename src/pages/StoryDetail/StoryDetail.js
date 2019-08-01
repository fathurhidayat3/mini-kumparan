// @flow

import React from 'react';
import {withRouter} from 'react-router-dom';
import {Divider} from 'antd';
import styled from 'styled-components';

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

function StoryDetail(props: any) {
  const {filterData, setFilterData} = props;

  const [value, setValue] = React.useState('');
  const [comments, setComments] = React.useState([]);

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

  const dataDetail = {
    title:
      'Kebahagiaan Kecil dari Sido Muncul untuk Dolok Sanggul, Sumatera Utara',
    thumbnail:
      'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1564028912/sold65vxraawed8egt5n.jpg',
    user: {fullName: 'kuro'},
    body:
      'Anak saya menderita bibir sumbing sudah sejak lahir," itulah jawaban yang dilontarkan Pahala Sipahutar, salah satu orang tua pasien bibir sumbing ketika kumparan (kumparan.com) temui di RSUD Dolok Sanggul, Humbang Hasundutan, Sumatera Utara, pada Rabu (24/7). Bibir sumbing merupakan sebuah penyakit yang belum dapat dipastikan secara jelas apa penyebabnya. Namun dari mayoritas kejadian yang ada, bibir sumbing lazim terjadi karena faktor keturunan, hingga gaya hidup orang tua saat mengandung anaknya. Di Dolok Sanggul sendiri, terdapat sejumlah penderita bibir sumbing yang didominasi pada usia anak-anak. Penyakit ini pun cukup menjadi perhatian, baik dari pihak pemerintah maupun swasta. Upaya yang dilakukan untuk mengurangi bibir sumbing di Kabupaten Humbang Hasundutan adalah dengan melakukan operasi gratis yang bekerja sama dengan Sido Muncul dan Kepak Sejahtera,” ujar Saut Parlindungan Simamora selaku Wakil Bupati Humbang Hasundutan.',
    categories: [
      'BISNIS',
      'KATARAK',
      'SUMATERA UTARA',
      'SOSIAL',
      'MUDIK SIDO MUNCUL',
    ],
    comments: [
      {fullname: 'Jarwo', message: 'lorem ipsum'},
      {fullname: 'Supardi', message: 'dolor sit amet'},
    ],
  };

  return (
    <Base>
      <QueryGetPublishedArticleBySlug
        query={QueryGetPublishedArticleBySlug.query}
        variables={{slug}}>
        {({loading, error, data}) => {
          // if (loading) return 'Loading...';
          // if (error) return `Error! ${error.message}`;

          // const dataDetail = data.GetPublishedArticleBySlug;

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

                <StoryDetailBody dataDetail={dataDetail}></StoryDetailBody>

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

                <CommentForm
                  value={value}
                  onChange={handleChange}
                  onSubmit={handleSubmit}
                />
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
