// @flow

import React from 'react';
import {Typography} from 'antd';

import {withRouter, Link} from 'react-router-dom';

import {
  StoryDetailHeaderContainer,
  StoryDetailHeaderInfoContainer,
  StoryDetailHeaderUserContainer,
} from './style';

import HeadingText from '../../components/HeadingText';
import timeAgo from '../../utils/timeAgo';

const {Text} = Typography;

type Props = {
  dataDetail: Object,
};

function StoryDetailHeader(props: Props) {
  const {dataDetail} = props;
  // const {user} = props && props.dataDetail;

  return (
    <StoryDetailHeaderContainer>
      <HeadingText type={'h1'}>{dataDetail && dataDetail.title}</HeadingText>
      <StoryDetailHeaderInfoContainer>
        <StoryDetailHeaderUserContainer style={{flex: 1}}>
          <Link
            to={`/profile/${dataDetail &&
              dataDetail.user &&
              dataDetail.user.username}`}>
            <HeadingText type={'h4'}>
              {dataDetail && dataDetail.user && dataDetail.user.fullname}
            </HeadingText>
          </Link>

          <Text>{timeAgo(dataDetail && dataDetail.createdAt)}</Text>
        </StoryDetailHeaderUserContainer>
      </StoryDetailHeaderInfoContainer>
    </StoryDetailHeaderContainer>
  );
}

export default withRouter(StoryDetailHeader);
