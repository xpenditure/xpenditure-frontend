import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import BudgetList from '../components/budget/BudgetList';

const Archive = () => {
  const { budgets } = useSelector((state) => state.budget);
  const [archivedBudgets, setArchivedBudget] = useState([]);

  const filterArchive = () => {
    let newBudget = budgets.filter((budget) => budget.archived === true);
    console.log(newBudget);
    setArchivedBudget(newBudget);
  };

  useEffect(() => {
    filterArchive();
  }, [budgets]);

  return (
    <div>
      <BudgetList budgets={archivedBudgets} />
    </div>
  );
};

export default Archive;
