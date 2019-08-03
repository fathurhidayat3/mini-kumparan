// @flow

import React from 'react';
import {withRouter} from 'react-router-dom';
import {Divider} from 'antd';
import styled from 'styled-components';

import StoryDetailMeta from './StoryDetailMeta';

import {StoryDetailContainer, StoryImageThumbnail} from './style';

import StoryDetailHeader from './StoryDetailHeader';
import StoryDetailCategories from './StoryDetailCategories';

import RelatedStoryList from './RelatedStoryList';

import QueryGetPublishedArticleBySlug from '../../graphql/Article/QueryGetPublishedArticleBySlug';

import Base from '../../components/Base';
import CustomEditor from '../../components/CustomEditor';
import HeadingText from '../../components/HeadingText';
import CommentList from '../../components/CommentList';
import CommentForm from '../../components/CommentForm';
import SkeletonLoaderContent from '../../components/SkeletonLoaderContent';

function StoryDetail(props: any) {
  const {filterData, setFilterData} = props;

  const [value, setValue] = React.useState('');
  const [userData] = React.useState(
    // $FlowFixMe
    JSON.parse(localStorage.getItem('user-data'))
  );

  const pathname = props.history.location.pathname;
  const slug = pathname.split('/')[2];

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <Base>
      <QueryGetPublishedArticleBySlug
        query={QueryGetPublishedArticleBySlug.query}
        variables={{slug}}>
        {({loading, error, data}) => {
          // if (loading) return 'Loading...';
          // if (error) return `Error! ${error.message}`;

          if (loading || error) {
            return <SkeletonLoaderContent />;
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

                <CustomEditor body={dataDetail && dataDetail.body} />

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
  margin-top: 24px;
`;

export default withRouter(StoryDetail);
