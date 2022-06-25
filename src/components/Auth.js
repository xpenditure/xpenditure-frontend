import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  getTokenFromStorage,
  loginUserAsync,
  registerUserAsync,
} from '../features/userSlice';

const Auth = () => {
  const [activeTab, setActiveTab] = useState('register');
  const { isAuth } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTokenFromStorage());
  }, []);

  return (
    <AuthWrap auth={isAuth}>
      <AuthInner>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <AuthMain>
          <LoginForm visible={activeTab === 'login'} />
          <RegisterForm visible={activeTab === 'register'} />
        </AuthMain>
      </AuthInner>
    </AuthWrap>
  );
};

const LoginForm = ({ visible }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email != '' && password != '') {
      const payload = {
        email,
        password,
      };

      dispatch(loginUserAsync(payload));
    }
  };

  return (
    <FormWrap visible={visible}>
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

const RegisterForm = ({ visible }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();

    if (firstName != '' && lastName != '' && email != '' && password != '') {
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
    <FormWrap visible={visible}>
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
        <button>Register</button>
      </form>
    </FormWrap>
  );
};

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'Login', alias: 'login' },
    { name: 'Register', alias: 'register' },
  ];

  return (
    <TabWrap>
      {tabs.map((tab) => {
        return (
          <Tab
            key={tab.alias}
            active={tab.alias === activeTab}
            onClick={(e) => setActiveTab(tab.alias)}
          >
            {tab.name}
          </Tab>
        );
      })}
    </TabWrap>
  );
};

const TabWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const Tab = styled.div`
  margin-right: 20px;
  cursor: pointer;
  padding: 5px 10px;
  position: relative;
  transition: all 300ms linear;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;

  ::after {
    content: '';
    height: 2px;
    background-color: orangered;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: ${(props) => (props.active ? 'scale(1)' : 'scale(0)')};
    transition: all 300ms linear;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  :hover {
    background-color: #eee;
  }
`;

const AuthWrap = styled.div`
  display: ${(props) => (props.auth ? 'none' : 'flex')};
  position: fixed;
  width: 100%;
  height: 100vh;
  justify-content: center;
  padding: 0 20px;
  z-index: 99998;
  background-color: #fff;
`;

const AuthInner = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

const AuthMain = styled.div`
  border: 1px solid red;
  padding: 30px;
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  width: 400px;
`;

const FormWrap = styled.div`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? '1' : '0')};
  height: ${(props) => (props.visible ? 'auto' : '0px')};

  form {
    display: flex;
    flex-direction: column;
  }

  button {
    width: 100%;
    border: none;
    outline: none;
    background-color: #222;
    color: #fff;
    height: 45px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
  }
`;
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    font-size: 12px;
    font-weight: 600;
  }

  input {
    border: 1px solid #999;
    border-radius: 4px;
    outline: none;
    padding: 0 15px;
    height: 40px;
    font-weight: 600;
    color: #333;
  }
`;

const Title = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
  }

  p {
    font-size: 14px;
  }
`;

export default Auth;
