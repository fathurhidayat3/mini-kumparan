// @flow

import * as React from 'react';

import Home from './Home';

function handleSignIn() {}

function HomeContainer() {
  return <Home handleSignIn={handleSignIn}></Home>;
}

export default HomeContainer;
