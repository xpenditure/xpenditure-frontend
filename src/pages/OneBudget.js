import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BudgetData from '../components/budget/BudgetData';
import ExpensesHeader from '../components/expenses/ExpensesHeader';
import ExpensesList from '../components/expenses/ExpensesList';
import FundList from '../components/expenses/FundList';
import { EditIcon } from '../components/icons';
import { IconSm, Line } from '../styles/DefaultStyles';

const OneBudget = () => {
  const { budgetId } = useParams();
  const { budgets } = useSelector((state) => state.budget);
  const [budget, setBudget] = useState({});
  const [funds, setFunds] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [activeTab, setActiveTab] = useState('expenses');

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
      <ExpensesHeader budgetId={budgetId} />
      <TransactionTabs>
        <div
          className={activeTab === 'expenses' ? 'active tab' : 'tab'}
          onClick={() => setActiveTab('expenses')}
        >
          <i>
            <EditIcon />
          </i>
          Expenses
        </div>
        <div
          className={activeTab === 'funds' ? 'active tab' : 'tab'}
          onClick={() => setActiveTab('funds')}
        >
          <i>
            <EditIcon />
          </i>
          Funds
        </div>
      </TransactionTabs>
      <Line />
      <Transactions>
        {activeTab === 'expenses' && <ExpensesList expenses={expenses} />}
        {activeTab === 'funds' && <FundList funds={funds} />}
      </Transactions>
    </OneBudgetWrap>
  );
};

const OneBudgetWrap = styled.div``;
const OneBudgetInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Transactions = styled.div`
  margin-top: 10px;
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  padding: 20px;
  border-radius: ${(props) => props.theme.reset.border_radius};
`;

const BudgetName = styled.div`
  font-size: 30px;
  color: ${(props) => props.theme.colors.text_color2};
`;

const TransactionTabs = styled.div`
  display: flex;

  .active::after {
    content: '';
    width: 100%;
    height: 2px;
    background-color: orangered;
    position: absolute;
    bottom: 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${(props) => props.theme.reset.border_radius};
    color: ${(props) => props.theme.colors.text_color2};
    padding: 5px 10px;
    cursor: pointer;
    position: relative;
    transition: all 300ms;

    :hover {
      background-color: ${(props) => props.theme.colors.hover_color1};
    }

    i {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 8px;
      svg {
        fill: ${(props) => props.theme.colors.text_color2};
        width: 20px;
      }
    }
  }
`;

export default OneBudget;
