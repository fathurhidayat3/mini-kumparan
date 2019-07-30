export default function(callback) {
  localStorage.removeItem('user-data');

  callback && callback();
}
