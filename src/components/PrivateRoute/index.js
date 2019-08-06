// @flow

import * as React from 'react';
import {Route, Redirect} from 'react-router-dom';

type Props = {
  component: React.Node,
  otherProps: any,
};

function PrivateRoute(props: Props) {
  const {component: Component, ...otherProps} = props;

  return (
    <Route
      {...otherProps}
      render={props =>
        localStorage.getItem('user-data') ? (
          // $FlowFixMe
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
