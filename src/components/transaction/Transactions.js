import React from 'react';
import styled from 'styled-components';
import ExpensesList from '../expenses/ExpensesList';
import FundList from '../expenses/FundList';
import TransactionTab from './TransactionTab';
import { Line } from '../../styles/DefaultStyles';
import ExpensesHeader from '../expenses/ExpensesHeader';
import Summary from './Summary';

const Transactions = ({
  activeTab,
  expenses,
  funds,
  budget,
  setActiveTab,
  budgetId,
}) => {
  return (
    <TransactionWrap>
      <ExpensesHeader budgetId={budget._id} />
      <TransactionTab activeTab={activeTab} setActiveTab={setActiveTab} />
      <Inner>
        <TransactionMain>
          {activeTab === 'expenses' && <ExpensesList expenses={expenses} />}
          {activeTab === 'funds' && <FundList funds={funds} budget={budget} />}
        </TransactionMain>
        <Summary budget={budget} />
      </Inner>
    </TransactionWrap>
  );
};

const TransactionWrap = styled.div`
  margin-top: 10px;
  overflow: hidden;
`;
const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const TransactionMain = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  border-radius: ${(props) => props.theme.reset.border_radius};
  width: 65%;
`;

export default Transactions;
