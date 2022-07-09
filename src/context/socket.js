import io from 'socket.io-client';
import { createContext } from 'react';
import { TOKEN, BASE_URL } from '../utils/constants';

export const socket = io(BASE_URL, {
  transports: ['websocket', 'polling', 'flashsocket'],
  query: `token=${TOKEN}`,
});

export const SocketContext = createContext();
