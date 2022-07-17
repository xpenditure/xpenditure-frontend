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

const Header = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { layout } = useSelector((state) => state.action);

  const handleShowMoreSide = () => {
    dispatch(toggleMoreSide(true));
  };

  const handleChangeLayout = () => {
    dispatch(toggleLayout());
  };

  const handleSideNav = () => {
    dispatch(toggleSideNav());
  };

  return (
    <HeaderWrap>
      <CreateBtnMob />
      <HeaderLeft>
        <IconLg className="menu" onClick={handleSideNav}>
          <MenuIcon />
        </IconLg>
      </HeaderLeft>
      <HeaderRight>
        {location.pathname === '/dashboard' && <CreateBtn />}
        <UserInfo />
        <IconLg onClick={handleChangeLayout}>
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
