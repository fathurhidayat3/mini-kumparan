// @flow

type credentialType = {userKey: string, userPassword: string};
type dataType = {token: string, payload: any};

export default function(username: string, password: string) {
  const credential: any = {
    username,
    password,
  };

  const url = 'http://e1973cad.ngrok.io/login';

  const body = new FormData();
  body.append('username', username);
  body.append('password', password);

  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
    },
    body,
  })
    .then(res => JSON.stringify(res))
    .then((data: any) => {
      localStorage.setItem('user-data', JSON.stringify(data));

      return data;
    });
}
