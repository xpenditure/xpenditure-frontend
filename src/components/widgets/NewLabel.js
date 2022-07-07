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
import { useSelector } from 'react-redux';

const NewLabel = () => {
  const [labelName, setLabelName] = useState('');
  const [msg, setMsg] = useState('');
  const { labels } = useSelector((state) => state.budget);
  const navigate = useNavigate();
  const socket = useContext(SocketContext);

  const close = () => {
    setLabelName('');
    navigate(-1);
  };

  const nameAval = () => {
    if (labels.some((lb) => lb.name === labelName)) return false;
    return true;
  };

  const handleCreateLabel = (e) => {
    e.preventDefault();
    if (labelName !== '') {
      if (nameAval()) {
        const payload = {
          name: labelName,
        };
        socket.emit('createLabel', payload);
        close();
      } else {
        setMsg('Label already exits');
        return false;
      }
    }
  };

  return (
    <Modal visible={true} close={close}>
      <AddWrap>
        <AddNav>
          <div>Create label</div>
          <Close close={close} />
        </AddNav>
        <AddMain>
          <form onSubmit={handleCreateLabel}>
            <InputWrap>
              <label>Label name</label>
              <input
                value={labelName}
                onChange={(e) => {
                  setLabelName(e.target.value);
                  setMsg('');
                }}
              />
              <p className="danger">{msg}</p>
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
