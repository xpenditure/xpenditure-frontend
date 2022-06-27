import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SocketContext } from '../../context/socket';
import BudgetCard from './BudgetCard';

const BudgetList = () => {
  const socket = useContext(SocketContext);
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    return () => {
      socket.emit('fetchBudgets');
      socket.on('fetchBudgets', (data) => {
        setBudgets(data);
      });
    };
  }, [socket]);

  return (
    <BudgetListWrap>
      {budgets.map((budget) => (
        <BudgetCard key={budget._id} budget={budget} />
      ))}
    </BudgetListWrap>
  );
};

const BudgetListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
`;

export default BudgetList;
