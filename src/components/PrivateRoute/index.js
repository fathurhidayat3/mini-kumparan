// @flow

import * as React from 'react';
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute({component: Component, ...rest}: any) {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('user-data') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )
      }></Route>
  );
}

export default PrivateRoute;
