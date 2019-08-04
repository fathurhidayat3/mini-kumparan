// @flow

export default function(username: string, password: string) {
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
