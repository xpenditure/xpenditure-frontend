import React, { useState } from 'react';
import styled from 'styled-components';
import More from '../widgets/More';
import { IoAdd, IoAddSharp } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

const CreateBtnMob = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  return (
    <Wrap>
      <div class="create-new" onClick={() => setVisible(true)}>
        <IoAddSharp />
      </div>
      <More visible={visible} close={() => setVisible(false)} pos="top">
        <div className="link">
          <Link
            state={{ background: location }}
            onClick={() => setVisible(false)}
            to="new/budget"
          >
            New budget
          </Link>
          <Link
            onClick={() => setVisible(false)}
            state={{ background: location }}
            to="new/label"
          >
            New label
          </Link>
        </div>
      </More>
    </Wrap>
  );
};

const Wrap = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999999;
  display: none;

  .create-new {
    background-color: ${(props) => props.theme.colors.btn_color_primary};
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    font-size: 30px;
  }

  @media (max-width: 800px) {
    display: block;
  }
`;

export default CreateBtnMob;
