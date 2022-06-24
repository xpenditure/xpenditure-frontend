import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  FormWrap,
  Heading,
  InputGroup,
  InputWrap,
  DarkButton,
  Button,
  ButtonWrap,
} from '../styles/DefaultStyles';
import Modal from './Modal';
import { SocketContext } from '../context/socket';

const EditBudget = ({ visible, budget, close }) => {
  const [name, setName] = useState('');
  const [total, setTotal] = useState('');
  const [summary, setSummary] = useState('');

  const socket = useContext(SocketContext);

  const handleBudgetUpdate = (e) => {
    e.preventDefault();

    const payload = {
      name,
      total: parseFloat(total),
      summary,
      id: budget._id,
    };

    socket.emit('updateBudget', payload);
    close();
  };

  useEffect(() => {
    setName(budget?.name || '');
    setTotal(budget?.total || '');
    setSummary(budget?.summary || '');
  }, [budget]);

  return (
    <Modal visible={visible} close={close}>
      <Heading>
        <h1>Edit Budget</h1>
        <p>Update your budget info below.</p>
      </Heading>
      <FormWrap>
        <form onSubmit={handleBudgetUpdate}>
          <InputGroup>
            <InputWrap>
              <label>Budget name</label>
              <input
                name="budget"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputWrap>
            <InputWrap>
              <label>Total</label>
              <input
                name="total"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
              />
            </InputWrap>
            <InputWrap>
              <label>Summary</label>
              <textarea
                name="summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </InputWrap>
          </InputGroup>
          <ButtonWrap>
            <Button type="button" onClick={close}>
              Cancel
            </Button>
            <DarkButton type="submit">Update budget</DarkButton>
          </ButtonWrap>
        </form>
      </FormWrap>
    </Modal>
  );
};

export default EditBudget;
