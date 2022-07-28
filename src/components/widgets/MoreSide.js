import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMoreSide } from '../../features/actionSlice';
import { clearTokenFromStorage } from '../../features/userSlice';
import More from './More';
import { Line } from '../../styles/DefaultStyles';
import {
  HelpIcon,
  ShareIcon,
  GithubIcon,
  SupportIcon,
  BugIcon,
} from '../icons';

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
        <a href="mailto:jerrynwosu007@gmail.com" onClick={close} to="#">
          <i>
            <BugIcon />
          </i>
          Report a bug
        </a>
        <a href="https://github.com/xpenditure" onClick={close} to="#">
          <i>
            <HelpIcon />
          </i>
          Support
        </a>
        <a href="https://twitter.com/codeofjay" onClick={close} to="#">
          <i>
            <SupportIcon />
          </i>
          Say Hi
        </a>
      </div>
      <Line />
      <div className="link">
        <a href="https://github.com/xpenditure" onClick={close} to="#">
          <i>
            <GithubIcon />
          </i>
          Github
        </a>
        <a href="https://github.com/xpenditure" onClick={close} to="#">
          <i>
            <ShareIcon />
          </i>
          Contribute
        </a>
      </div>
    </More>
  );
};

export default MoreSide;
