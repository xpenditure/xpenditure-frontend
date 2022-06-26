import { getFromLS } from './storage';

export const BASE_URL = `http://localhost:8000/api`;

export const TOKEN = getFromLS('token');
