import React, { useState } from 'react';
import styled from 'styled-components';

const Auth = () => {
  return (
    <AuthWrap>
      <LoginForm />
      <RegisterForm />
    </AuthWrap>
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <FormWrap>
        <form>
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
    </div>
  );
};

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <FormWrap>
        <form>
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
          <button>Register</button>
        </form>
      </FormWrap>
    </div>
  );
};

const AuthWrap = styled.div``;
const FormWrap = styled.div``;
const InputGroup = styled.div``;
const InputWrap = styled.div``;

export default Auth;
