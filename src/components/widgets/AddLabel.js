import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { toggleLabelModal } from '../../features/actionSlice';
import Modal from '../modal/Modal';

const AddLabel = () => {
  const { labelModal } = useSelector((state) => state.action);
  const dispatch = useDispatch();

  const close = () => {
    dispatch(toggleLabelModal(false));
  };

  return (
    <Modal visible={labelModal} close={close}>
      <AddLabelWrap>
        <div>hell fromm add label</div>
      </AddLabelWrap>
    </Modal>
  );
};

const AddLabelWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

export default AddLabel;
