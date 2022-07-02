import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import BudgetList from '../components/budget/BudgetList';
import { SocketContext } from '../context/socket';

const Budgets = () => {
  const socket = useContext(SocketContext);
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    return () => {
      socket.emit('fetchBudgets');
      socket.on('fetchBudgets', (data) => setBudgets(data));
    };
  }, []);

  return <BudgetList budgets={budgets} />;
};

export default Budgets;
