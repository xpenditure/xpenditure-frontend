import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  budgets: [],
  labels: [],
  budgetLabels: [],
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
    setBudgetLabels(state, action) {
      state.budgetLabels = action.payload;
    },
  },
});

export const { addBudgets, addLabels, setBudgetLabels } = budgetSlice.actions;
export default budgetSlice.reducer;
