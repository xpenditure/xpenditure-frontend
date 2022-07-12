import React, { useEffect, useState } from 'react';
import BudgetList from '../components/budget/BudgetList';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Empty from '../components/excerpt/Empty';

const Budgets = () => {
  const { budgets } = useSelector((state) => state.budget);
  const [filteredBudgets, setFilteredBudgets] = useState([]);

  useEffect(() => {
    let newBudgets = budgets.filter((budget) => budget.archived !== true);
    setFilteredBudgets(newBudgets);
  }, [budgets]);

  return (
    <>
      {filteredBudgets.length !== 0 ? (
        <BudgetsWrap>
          <BudgetList budgets={filteredBudgets} />
        </BudgetsWrap>
      ) : (
        <Empty name="Budget" />
      )}
    </>
  );
};

const BudgetsWrap = styled.div`
  .header {
    margin-bottom: 30px;
    display: flex;
    justify-content: flex-end;
  }

  .create-new {
    position: relative;
  }
`;

export default Budgets;
