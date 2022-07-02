import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SocketContext } from '../context/socket';
import BudgetList from '../components/budget/BudgetList';

const Labels = () => {
  const { alias } = useParams();
  const [budgets, setBudgets] = useState([]);

  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.emit('fetchBudgetsByLabel', alias);
    socket.on('fetchBudgetsByLabel', (data) => {
      setBudgets(data);
    });
  }, [alias]);

  useEffect(() => {
    return () => {
      socket.emit('fetchBudgetsByLabel', alias);
      socket.on('fetchBudgetsByLabel', (data) => {
        setBudgets(data);
      });
    };
  }, []);

  return (
    <div>
      <BudgetList budgets={budgets} />
    </div>
  );
};

export default Labels;
