import React, { useState } from 'react';
import styled from 'styled-components';
import { EllipsisHorizontalIcon, LogoutIcon } from '../icons';
import { useDispatch, useSelector } from 'react-redux';
import More from './More';
import { clearTokenFromStorage } from '../../features/userSlice';

const UserInfo = () => {
  const { user } = useSelector((state) => state.user);
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();

  const open = () => {
    setMenu(true);
  };

  const close = () => {
    setMenu(false);
  };

  const handleLogout = () => {
    close();
    dispatch(clearTokenFromStorage());
  };

  return (
    <UserInfoWrap>
      <div className="user-info">
        <div className="avatar"></div>
        <div className="details">
          <div className="name">
            {user?.firstName} {user?.lastName}
          </div>
          <div className="email">{user?.email}</div>
        </div>
      </div>
      <ShowMenu>
        <div className="icon-more" onClick={open}>
          <EllipsisHorizontalIcon />
        </div>
        <More visible={menu} close={close} pos="top">
          <div className="link">
            <p onClick={handleLogout}>
              <i>
                <LogoutIcon />
              </i>
              Sign out
            </p>
          </div>
        </More>
      </ShowMenu>
    </UserInfoWrap>
  );
};

const UserInfoWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 20px 20px;
  width: 100%;
  justify-content: space-between;

  .avatar {
    width: 40px !important;
    height: 40px;
    width: 18px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.primary};
    margin-right: 10px;
    display: flex;
  }

  .user-info {
    display: flex;
    align-items: center;

    flex: 1;
  }

  .details {
    display: flex;
    flex-direction: column;
    line-height: 1;
    font-size: 14px;
    color: ${(props) => props.theme.colors.text_color2};
  }

  .name,
  .email {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 80%;
  }

  .name {
    font-weight: 600;
    margin-bottom: 5px;
  }

  .email {
    font-size: 12px;
    font-weight: 600;
  }
`;

const ShowMenu = styled.div`
  position: relative;

  .icon-more {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;

    :hover {
      background-color: ${(props) => props.theme.colors.hover_color1};
    }

    svg {
      width: 18px;
      fill: ${(props) => props.theme.colors.text_color2};
    }
  }
`;

export default UserInfo;
