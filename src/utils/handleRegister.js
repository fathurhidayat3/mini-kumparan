// @flow

// type credentialType = {userKey: string, userPassword: string};
// type dataType = {token: string, payload: any};

export default function(
  fullname: string,
  username: string,
  email: string,
  password: string
) {
  // const credential: any = {
  //   username,
  //   password,
  // };

  // $FlowFixMe
  const url = `${process.env.REACT_APP_GQL_URL}/user/register`;

  const body = new FormData();
  body.append('fullname', fullname);
  body.append('username', username);
  body.append('email', email);
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
