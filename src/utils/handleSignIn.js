// @flow

type credentialType = {userKey: string, userPassword: string};
type dataType = {token: string, payload: any};

export default function(username: string, password: string) {
  const credential: any = {
    username,
    password,
  };

  // $FlowFixMe
  const url = `${process.env.REACT_APP_GQL_URL}/user/login`;

  const body = new FormData();
  body.append('username', username);
  body.append('password', password);

  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body,
  }).then(res => {
    return res.json();
  });
}
