import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  createModal: false,
};

export const actionSlice = createSlice({
  name: 'action',
  initialState,
  reducers: {
    showCreateModal(state, action) {
      console.log(action);
      state.createModal = !state.createModal;
    },
  },
});

export const { showCreateModal } = actionSlice.actions;
export default actionSlice.reducer;
