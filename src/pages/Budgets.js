import React from 'react';
import BudgetList from '../components/budget/BudgetList';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Empty from '../components/excerpt/Empty';

const Budgets = () => {
  const { budgets } = useSelector((state) => state.budget);

  return (
    <>
      {budgets !== undefined || budgets.length !== 0 ? (
        <BudgetsWrap>
          <BudgetList budgets={budgets} />
        </BudgetsWrap>
      ) : (
        <Empty name="Budget" />
      )}
    </>
  );
};

const BudgetsWrap = styled.div`
  margin-top: 100px;
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
