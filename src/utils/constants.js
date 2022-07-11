import { getFromLS } from './storage';

export const BASE_URL =
  process.env.NODE_ENV !== 'development'
    ? 'https://xpenditure-api.herokuapp.com'
    : `http://localhost:8000`;

export const TOKEN = getFromLS('token');
console.log(process.env.NODE_ENV);
