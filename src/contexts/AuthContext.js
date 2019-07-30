import React from 'react';

const AuthContext = React.createContext({
  userdata: {},
  setUserdata: () => {},
});

export default AuthContext;
