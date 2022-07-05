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

const EditLabel = () => {
  const { labels, label } = useSelector((state) => state.budget);
  const [msg, setMsg] = useState('');
  const [labelName, setLabelName] = useState(label?.name);
  const navigate = useNavigate();
  const socket = useContext(SocketContext);

  const close = () => {
    navigate(-1);
  };

  const nameAval = () => {
    if (labels.some((lb) => lb.name === labelName)) return false;
    return true;
  };

  const handleEditLabel = (e) => {
    e.preventDefault();
    if (labelName !== '') {
      if (label.name !== labelName) {
        if (nameAval()) {
          const payload = {
            name: labelName,
            id: label._id,
          };
          console.log(payload);
          socket.emit('updateLabel', payload);
          close();
        } else {
          setMsg('Label already exits');
          return false;
        }
      } else {
        close();
      }
    } else {
      setMsg('Name cannot be empty');
    }
  };

  return (
    <Modal visible={true} close={close}>
      <AddWrap>
        <AddNav>
          <div>Edit label</div>
          <Close close={close} />
        </AddNav>
        <AddMain>
          <form onSubmit={handleEditLabel}>
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
              <ButtonPrimary type="submit">Edit label</ButtonPrimary>
            </ButtonWrap>
          </form>
        </AddMain>
      </AddWrap>
    </Modal>
  );
};

export default EditLabel;
