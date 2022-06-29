import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  FormWrap,
  InputGroup,
  InputWrap,
  Title,
} from '../../styles/DefaultStyles';
import { loginUserAsync } from '../../features/userSlice';

const Login = () => {
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
        <button>Login</button>
      </form>
    </FormWrap>
  );
};

export default Login;
