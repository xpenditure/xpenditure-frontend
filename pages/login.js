import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUserAsync } from '../features/userSlice';
import {
  Button,
  FormWrap,
  Heading,
  InputGroup,
  InputWrap,
  PageCenter,
} from '../styles/DefaultStyles';
import protectedRoute from '../services/protectedRoute';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };

    dispatch(loginUserAsync(payload));
  };

  return (
    <div>
      <PageCenter>
        <Heading>
          <h1>Welcome Back!</h1>
          <p>It's good to have you back!</p>
        </Heading>
        <FormWrap>
          <form onSubmit={handleLogin}>
            <InputGroup>
              <InputWrap>
                <label>Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </InputWrap>
              <InputWrap>
                <label>Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </InputWrap>
            </InputGroup>
            <Button>
              <button type="submit">Login</button>
            </Button>
          </form>
        </FormWrap>
      </PageCenter>
    </div>
  );
};

export default protectedRoute(Login);
