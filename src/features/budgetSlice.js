import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  budgets: [],
  labels: [],
  budgetLabels: [],
  budget: {},
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
    setBudget(state, action) {
      state.budget = action.payload;
    },
    clearActiveBudgetData(state) {
      state.budgetId = '';
      state.budgetLabels = [];
      state.budget = {};
    },
  },
});

export const {
  addBudgets,
  addLabels,
  setBudgetLabels,
  setBudgetId,
  setBudget,
  clearActiveBudgetData,
} = budgetSlice.actions;
export default budgetSlice.reducer;
