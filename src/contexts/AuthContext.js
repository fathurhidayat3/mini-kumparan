// @flow

import * as React from 'react';

type Props = {
  userdata: Object,
  setUserdata: Function,
};

const AuthContext = React.createContext<Props>({
  userdata: {},
  setUserdata: () => {},
});

export default AuthContext;
