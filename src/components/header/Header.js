import React from 'react';
import styled from 'styled-components';
import { EllipsisHorizontalIcon, GridIcon, ListIcon, MenuIcon } from '../icons';
import MoreSide from '../widgets/MoreSide';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleMoreSide,
  toggleLayout,
  toggleSideNav,
} from '../../features/actionSlice';
import UserInfo from '../widgets/UserInfo';
import { IconLg } from '../../styles/DefaultStyles';
import CreateBtn from './CreateBtn';
import { useLocation } from 'react-router-dom';
import CreateBtnMob from './CreateBtnMob';
import AppName from './AppName';

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { layout, sideNav } = useSelector((state) => state.action);

  const handleShowMoreSide = () => {
    dispatch(toggleMoreSide(true));
  };

  const handleChangeLayout = () => {
    let val = layout === 'grid' ? 'list' : 'grid';
    dispatch(toggleLayout(val));
  };

  const handleSideNav = () => {
    sideNav === true
      ? dispatch(toggleSideNav(false))
      : dispatch(toggleSideNav(true));
  };

  return (
    <HeaderWrap>
      {location.pathname === '/dashboard' && <CreateBtnMob />}
      <HeaderLeft>
        <IconLg className="menu" onClick={handleSideNav}>
          <MenuIcon />
        </IconLg>
        <AppName />
      </HeaderLeft>
      <HeaderRight>
        {location.pathname === '/dashboard' && <CreateBtn />}
        <UserInfo />
        <IconLg onClick={handleChangeLayout} className="icon-layout">
          {layout === 'grid' ? <ListIcon /> : <GridIcon />}
        </IconLg>
        <MoreItem>
          <IconLg onClick={handleShowMoreSide}>
            <EllipsisHorizontalIcon />
          </IconLg>
          <MoreSide />
        </MoreItem>
      </HeaderRight>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  svg {
    width: 20px;
    fill: ${(props) => props.theme.colors.text_color2};
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  .menu {
    margin-right: 20px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  .icon-layout {
    @media (max-width: 600px) {
      display: none;
    }
  }

  .noti {
    margin-left: 20px;
    a {
      display: flex;
    }
  }
`;

const MoreItem = styled.div`
  position: relative;
  margin-left: 10px;
`;

export default Header;
