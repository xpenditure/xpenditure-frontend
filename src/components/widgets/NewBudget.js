import React, { useState, useContext } from 'react';
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
  LabelList,
  Label,
} from '../../styles/DefaultStyles';
import Close from '../excerpt/Close';
import { SocketContext } from '../../context/socket';
import { useSelector } from 'react-redux';
import {
  numberWithCommas,
  onlyNumber,
} from '../../validations/inputValidation';

const NewBudget = () => {
  const [budgetName, setBudgetName] = useState('');
  const [budgetTotal, setBudgetTotal] = useState('');
  const [budgetSummary, setBudgetSummary] = useState('');
  const [budgetLabels, setBudgetLabels] = useState([]);

  const { labels } = useSelector((state) => state.budget);

  const socket = useContext(SocketContext);
  const navigate = useNavigate();

  const handleCreateBudget = (e) => {
    e.preventDefault();

    const payload = {
      budgetName,
      budgetTotal,
      budgetSummary,
      budgetLabels,
    };

    socket.emit('createBudget', payload);
    close();
  };

  const close = () => {
    setBudgetName('');
    setBudgetTotal('');
    setBudgetSummary('');
    setBudgetLabels([]);
    navigate(-1);
  };

  const handleSelectLabel = (labelId) => {
    const items = budgetLabels.slice();
    if (items.includes(labelId)) {
      const item = items.find((id) => id === labelId);
      const index = items.indexOf(item);
      items.splice(index, 1);
      setBudgetLabels(items);
    } else {
      items.push(labelId);
      setBudgetLabels(items);
    }
  };

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
                  value={numberWithCommas(budgetTotal)}
                  onChange={(e) => setBudgetTotal(onlyNumber(e.target.value))}
                  onInput={(e) => onlyNumber(e.target.value)}
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
                <LabelList>
                  {labels?.map((label) => (
                    <Label
                      key={label._id}
                      value={label.alias}
                      onClick={() => handleSelectLabel(label._id)}
                      className={
                        budgetLabels.includes(label._id) ? 'active' : ''
                      }
                    >
                      {label.name}
                    </Label>
                  ))}
                </LabelList>
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
