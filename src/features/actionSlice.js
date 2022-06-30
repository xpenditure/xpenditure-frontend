import { createSlice } from '@reduxjs/toolkit';
import { getFromLS, setToLS } from '../utils/storage';

const initialState = {
  mode: 'light',
  moreSide: false,
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
    setThemeMode(state, action) {
      setToLS('mode', action.payload);
      state.mode = action.payload;
    },
    toggleMoreSide(state, action) {
      state.moreSide = action.payload;
    },
  },
});

export const { getThemeMode, setThemeMode, toggleMoreSide } =
  actionSlice.actions;
export default actionSlice.reducer;
