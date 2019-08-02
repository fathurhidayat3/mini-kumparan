// @flow

import React from 'react';
import {withRouter} from 'react-router-dom';
import {Col} from 'antd';
import styled from 'styled-components';

import HeadingText from '../../components/HeadingText';

import {colors} from '../../constants';

function ProfileInfo(props: any) {
  return (
    <ProfileInfoContainer span={5} style={{}}>
      <ProfileImage
        src={'https://avatars0.githubusercontent.com/u/9520695?s=460&v=4'}
        alt={'file-image'}
        style={{}}
      />

      <ProfileInfoContent>
        <HeadingText>Bambang S</HeadingText>

        <HeadingText type={'h3'} style={{color: colors.secondary}}>
          @{props.history.location.pathname.split('/')[2]}
        </HeadingText>
      </ProfileInfoContent>
    </ProfileInfoContainer>
  );
}

const ProfileInfoContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 100%;
  border-radius: 8px;
  objectfit: cover;
`;

const ProfileInfoContent = styled.div`
  margin-top: 16px;
  width: 100%;
`;
export default withRouter(ProfileInfo);
