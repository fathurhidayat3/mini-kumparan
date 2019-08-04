// @flow

export default function(callback: Function) {
  localStorage.removeItem('user-data');

  callback && callback();
}
