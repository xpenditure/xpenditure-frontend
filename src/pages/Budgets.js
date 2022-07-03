import React, { useEffect, useContext, useState } from 'react';
import BudgetList from '../components/budget/BudgetList';
import { SocketContext } from '../context/socket';
import { Link, useLocation } from 'react-router-dom';
import { ButtonPrimary } from '../styles/DefaultStyles';

const Budgets = () => {
  const socket = useContext(SocketContext);
  const location = useLocation();
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    return () => {
      socket.emit('fetchBudgets');
      socket.on('fetchBudgets', (data) => setBudgets(data));
    };
  }, []);

  return (
    <div>
      <div>
        <Link to="new/budget" state={{ background: location }}>
          <ButtonPrimary>New budget</ButtonPrimary>
        </Link>
      </div>
      <BudgetList budgets={budgets} />
    </div>
  );
};

export default Budgets;
