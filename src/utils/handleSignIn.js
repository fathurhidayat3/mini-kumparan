// @flow

type credentialType = {userKey: string, userPassword: string};
type dataType = {token: string, payload: any};

export default function(userKey: string, userPassword: string) {
  const credential: credentialType = {
    userKey,
    userPassword,
  };

  return fetch('/', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(credential),
  })
    .then(res => JSON.stringify(res))
    .then((data: any) => {
      localStorage.setItem('token', data.token);

      return data.payload;
    });
}
