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

function StoryDetail(props: any) {
  const {filterData, setFilterData} = props;

  const pathname = props.history.location.pathname;
  const slug = pathname.split('/')[2];

  return (
    <Base>
      <QueryGetPublishedArticleBySlug
        query={QueryGetPublishedArticleBySlug.query}
        variables={{slug}}>
        {({loading, error, data}) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          const dataDetail = data.GetPublishedArticleBySlug;

          return (
            <StoryDetailContainer>
              <StoryDetailMeta title={dataDetail.title} pathname={pathname} />

              <StoryDetailHeader dataDetail={dataDetail} />

              <Divider />

              <StoryImageThumbnail
                shape="square"
                src={dataDetail.thumbnail}
                icon={'file-image'}
              />

              <StoryDetailBody></StoryDetailBody>

              <Divider />

              <StoryDetailCategories
                dataDetail={dataDetail}
                setFilterData={setFilterData}
              />
            </StoryDetailContainer>
          );
        }}
      </QueryGetPublishedArticleBySlug>

      <Divider />

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
