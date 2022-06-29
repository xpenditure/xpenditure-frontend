import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  FormWrap,
  InputGroup,
  InputWrap,
  Title,
  ButtonPrimary,
} from '../../styles/DefaultStyles';
import { registerUserAsync } from '../../features/userSlice';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      firstName !== '' &&
      lastName !== '' &&
      email !== '' &&
      password !== ''
    ) {
      const payload = {
        firstName,
        lastName,
        email,
        password,
      };

      dispatch(registerUserAsync(payload));
    }
  };

  return (
    <FormWrap>
      <Title>
        <h1>Register</h1>
        <p>Create an account for free!</p>
      </Title>
      <form onSubmit={handleRegister}>
        <InputGroup>
          <InputWrap>
            <label>First name</label>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputWrap>
          <InputWrap>
            <label>Last name</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </InputWrap>
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
        <ButtonPrimary>Register</ButtonPrimary>
      </form>
    </FormWrap>
  );
};

export default Register;
