import React from 'react';
import { useDispatch } from 'react-redux';
import { clearTokenFromStorage } from '../features/userSlice';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearTokenFromStorage());
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
