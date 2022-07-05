import React, { useState, useContext } from 'react';
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
import Modal from '../modal/Modal';
import { SocketContext } from '../../context/socket';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  clearActiveBudgetData,
  setBudgetLabels,
} from '../../features/budgetSlice';

const EditBudget = () => {
  const [budgetName, setBudgetName] = useState('');
  const [budgetTotal, setBudgetTotal] = useState('');
  const [budgetSummary, setBudgetSummary] = useState('');

  const { labels, budgetLabels } = useSelector((state) => state.budget);

  const socket = useContext(SocketContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEditBudget = (e) => {
    e.preventDefault();

    const payload = {
      budgetName,
      budgetTotal,
      budgetSummary,
      budgetLabels,
    };

    console.log(payload);
  };

  const close = () => {
    setBudgetName('');
    setBudgetTotal('');
    setBudgetSummary('');
    dispatch(clearActiveBudgetData());
    navigate(-1);
  };

  const handleSelectLabel = (label) => {
    const items = budgetLabels.slice();
    if (items.some((lb) => lb._id === label._id)) {
      const item = items.find((it) => it._id === label._id);
      const index = items.indexOf(item);
      items.splice(index, 1);
      dispatch(setBudgetLabels(items));
    } else {
      items.push(label);
      dispatch(setBudgetLabels(items));
    }
  };

  return (
    <Modal>
      <AddWrap>
        <AddNav>
          <div>Edit budget</div>
          <Close />
        </AddNav>
        <AddMain>
          <form onSubmit={handleEditBudget}>
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
                <LabelList>
                  {labels?.map((label) => (
                    <Label key={label._id} value={label.alias}>
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

export default EditBudget;
