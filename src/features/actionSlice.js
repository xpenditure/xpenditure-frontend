import { createSlice } from '@reduxjs/toolkit';
import { getFromLS, setToLS } from '../utils/storage';

const initialState = {
  mode: 'light',
  settingsModal: false,
  labelModal: false,
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
    toggleSettingsModal(state, action) {
      state.settingsModal = action.payload;
    },
    toggleLabelModal(state, action) {
      state.labelModal = action.payload;
    },
    toggleMoreSide(state, action) {
      state.moreSide = action.payload;
    },
  },
});

export const {
  getThemeMode,
  setThemeMode,
  toggleSettingsModal,
  toggleLabelModal,
  toggleMoreSide,
} = actionSlice.actions;
export default actionSlice.reducer;
