import React from 'react';
import { useSelector } from 'react-redux';
import { ButtonPrimary } from '../styles/DefaultStyles';
import { Link } from 'react-router-dom';

const Home = () => {
  const { isAuth } = useSelector((state) => state.user);
  return (
    <div>
      <div>This is home page</div>
      {isAuth === true ? (
        <Link to="/dashboard">
          <ButtonPrimary>Go to Dashboard</ButtonPrimary>
        </Link>
      ) : (
        <Link to="/auth?tab=login">
          <ButtonPrimary>Login or Register</ButtonPrimary>
        </Link>
      )}
    </div>
  );
};

export default Home;
