import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import BudgetData from '../components/budget/BudgetData';
import ExpensesHeader from '../components/expenses/ExpensesHeader';
import Transactions from '../components/transaction/Transactions';

const OneBudget = () => {
  const { budgetId } = useParams();
  const { budgets } = useSelector((state) => state.budget);
  const [budget, setBudget] = useState(null);
  const [funds, setFunds] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [activeTab, setActiveTab] = useState('expenses');
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setFunds(budget?.funds);
    setExpenses(budget?.expenses);
  }, [budget]);

  useEffect(() => {
    budgets.filter((budget) => {
      if (budget._id === budgetId) {
        setBudget(budget);
        setLoading(false);
      }
    });
  }, [budgetId, budgets]);

  useEffect(() => {
    setLoading(false);
  }, [budgets]);

  if (loading) return;

  return (
    <>
      {budget && (
        <>
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

            <Transactions
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              expenses={expenses}
              funds={funds}
              budget={budget}
            />
          </OneBudgetWrap>
        </>
      )}
    </>
  );
};

const OneBudgetWrap = styled.div`
  margin-bottom: 100px;
`;
const OneBudgetInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BudgetName = styled.div`
  font-size: 30px;
  color: ${(props) => props.theme.colors.text_color2};
  margin-bottom: 30px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export default OneBudget;
