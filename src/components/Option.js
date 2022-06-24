import React, { useContext } from 'react';
import styled from 'styled-components';
import { TransparentOverlay } from '../styles/DefaultStyles';
import TrashIcon from './icons/TrashIcon';
import EditIcon from './icons/EditIcon';
import CheckedIcon from './icons/CheckedIcon';

const Option = ({ visible, close, showEdit, del, handleColor, sltColor }) => {
  const colors = ['#5c2b29', '#614919', '#5b2245', '#1e3a57'];

  return (
    <OptionWrap visible={visible}>
      <TransparentOverlay onClick={close} />
      <OptionInner>
        <Colors>
          {colors.map((color) => (
            <div
              className="color"
              key={color}
              style={{ background: color }}
              onClick={() => handleColor(color)}
            >
              {color === sltColor && <CheckedIcon />}
            </div>
          ))}
        </Colors>
        <Actions>
          <div className="edit" title="Edit Budget" onClick={showEdit}>
            <EditIcon />
          </div>
          <div className="delete" title="Delete Budget" onClick={del}>
            <TrashIcon />
          </div>
        </Actions>
      </OptionInner>
    </OptionWrap>
  );
};

const OptionWrap = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const OptionInner = styled.div`
  width: 400px;
  /* height: 80px;/ */
  position: absolute;
  bottom: 30px;
  right: 30px;
  background-color: #fff;
  border-radius: 5px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
`;

const Colors = styled.div`
  display: flex;
  .color {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  svg {
    width: 17px;
    fill: #fff;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  .edit,
  .delete {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #333;

    svg {
      width: 20px;
    }

    :hover {
      background-color: #ccc;
    }
  }
`;
export default Option;
