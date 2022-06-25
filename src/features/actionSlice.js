import { createSlice } from '@reduxjs/toolkit';
import { getFromLS } from '../utils/storage';

const initialState = {
  mode: 'light',
};

const actionSlice = createSlice({
  name: 'action',
  initialState,
  reducers: {
    getThemeMode(state) {
      const mode = getFromLS('mode');
      if (mode) {
        state.mode = mode;
      }
    },
  },
});

export const { getThemeMode } = actionSlice.actions;
export default actionSlice.reducer;
