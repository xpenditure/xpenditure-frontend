import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  budgets: [],
  labels: [],
  label: {},
  budgetLabels: [],
  budget: {},
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
    setBudget(state, action) {
      state.budget = action.payload;
    },
    setLabel(state, action) {
      state.label = action.payload;
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
  setBudget,
  setLabel,
  clearActiveBudgetData,
} = budgetSlice.actions;
export default budgetSlice.reducer;
