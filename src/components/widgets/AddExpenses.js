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

const AddExpenses = ({ close, budgetId }) => {
  const [name, setName] = useState('');
  const [total, setTotal] = useState('');
  const [narration, setNarration] = useState('');

  const socket = useContext(SocketContext);

  const handleExpenses = (e) => {
    e.preventDefault();

    const payload = {
      name,
      total,
      narration,
      budgetId,
    };

    if (name != '' && total !== '') {
      socket.emit('createExpenses', payload);
    }
    close();
  };

  return (
    <Modal visible={true} close={close}>
      <AddWrap>
        <AddNav>
          <div>Add new expenses</div>
          <Close close={close} />
        </AddNav>
        <AddMain>
          <form onSubmit={handleExpenses}>
            <InputWrap>
              <label>Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} />
            </InputWrap>
            <InputWrap>
              <label>Total</label>
              <input value={total} onChange={(e) => setTotal(e.target.value)} />
            </InputWrap>
            <InputWrap>
              <label>Narration</label>
              <textarea
                value={narration}
                onChange={(e) => setNarration(e.target.value)}
              />
            </InputWrap>
            <ButtonWrap>
              <ButtonPrimary>Add expenses</ButtonPrimary>
            </ButtonWrap>
          </form>
        </AddMain>
      </AddWrap>
    </Modal>
  );
};

export default AddExpenses;
