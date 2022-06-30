import React from 'react';
import styled from 'styled-components';
import UserInfo from '../widgets/UserInfo';
import NavTab from './NavTab';

const Sidenav = () => {
  return (
    <SidenavWrap>
      <SidenavInner>
        <SidenavTop>
          <NavTab />
        </SidenavTop>
        <SidenavBottom>
          <UserInfo />
        </SidenavBottom>
      </SidenavInner>
    </SidenavWrap>
  );
};

const SidenavWrap = styled.div`
  display: flex;
  height: 100vh;
  width: 300px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-right: 1px solid ${(props) => props.theme.colors.border_color1};
`;

const SidenavInner = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
`;

const SidenavTop = styled.div`
  flex: 1;
  width: 100%;
`;

const SidenavBottom = styled.div`
  width: 100%;
`;

export default Sidenav;
