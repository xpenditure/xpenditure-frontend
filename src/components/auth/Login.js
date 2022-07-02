import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormWrap,
  InputGroup,
  InputWrap,
  Title,
  ButtonPrimary,
} from '../../styles/DefaultStyles';
import { loginUserAsync } from '../../features/userSlice';

const Login = ({ status }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email !== '' && password !== '') {
      const payload = {
        email,
        password,
      };

      dispatch(loginUserAsync(payload));
    }
  };
  return (
    <FormWrap>
      <Title>
        <h1>Login</h1>
        <p>Welcome back, Bud!</p>
      </Title>

      <form onSubmit={handleLogin}>
        <InputGroup>
          <InputWrap>
            <label>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} />
          </InputWrap>
          <InputWrap>
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrap>
        </InputGroup>
        <ButtonPrimary className={status === 'loading' ? 'btn-disabled' : ''}>
          {status === 'loading' ? 'Loading...' : 'Login'}
        </ButtonPrimary>
      </form>
    </FormWrap>
  );
};

export default Login;
