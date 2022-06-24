import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';
import BudgetList from '../components/BudgetList';
import CreateBudget from '../components/CreateBudget';
import EditBudget from '../components/EditBudget';
import Header from '../components/Header';
import { SocketContext } from '../context/socket';

const Home = () => {
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [budgets, setBudgets] = useState([]);
  const [budget, setBudget] = useState({});

  const socket = useContext(SocketContext);

  useEffect(() => {
    return () => {
      socket.emit('fetchBudgets');
      socket.on('fetchBudgets', setBudgets);
    };
  }, [socket]);

  const handleCloseCreateModal = () => {
    setCreateModal(false);
    setEditModal(false);
  };

  const handleCloseEditModal = () => {
    setEditModal(false);
    setCreateModal(false);
  };

  const handleShowCreateModal = () => {
    setCreateModal(true);
    setEditModal(false);
  };

  const handleShowEditModal = () => {
    setEditModal(true);
    setCreateModal(false);
  };

  return (
    <div>
      <Head>
        <title>Xpenditure</title>
        <meta
          name="description"
          content="Track your budgets and expenditures easily"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header addClick={handleShowCreateModal} />
        <CreateBudget visible={createModal} close={handleCloseCreateModal} />
        <BudgetList
          budgets={budgets}
          setBudget={setBudget}
          showEdit={handleShowEditModal}
        />
        <EditBudget
          budget={budget}
          visible={editModal}
          close={handleCloseEditModal}
        />
      </main>
    </div>
  );
};

export default Home;
