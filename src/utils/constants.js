const BASE_URL = `http://localhost:8000/api`;

const TOKEN =
  global.window && global.window.localStorage.getItem('token')
    ? JSON.parse(localStorage.getItem('token'))
    : null;

export { BASE_URL, TOKEN };
