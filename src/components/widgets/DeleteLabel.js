import React, { useState, useContext } from 'react';
import {
  ButtonDanger,
  AddWrap,
  AddNav,
  AddMain,
  InputWrap,
  DelInfo,
} from '../../styles/DefaultStyles';
import Close from '../excerpt/Close';
import Modal from '../modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDelLabelModal } from '../../features/actionSlice';
import { SocketContext } from '../../context/socket';
import { useNavigate } from 'react-router-dom';

const DeleteLabel = () => {
  const { delLabelModal } = useSelector((state) => state.action);
  const { label } = useSelector((state) => state.budget);
  const [labelName, setLabelName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const socket = useContext(SocketContext);

  const close = () => {
    dispatch(toggleDelLabelModal(false));
    setLabelName('');
  };

  const handleDeleteLabel = (e) => {
    e.preventDefault();

    socket.emit('deleteLabel', label._id);
    close();
    navigate('/dashboard');
  };

  return (
    <Modal visible={delLabelModal} close={close}>
      <AddWrap>
        <AddNav>
          <div>Delete label</div>
          <Close close={close} />
        </AddNav>
        <AddMain>
          <DelInfo>
            <p>
              This action <span>cannot</span> be undone. This will delete the
              label and remove all budget associated with it without deleting
              the budget itself.
            </p>
            <p>
              please type <span>{label?.name?.toLowerCase()}</span> to confirm
            </p>
          </DelInfo>
          <form onSubmit={handleDeleteLabel}>
            <InputWrap>
              <input
                value={labelName}
                onChange={(e) => setLabelName(e.target.value)}
              />
            </InputWrap>
            <ButtonDanger
              fill="true"
              className={
                labelName?.toLowerCase() === label?.name?.toLowerCase()
                  ? ''
                  : 'btn-disabled'
              }
            >
              Delete label
            </ButtonDanger>
          </form>
        </AddMain>
      </AddWrap>
    </Modal>
  );
};

export default DeleteLabel;
