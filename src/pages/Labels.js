import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SocketContext } from '../context/socket';
import BudgetList from '../components/budget/BudgetList';
import { useSelector } from 'react-redux';

const Labels = () => {
  const { labelId } = useParams();
  const [filteredBudgets, setFilteredBudgets] = useState([]);

  /*****
   * === TODO ===
   *
   * Create a filter function that will filter the
   * already fetched budgets from redux and show it here
   * instead of making a new request everytime. This
   * filtering would make it load faster.
   *
   */

  const { budgets } = useSelector((state) => state.budget);
  // const socket = useContext(SocketContext);

  const filterById = () => {
    let newBudget = [];
    budgets.filter((budget) => {
      budget.labels.map((label) => {
        if (label._id === labelId) {
          newBudget.push(budget);
        }
      });
    });
    setFilteredBudgets(newBudget);
  };

  useEffect(() => {
    filterById();
  }, [budgets, labelId]);

  // useEffect(() => {
  //   socket.emit('fetchBudgetsByLabel', labelId);
  //   socket.on('fetchBudgetsByLabel', (data) => {
  //     setBudgets(data);
  //   });
  // }, [labelId]);

  // useEffect(() => {
  //   return () => {
  //     socket.emit('fetchBudgetsByLabel', alias);
  //     socket.on('fetchBudgetsByLabel', (data) => {
  //       setBudgets(data);
  //     });
  //   };
  // }, []);

  return (
    <div>
      <BudgetList budgets={filteredBudgets} />
    </div>
  );
};

export default Labels;
