import { getFromLS } from './storage';

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? `http://localhost:8000/api`
    : 'https://xpenditure-api.herokuapp.com/api';

export const TOKEN = getFromLS('token');
