import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import { SocketContext } from '../context/socket';

const Budgets = () => {
  const socket = useContext(SocketContext);
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    return () => {
      socket.emit('fetchBudgets');
      socket.on('fetchBudgets', (data) => setBudgets(data));
    };
  });

  return (
    <BudgetsWrap>
      {budgets.map((budget) => (
        <BudgetCard key={budget._id}>{budget.name}</BudgetCard>
      ))}
    </BudgetsWrap>
  );
};

const BudgetsWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
`;
const BudgetCard = styled.div`
  background-color: ${(props) => props.theme.colors.card_color1};
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  padding: 20px;
  border-radius: 5px;
`;

export default Budgets;
