// @flow

import React from 'react';
import {withRouter} from 'react-router-dom';
import {Col, Divider} from 'antd';
import styled from 'styled-components';

import ProfileCategoryBox from './ProfileCategoryBox';

import HeadingText from '../../components/HeadingText';

import {colors} from '../../constants';

function ProfileInfo(props: any) {
  const {userdata} = props;

  return (
    <ProfileInfoContainer span={5} style={{}}>
      <ProfileInfoContent>
        <HeadingText>{userdata.fullname}</HeadingText>

        <HeadingText type={'h3'} style={{color: colors.secondary}}>
          @{userdata.username}
        </HeadingText>

        <Divider />

        <ProfileCategoryBox userdata={userdata} />
      </ProfileInfoContent>
    </ProfileInfoContainer>
  );
}

const ProfileInfoContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileInfoContent = styled.div`
  width: 100%;
`;
export default withRouter(ProfileInfo);
