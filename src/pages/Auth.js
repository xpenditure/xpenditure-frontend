import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Tabs from '../components/auth/Tabs';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import { useSearchParams } from 'react-router-dom';

const Auth = () => {
  const [activeTab, setActiveTab] = useState('login');
  const [searchParams] = useSearchParams();
  const tab = searchParams.get('tab');

  const tabList = [
    { name: 'Login', alias: 'login' },
    { name: 'Register', alias: 'register' },
  ];

  useEffect(() => {
    if (tab) {
      tabList.map((item) => {
        if (item.alias === tab.toLowerCase()) {
          setActiveTab(tab);
        } else {
          setActiveTab('login');
        }
      });
    }
  }, [tab]);

  return (
    <AuthWrap>
      <AuthInner>
        <Tabs
          tabs={tabList}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <AuthMain>
          {activeTab === 'login' && <Login />}
          {activeTab === 'register' && <Register />}
        </AuthMain>
      </AuthInner>
    </AuthWrap>
  );
};

const AuthWrap = styled.div`
  display: flex;
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

export default Auth;
