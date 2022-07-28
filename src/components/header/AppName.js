import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AppName = () => {
  return (
    <NameWrap>
      <Link to="/dashboard">
        <span className="x">X</span>
        <span className="x x2">X</span>
        <span className="x x3">X</span>
        penditrue
      </Link>
    </NameWrap>
  );
};

const NameWrap = styled.div`
  a {
    font-size: 25px;
    font-weight: 600;
    position: relative;
    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.8;
    color: ${(props) => props.theme.colors.text_color1};

    :hover {
      color: ${(props) => props.theme.colors.text_color2};
    }
  }

  .x {
    position: absolute;
    font-size: 40px;
    opacity: 0.3;
  }

  .x2 {
    margin-left: 10px;
  }

  .x3 {
    margin-right: 10px;
  }
`;

export default AppName;
