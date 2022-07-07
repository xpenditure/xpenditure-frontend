import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BudgetData from '../components/budget/BudgetData';
import ExpensesHeader from '../components/expenses/ExpensesHeader';
import ExpensesList from '../components/expenses/ExpensesList';
import { SocketContext } from '../context/socket';

const OneBudget = () => {
  const { budgetId } = useParams();
  const { budgets } = useSelector((state) => state.budget);
  const [budget, setBudget] = useState({});
  const [funds, setFunds] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const socket = useContext(SocketContext);

  useEffect(() => {
    setFunds(budget?.funds);
    setExpenses(budget?.expenses);
  }, [budget]);

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
        <BudgetData
          budget={budget}
          budgetId={budgetId}
          funds={funds}
          expenses={expenses}
        />
      </OneBudgetInner>
      <ExpensesHeader />
      <ExpensesList expenses={expenses} />
    </OneBudgetWrap>
  );
};

const OneBudgetWrap = styled.div``;
const OneBudgetInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BudgetName = styled.div`
  font-size: 30px;
  color: ${(props) => props.theme.colors.text_color2};
`;

export default OneBudget;
