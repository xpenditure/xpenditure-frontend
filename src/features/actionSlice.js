import { createSlice } from '@reduxjs/toolkit';
import { getFromLS, setToLS } from '../utils/storage';

const initialState = {
  mode: 'light',
  moreSide: false,
  layout: 'grid',
  addLabelModal: false,
  delLabelModal: false,
  delBudgetModal: false,
  sideNav: false,
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
    toggleLayout(state) {
      state.layout = state.layout === 'grid' ? 'list' : 'grid';
    },
    toggleAddLabelModal(state, action) {
      state.addLabelModal = action.payload;
    },
    toggleDelLabelModal(state, action) {
      state.delLabelModal = action.payload;
    },
    toggleDelBudgetModal(state, action) {
      state.delBudgetModal = action.payload;
    },
    toggleSideNav(state) {
      state.sideNav = !state.sideNav;
    },
  },
});

export const {
  getThemeMode,
  setThemeMode,
  toggleMoreSide,
  toggleLayout,
  toggleAddLabelModal,
  toggleDelLabelModal,
  toggleDelBudgetModal,
  toggleSideNav,
} = actionSlice.actions;
export default actionSlice.reducer;
