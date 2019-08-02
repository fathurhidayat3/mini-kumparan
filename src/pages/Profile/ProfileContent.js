// @flow

import React from 'react';
import {Card, Tabs, Skeleton, Col} from 'antd';

import styled from 'styled-components';

const {TabPane} = Tabs;

function ProfileContent() {
  return (
    <ProfileContentContainer span={11}>
      <Tabs defaultActiveKey="1">
        <TabPane tab={'Articles'} key="1">
          {[0, 1, 2, 3].map((item, index) => (
            <Card style={{marginBottom: 16}} key={index}>
              <Skeleton avatar paragraph={{rows: 2}} loading={true} active />
            </Card>
          ))}
        </TabPane>
      </Tabs>
    </ProfileContentContainer>
  );
}

const ProfileContentContainer = styled(Col)`
  margin-bottom: 16px;
`;

export default ProfileContent;
