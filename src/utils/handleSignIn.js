// @flow

export default function(username: string, password: string) {
  // $FlowFixMe
  const url = `${process.env.REACT_APP_GQL_URL}/user/login`;

  // console.log(username);

  const body = new FormData();

  if (username.includes('@')) {
    body.append('email', username);
  } else {
    body.append('username', username);
  }
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
