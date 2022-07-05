import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  budgets: [],
  labels: [],
  budgetLabels: [],
  budgetId: '',
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
    setBudgetId(state, action) {
      state.budgetId = action.payload;
    },
    setBudgetLabels(state, action) {
      state.budgetLabels = action.payload;
    },
  },
});

export const { addBudgets, addLabels, setBudgetLabels, setBudgetId } =
  budgetSlice.actions;
export default budgetSlice.reducer;
