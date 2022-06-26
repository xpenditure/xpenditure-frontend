import React from 'react';
import Logout from '../components/auth/Logout';
import BudgetList from '../components/budget/BudgetList';

const Dashboard = () => {
  return (
    <div>
      <div>This is dashboard</div>
      <Logout />
      <BudgetList />
    </div>
  );
};

export default Dashboard;
