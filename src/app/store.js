import { configureStore } from '@reduxjs/toolkit';
import actionReducer from '../features/actionSlice';

export const store = configureStore({
  reducer: {
    // your redux reducers
    action: actionReducer,
  },
});
