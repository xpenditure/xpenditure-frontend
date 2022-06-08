import Head from 'next/head';
import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:8000', {
  transports: ['websocket', 'polling', 'flashsocket'],
});

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/api/todos');

        setTodos(data.todos);
      } catch (error) {
        console.log(error);
      }
    };
    return () => fetchTodo();
  }, []);

  const handleMessage = () => {
    const message = 'Hard coded message!';
    socket.emit('message', message);
  };

  const handleAddTodo = () => {
    const payload = {
      title,
      completed: false,
    };

    socket.emit('AddTodo', payload);
  };

  socket.on('TodoAdded', (data) => {
    const items = todos.slice();
    items.push(data.todo);
    setTodos(items);
  });

  const handleUpdateTodo = () => {};

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
        <h1>Hello, Xpenditure Frontend App</h1>
        <button onClick={() => handleMessage()}>Emit Message</button>
      </main>
      <div>
        <input
          type="text"
          value={title}
          placeholder="Enter todo item"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <div>
        {todos && todos.map((todo) => <div key={todo._id}>{todo.title}</div>)}
      </div>
    </div>
  );
}
