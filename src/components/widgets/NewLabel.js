import React, { useState, useContext } from 'react';
import {
  ButtonPrimary,
  InputWrap,
  AddWrap,
  AddMain,
  AddNav,
  ButtonWrap,
} from '../../styles/DefaultStyles';
import Close from '../excerpt/Close';
import Modal from '../modal/Modal';
import { SocketContext } from '../../context/socket';
import { useNavigate } from 'react-router-dom';

const NewLabel = () => {
  const [labelName, setLabelName] = useState('');
  const navigate = useNavigate();
  const socket = useContext(SocketContext);

  const close = () => {
    setLabelName('');
    navigate(-1);
  };

  const handleCreateLabel = (e) => {
    e.preventDefault();
    if (labelName !== '') {
      const payload = {
        name: labelName,
      };
      socket.emit('createLabel', payload);
      close();
    }
  };

  return (
    <Modal visible={true} close={close}>
      <AddWrap>
        <AddNav>
          <div>Create Label</div>
          <Close close={close} />
        </AddNav>
        <AddMain>
          <form onSubmit={handleCreateLabel}>
            <InputWrap>
              <label>Label name</label>
              <input
                value={labelName}
                onChange={(e) => setLabelName(e.target.value)}
              />
            </InputWrap>
            <ButtonWrap>
              <ButtonPrimary type="submit">Add label</ButtonPrimary>
            </ButtonWrap>
          </form>
        </AddMain>
      </AddWrap>
    </Modal>
  );
};

export default NewLabel;
