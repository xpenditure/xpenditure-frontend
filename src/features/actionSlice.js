import { createSlice } from '@reduxjs/toolkit';
import { getFromLS, setToLS } from '../utils/storage';

const initialState = {
  mode: 'light',
  activeView: 'budgets',
  settingsModal: false,
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
    setDashboardView(state, action) {
      state.activeView = action.payload;
    },
    toggleSettingsModal(state, action) {
      state.settingsModal = action.payload;
    },
  },
});

export const {
  getThemeMode,
  setThemeMode,
  setDashboardView,
  toggleSettingsModal,
} = actionSlice.actions;
export default actionSlice.reducer;
