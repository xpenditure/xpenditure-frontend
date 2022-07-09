import React, { useState } from 'react';
import styled from 'styled-components';
import { CaretDownIcon, EllipsisHorizontalIcon, LogoutIcon } from '../icons';
import { useDispatch, useSelector } from 'react-redux';
import More from './More';
import { clearTokenFromStorage } from '../../features/userSlice';
import { Line } from '../../styles/DefaultStyles';

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
    <UserInfoWrap onClick={open}>
      <div className="avatar">
        {user?.avatar && <img src={user.avatar} alt="Profile Image" />}
      </div>
      <ShowMenu>
        <div className="icon-more">
          <CaretDownIcon />
        </div>
        <More visible={menu} close={close}>
          <div className="details">
            <div className="name">
              {user?.firstName} {user?.lastName}
            </div>
            <div className="email">{user?.email}</div>
          </div>
          <Line />
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
  margin-right: 20px;
  cursor: pointer;

  .avatar {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.input_color1};
    display: flex;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    line-height: 1;
    font-size: 14px;
    color: ${(props) => props.theme.colors.text_color2};
    flex: 1;
    padding: 20px;
  }

  .name,
  .email {
    font-weight: 600;
  }

  .name {
    margin-bottom: 5px;
  }

  .email {
    font-size: 12px;
  }
`;

const ShowMenu = styled.div`
  position: relative;

  .icon-more {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;

    svg {
      width: 18px;
      fill: ${(props) => props.theme.colors.text_color2};
    }
  }
`;

export default UserInfo;
