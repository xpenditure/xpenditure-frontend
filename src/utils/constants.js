import { getFromLS } from './storage';

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:8000`
    : 'https://xpenditure-api.herokuapp.com';

export const TOKEN = getFromLS('token');
