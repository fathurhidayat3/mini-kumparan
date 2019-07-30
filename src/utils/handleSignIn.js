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
      data = {
        status: 200,
        data: {
          token: '123456',
          payload: {
            username: 'fathurhidayat3',
            name: 'Fathur Hidayat',
          },
        },
      };

      localStorage.setItem('user-data', JSON.stringify(data.data));

      return data;
    });
}
