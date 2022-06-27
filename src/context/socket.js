import io from 'socket.io-client';
import { createContext } from 'react';
import { TOKEN } from '../utils/constants';

export const socket = io('http://localhost:8000', {
  transports: ['websocket', 'polling', 'flashsocket'],
  query: `token=${TOKEN}`,
});

export const SocketContext = createContext();
