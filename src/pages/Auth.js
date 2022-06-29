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
          setActiveTab(item.alias);
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
  justify-content: center;
  padding: 0 20px;
  z-index: 99998;
  background-color: ${(props) => props.theme.colors.primary};
`;

const AuthInner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0;
`;

const AuthMain = styled.div`
  padding: 30px;
  background-color: ${(props) => props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  border-radius: ${(props) => props.theme.reset.border_radius};
  box-shadow: ${(props) => props.theme.colors.shadow1};
  width: 400px;
`;

export default Auth;
