import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BudgetData from '../components/budget/BudgetData';

const OneBudget = () => {
  const { budgetId } = useParams();
  const { budgets } = useSelector((state) => state.budget);
  const [budget, setBudget] = useState({});

  useEffect(() => {
    budgets.filter((budget) => {
      if (budget._id === budgetId) {
        setBudget(budget);
      }
    });
  }, [budgetId, budgets]);

  return (
    <OneBudgetWrap>
      <BudgetName>{budget.name}</BudgetName>
      <OneBudgetInner>
        <BudgetData budget={budget} budgetId={budgetId} />
      </OneBudgetInner>
    </OneBudgetWrap>
  );
};

const OneBudgetWrap = styled.div``;
const OneBudgetInner = styled.div`
  display: flex;
  justify-content: center;
`;

const BudgetName = styled.div`
  font-size: 30px;
  color: ${(props) => props.theme.colors.text_color2};
`;

export default OneBudget;
