import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toggleLabelModal } from '../../features/actionSlice';
import { ButtonPrimary, InputWrap } from '../../styles/DefaultStyles';
import Close from '../excerpt/Close';
import Modal from '../modal/Modal';
import { SocketContext } from '../../context/socket';

const AddLabel = () => {
  const { labelModal } = useSelector((state) => state.action);
  const [labelName, setLabelName] = useState('');
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);

  const close = () => {
    dispatch(toggleLabelModal(false));
    setLabelName('');
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
    <Modal visible={labelModal} close={close}>
      <AddLabelWrap>
        <LabelNav>
          <div>Create Label</div>
          <Close close={close} />
        </LabelNav>
        <LabelMain>
          <form onSubmit={handleCreateLabel}>
            <InputWrap>
              <label>Label name</label>
              <input
                value={labelName}
                onChange={(e) => setLabelName(e.target.value)}
              />
            </InputWrap>
            <ButtonWrap>
              <ButtonPrimary type="submit">Add Label</ButtonPrimary>
            </ButtonWrap>
          </form>
        </LabelMain>
      </AddLabelWrap>
    </Modal>
  );
};

const AddLabelWrap = styled.div`
  width: 500px;
  background-color: ${(props) => props.theme.colors.primary};
`;

const LabelNav = styled.div`
  height: 50px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border_color1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const LabelMain = styled.div`
  padding: 20px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default AddLabel;
