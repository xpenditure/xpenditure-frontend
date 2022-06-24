import { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../../context/socket';

const Dashboard = () => {
  const socket = useContext(SocketContext);

  const [budgets, setBudgets] = useState([]);
  const [name, setName] = useState('');
  const [total, setTotal] = useState('');
  const [summary, setSummary] = useState('');

  useEffect(() => {
    return () => {
      socket.emit('fetchBudgets');
      socket.on('fetchBudgets', (data) => {
        setBudgets(data);
      });

      return () => socket.disconnect();
    };
  }, [socket]);

  const handleCreateBudget = (e) => {
    e.preventDefault();
    const payload = {
      name,
      total: parseFloat(total),
      summary,
    };
    socket.emit('createBudget', payload);
    setName('');
    setTotal('');
    setSummary('');
  };

  const handleDeleteBudget = (id) => {
    console.log(id);
    socket.emit('deleteBudget', id);
  };

  return (
    <div>
      <h2>Dashboard </h2>

      <div>
        <form onSubmit={handleCreateBudget}>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <input value={total} onChange={(e) => setTotal(e.target.value)} />
          <input value={summary} onChange={(e) => setSummary(e.target.value)} />
          <button type="submit">Create Budget</button>
        </form>
      </div>

      {budgets?.map((budget) => (
        <div key={budget._id}>
          <div>
            <span>{budget.name}</span> --- <span>{budget.total}</span>
          </div>
          <button onClick={() => handleDeleteBudget(budget._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
