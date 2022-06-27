import React from 'react';
import { useDispatch } from 'react-redux';
import { clearTokenFromStorage } from '../../features/userSlice';
import { LogoutIcon } from '../icons';
import { TabIcon, TabItem, TabName } from './styled';

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearTokenFromStorage());
  };
  return (
    <>
      <TabItem onClick={handleLogout}>
        <TabIcon>
          <LogoutIcon />
        </TabIcon>
        <TabName>Logout</TabName>
      </TabItem>
    </>
  );
};

export default Logout;
