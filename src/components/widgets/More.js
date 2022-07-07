import React from 'react';
import styled from 'styled-components';

const More = ({ children, close, visible, pos }) => {
  return (
    <MoreWrap visible={visible}>
      <Overlay
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          close();
        }}
      />
      <MoreInner className={pos}>{children}</MoreInner>
    </MoreWrap>
  );
};

const MoreWrap = styled.div`
  display: ${(props) => (props.visible ? 'flex' : 'none')};

  .top {
    bottom: 40px;
    top: auto;
  }
`;

const MoreInner = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  width: 200px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.reset.border_radius};
  box-shadow: ${(props) => props.theme.colors.shadow1};
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  z-index: 999999;

  .link {
    padding: 5px 0;
    display: flex;
    flex-direction: column;

    a,
    p {
      padding: 5px 10px;
      text-decoration: none;
      color: ${(props) => props.theme.colors.text_color2};
      font-size: 14px;
      cursor: pointer;
      display: flex;
      align-items: center;

      :hover {
        color: ${(props) => props.theme.colors.text_color2};
        background-color: ${(props) => props.theme.colors.hover_color1};
      }

      i {
        display: flex;
        margin-right: 8px;
        svg {
          width: 18px;
          fill: ${(props) => props.theme.colors.text_color2};
        }
      }
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  left: 0;
  top: 0;
  cursor: default;
  z-index: 99999;
`;

export default More;
