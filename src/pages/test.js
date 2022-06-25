import React, { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/socketContext';

const index = () => {
  const socket = useContext(SocketContext);
  const [budgetName, setBudgetName] = useState('');
  const [budgetTotal, setBudgetTotal] = useState('');

  const [budgetName1, setBudgetName1] = useState('');
  const [budgetTotal1, setBudgetTotal1] = useState('');
  const [id, setId] = useState('');
  const [budgetSummary, setBudgetSummary] = useState('');

  const [data, setData] = useState([]);

  useEffect(() => {
    return () => {
      socket.emit('fetchBudgets');
      socket.on('fetchBudgets', (data) => setData(data));
    };
  }, []);

  const handleCreateBudget = (e) => {
    e.preventDefault();
    const payload = {
      budgetName,
      budgetTotal,
      budgetSummary: `Summary for ${budgetName}`,
      budgetColor: '#fff',
    };
    socket.emit('createBudget', payload);
    setBudgetName('');
    setBudgetTotal('');
  };

  const handleUpdateBudget = (e) => {
    e.preventDefault();
    const payload = {
      budgetTotal: budgetTotal1,
      budgetName: budgetName1,
      id,
      budgetSummary,
    };
    socket.emit('updateBudget', payload);
    setBudgetName1('');
    setBudgetTotal1('');
    setBudgetSummary('');
    setId('');
  };

  const handleBudgetClick = (budget) => {
    setBudgetTotal1(budget.total);
    setBudgetName1(budget.name);
    setBudgetSummary(budget.summary);
    setId(budget._id);
  };

  const handleDeleteBudget = (id) => {
    socket.emit('deleteBudget', id);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <h1>Home </h1>
      <div>
        <form onSubmit={handleCreateBudget}>
          <input
            placeholder="Budget name"
            value={budgetName}
            onChange={(e) => setBudgetName(e.target.value)}
            type="text"
          />
          <input
            placeholder="Budget total"
            value={budgetTotal}
            onChange={(e) => setBudgetTotal(e.target.value)}
            type="text"
          />
          <button>Submit budget</button>
        </form>

        <div>
          {data?.map((budget) => {
            return (
              <div key={budget._id}>
                <div onClick={() => handleBudgetClick(budget)}>
                  {budget.name} - {budget.total}
                </div>
                <button onClick={() => handleDeleteBudget(budget._id)}>
                  X
                </button>
              </div>
            );
          })}
        </div>
        <div>
          <form onSubmit={handleUpdateBudget}>
            <input
              placeholder="Budget name"
              value={budgetName1}
              onChange={(e) => setBudgetName1(e.target.value)}
              type="text"
            />
            <input
              placeholder="Budget total"
              value={budgetTotal1}
              onChange={(e) => setBudgetTotal1(e.target.value)}
              type="text"
            />
            <button>Update budget</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default index;
