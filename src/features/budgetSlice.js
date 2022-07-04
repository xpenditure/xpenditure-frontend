import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  budgets: [],
  labels: [],
};

const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    addBudgets(state, action) {
      state.budgets = action.payload;
    },
    addLabels(state, action) {
      state.labels = action.payload;
    },
  },
});

export const { addBudgets, addLabels } = budgetSlice.actions;
export default budgetSlice.reducer;
