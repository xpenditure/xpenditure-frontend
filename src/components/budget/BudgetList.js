import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../../context/socket';

const BudgetList = () => {
  const socket = useContext(SocketContext);
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    return () => {
      socket.emit('fetchBudgets');
      socket.on('fetchBudgets', (data) => {
        setBudgets(data);
        console.log(data);
      });
    };
  }, [socket]);

  return (
    <div>
      {budgets.map((budget) => (
        <div key={budget._id}>{budget.name}</div>
      ))}
    </div>
  );
};

export default BudgetList;
