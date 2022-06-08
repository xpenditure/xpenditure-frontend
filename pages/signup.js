import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUserAsync } from '../features/userSlice';
import protectedRoute from '../services/protectedRoute';
import {
  FormWrap,
  InputGroup,
  InputWrap,
  PageCenter,
  Button,
  Heading,
} from '../styles/DefaultStyles';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();

    const payload = {
      firstName,
      lastName,
      email,
      password,
    };

    console.log(payload);
    dispatch(registerUserAsync(payload));
  };

  return (
    <div>
      <PageCenter>
        <Heading>
          <h1>Sign Up!</h1>
          <p>
            Hey you, create a <b>free</b> account!
          </p>
        </Heading>
        <FormWrap>
          <form onSubmit={handleRegister}>
            <InputGroup>
              <InputWrap>
                <label>First name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </InputWrap>

              <InputWrap>
                <label>Last name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </InputWrap>
              <InputWrap>
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputWrap>
              <InputWrap>
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputWrap>
            </InputGroup>
            <Button>
              <button type="submit">Sign Up</button>
            </Button>
          </form>
        </FormWrap>
      </PageCenter>
    </div>
  );
};

export default protectedRoute(Signup);
