import React, { useEffect, useContext, useState } from 'react';
import BudgetList from '../components/budget/BudgetList';
import { SocketContext } from '../context/socket';
import { Link, useLocation } from 'react-router-dom';
import { ButtonPrimary } from '../styles/DefaultStyles';
import styled from 'styled-components';

const Budgets = () => {
  const socket = useContext(SocketContext);
  const location = useLocation();
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    return () => {
      socket.emit('fetchBudgets');
      socket.on('fetchBudgets', (data) => {
        setBudgets(data);
        console.log(data);
      });
    };
  }, []);

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
