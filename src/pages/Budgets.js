import React from 'react';
import BudgetList from '../components/budget/BudgetList';
import { Link, useLocation } from 'react-router-dom';
import { ButtonPrimary } from '../styles/DefaultStyles';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Budgets = () => {
  const location = useLocation();
  const { budgets } = useSelector((state) => state.budget);

  return (
    <BudgetsWrap>
      <div className="header">
        <Link to="new/budget" state={{ background: location }}>
          <ButtonPrimary>New budget</ButtonPrimary>
        </Link>
      </div>
      <BudgetList budgets={budgets} />
    </BudgetsWrap>
  );
};

const BudgetsWrap = styled.div`
  .header {
    margin-bottom: 30px;
    display: flex;
    justify-content: flex-end;
  }
`;

export default Budgets;
