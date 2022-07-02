import React, { useState, useContext, useEffect } from 'react';
import Modal from '../modal/Modal';
import { useNavigate } from 'react-router-dom';
import {
  ButtonPrimary,
  InputWrap,
  InputGroup,
  AddWrap,
  AddMain,
  AddNav,
  ButtonWrap,
} from '../../styles/DefaultStyles';
import Close from '../excerpt/Close';
import { SocketContext } from '../../context/socket';

const NewBudget = () => {
  const [budgetName, setBudgetName] = useState('');
  const [budgetTotal, setBudgetTotal] = useState('');
  const [budgetSummary, setBudgetSummary] = useState('');
  const [selectLabel, setSelectLabel] = useState('');
  const [labels, setLabels] = useState([]);

  const socket = useContext(SocketContext);
  const navigate = useNavigate();

  const handleCreateBudget = (e) => {
    e.preventDefault();

    const payload = {
      budgetName,
      budgetTotal,
      budgetSummary,
      label: selectLabel,
    };

    socket.emit('createBudget', payload);
    close();
  };

  const close = () => {
    setBudgetName('');
    setBudgetTotal('');
    setBudgetSummary('');
    setSelectLabel('');
    navigate(-1);
  };

  useEffect(() => {
    return () => {
      socket.emit('fetchLabels');
      socket.on('fetchLabels', (data) => {
        setLabels(data);
      });
    };
  }, []);

  return (
    <Modal visible={true} close={close}>
      <AddWrap width="600">
        <AddNav>
          <div>Create Budget</div>
          <Close close={close} />
        </AddNav>
        <AddMain>
          <form onSubmit={handleCreateBudget}>
            <InputGroup>
              <InputWrap>
                <label>Budget name</label>
                <input
                  value={budgetName}
                  onChange={(e) => setBudgetName(e.target.value)}
                />
              </InputWrap>
              <InputWrap>
                <label>Budget total</label>
                <input
                  value={budgetTotal}
                  onChange={(e) => setBudgetTotal(e.target.value)}
                />
              </InputWrap>
              <InputWrap>
                <label>Budget summary</label>
                <textarea
                  value={budgetSummary}
                  onChange={(e) => setBudgetSummary(e.target.value)}
                />
                <p>A summary of this budget</p>
              </InputWrap>
              <InputWrap>
                <label>Select label</label>
                <select
                  value={selectLabel}
                  onChange={(e) => setSelectLabel(e.target.value)}
                >
                  <option value="">--Select a label--</option>
                  {labels.map((label) => (
                    <option key={label._id} value={label._id}>
                      {label.name}
                    </option>
                  ))}
                </select>
              </InputWrap>
            </InputGroup>
            <ButtonWrap>
              <ButtonPrimary type="submit">Add Budget</ButtonPrimary>
            </ButtonWrap>
          </form>
        </AddMain>
      </AddWrap>
    </Modal>
  );
};

export default NewBudget;
