import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMoreSide } from '../../features/actionSlice';

const MoreSide = () => {
  const { moreSide } = useSelector((state) => state.action);
  const dispatch = useDispatch();

  const close = () => {
    dispatch(toggleMoreSide(false));
  };

  return (
    <MoreSideWrap visible={moreSide}>
      <Overlay onClick={close} />
      <MoreSideInner>
        <div className="info-link">
          <Link to="#">I will be back</Link>
          <Link to="#">Help</Link>
          <Link to="#">Support</Link>
          <Link to="#">FAQs</Link>
        </div>
        <Line />
        <div className="logout-link">
          <div className="logout">Logout</div>
        </div>
      </MoreSideInner>
    </MoreSideWrap>
  );
};

const MoreSideWrap = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};
`;

const MoreSideInner = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  width: 200px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: ${(props) => props.theme.reset.border_radius};
  box-shadow: ${(props) => props.theme.colors.shadow1};
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  z-index: 999999;

  .info-link,
  .logout-link {
    padding: 5px 0;
    display: flex;
    flex-direction: column;

    a,
    .logout {
      padding: 5px 10px;
      text-decoration: none;
      color: ${(props) => props.theme.colors.text_color2};
      font-size: 14px;

      :hover {
        color: ${(props) => props.theme.colors.text_color1};
        background-color: ${(props) => props.theme.colors.hover_color1};
      }
    }
  }
`;

const Line = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.border_color1};
  height: 1px;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  left: 0;
  top: 0;
`;

export default MoreSide;
