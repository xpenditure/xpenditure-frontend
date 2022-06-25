import io from 'socket.io-client';
import { createContext } from 'react';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjVkODNjYTQzODNkNzBhMmMyMTg5ZSIsImlhdCI6MTY1NjExNTA3MSwiZXhwIjoxNjU4NzA3MDcxfQ._Itsq33G_LnM05MLBdmPrKzfDYC-HdBWOoQxqWZEQP0';

export const socket = io('http://localhost:8000', {
  transports: ['websocket', 'polling', 'flashsocket'],
  query: `token=${token}`,
});

export const SocketContext = createContext();
