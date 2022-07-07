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
        <Link onClick={close} to="#">
          <i>
            <BugIcon />
          </i>
          Report a bug
        </Link>
        <Link onClick={close} to="#">
          <i>
            <SupportIcon />
          </i>
          Support
        </Link>
        <Link onClick={close} to="#">
          <i>
            <HelpIcon />
          </i>
          FAQs
        </Link>
      </div>
      <Line />
      <div className="link">
        <Link onClick={close} to="#">
          <i>
            <GithubIcon />
          </i>
          Github
        </Link>
        <Link onClick={close} to="#">
          <i>
            <ShareIcon />
          </i>
          Contribute
        </Link>
      </div>
    </More>
  );
};

export default MoreSide;
