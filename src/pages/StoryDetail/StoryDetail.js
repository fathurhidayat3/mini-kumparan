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

type Props = {
  filterData: Array<any>,
  setFilterData: Function,
  history: Object,
};

function StoryDetail(props: Props) {
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
          if (loading || error) {
            return <SkeletonLoaderContent />;
          }

          const dataDetail = data && data.GetPublishedArticleBySlug;

          return (
            <>
              <StoryDetailContainer>
                <StoryDetailMeta
                  title={dataDetail && dataDetail.title}
                  pathname={pathname}
                />

                <StoryDetailHeader dataDetail={dataDetail} />

                <Divider />

                <StoryImageThumbnail
                  shape="square"
                  // $FlowFixMe
                  src={`${process.env.REACT_APP_GQL_URL}${dataDetail.thumbnail}`}
                  icon={'file-image'}
                />

                <CustomEditor body={dataDetail && dataDetail.body} />

                <Divider />

                <StoryDetailCategories
                  dataDetail={dataDetail}
                  setFilterData={setFilterData}
                />
              </StoryDetailContainer>

              <Divider />

              <div style={{marginTop: 36}}>
                <HeadingText type={'h3'}>Comments</HeadingText>

                <CommentForm
                  slug={slug}
                  userData={userData}
                  dataDetail={dataDetail}
                  value={value}
                  setValue={setValue}
                  onChange={handleChange}
                  isDisabled={!userData && true}
                />

                {dataDetail &&
                  dataDetail.comments &&
                  dataDetail.comments.length > 0 && (
                    <CommentList comments={dataDetail.comments} />
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
