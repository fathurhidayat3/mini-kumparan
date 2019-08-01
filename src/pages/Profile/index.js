// @flow

import React from 'react';
import {Card} from 'antd';

import AuthContext from '../../contexts/AuthContext';

function Profile() {
  return (
    <AuthContext.Consumer>
      {({userdata, setUserdata}) => {
        return <Card> {userdata.fullname}</Card>;
      }}
    </AuthContext.Consumer>
  );
}

export default Profile;
