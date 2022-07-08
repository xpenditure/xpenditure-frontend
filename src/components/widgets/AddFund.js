import React, { useState, useContext } from 'react';
import {
  ButtonPrimary,
  InputWrap,
  AddWrap,
  AddNav,
  AddMain,
  ButtonWrap,
} from '../../styles/DefaultStyles';
import Modal from '../modal/Modal';
import Close from '../excerpt/Close';
import { SocketContext } from '../../context/socket';
import {
  numberWithCommas,
  onlyNumber,
} from '../../validations/inputValidation';

const AddFund = ({ close, budgetId }) => {
  const [fund, setFund] = useState('');
  const socket = useContext(SocketContext);

  const handleFund = (e) => {
    e.preventDefault();
    const payload = {
      total: fund,
      budgetId,
    };

    socket.emit('createFund', payload);
    close();
  };

  return (
    <Modal visible={true} close={close}>
      <AddWrap>
        <AddNav>
          <div>Add fund</div>
          <Close close={close} />
        </AddNav>
        <AddMain>
          <form onSubmit={handleFund}>
            <InputWrap>
              <label>Fund total</label>
              <input
                value={numberWithCommas(fund)}
                onChange={(e) => setFund(onlyNumber(e.target.value))}
              />
              <p>Add funds to budget</p>
            </InputWrap>
            <ButtonWrap>
              <ButtonPrimary>Fund</ButtonPrimary>
            </ButtonWrap>
          </form>
        </AddMain>
      </AddWrap>
    </Modal>
  );
};

export default AddFund;
