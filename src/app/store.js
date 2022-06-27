import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import actionReducer from '../features/actionSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    action: actionReducer,
  },
});
