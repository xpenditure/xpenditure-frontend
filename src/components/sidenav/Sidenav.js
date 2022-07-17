import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toggleSideNav } from '../../features/actionSlice';
import NavTab from './NavTab';
import UserInfoMob from '../widgets/UserInfoMob';

const Sidenav = () => {
  const { sideNav } = useSelector((state) => state.action);
  const dispatch = useDispatch();

  return (
    <>
      <Overlay
        active={sideNav}
        onClick={() => dispatch(toggleSideNav(false))}
      />
      <SidenavWrap active={sideNav}>
        <SidenavInner>
          <SidenavTop>
            <NavTab active={sideNav} />
          </SidenavTop>
          <SidenavBottom>
            <UserInfoMob />
          </SidenavBottom>
        </SidenavInner>
      </SidenavWrap>
    </>
  );
};

const SidenavWrap = styled.div`
  display: flex;
  height: 100vh;
  width: ${(props) => (props.active ? '300px' : '60px')};
  background-color: ${(props) => props.theme.colors.secondary};
  border-right: 1px solid ${(props) => props.theme.colors.border_color1};
  overflow: hidden;
  transition: all 300ms;

  @media (max-width: 800px) {
    position: fixed;
    left: 0;
    top: 0;
    width: 300px;
    z-index: 999999;
    margin-left: ${(props) => (props.active ? '0px' : '-300px')};
  }
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

const Overlay = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(0, 0, 0, 0);
  z-index: 999999;

  @media (max-width: 800px) {
    display: ${(props) => (props.active ? 'block' : 'none')};
  }
`;

export default Sidenav;
