import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMoreSide } from '../../features/actionSlice';
import { clearTokenFromStorage } from '../../features/userSlice';
import More from './More';
import { Line } from '../../styles/DefaultStyles';

const MoreSide = () => {
  const { moreSide } = useSelector((state) => state.action);
  const dispatch = useDispatch();

  const close = () => {
    dispatch(toggleMoreSide(false));
  };

  const handleLogout = () => {
    close();
    dispatch(clearTokenFromStorage());
  };

  return (
    <More visible={moreSide} close={close}>
      <div className="link">
        <Link onClick={close} to="#">
          I will be back
        </Link>
        <Link onClick={close} to="#">
          Help
        </Link>
        <Link onClick={close} to="#">
          Support
        </Link>
        <Link onClick={close} to="#">
          FAQs
        </Link>
      </div>
      <Line />
      <div className="link">
        <Link onClick={close} to="#">
          Github
        </Link>
        <Link onClick={close} to="#">
          Contribute
        </Link>
      </div>
    </More>
  );
};

export default MoreSide;
