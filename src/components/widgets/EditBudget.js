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
  const { labels, budgetLabels, budget } = useSelector((state) => state.budget);

  const [budgetName, setBudgetName] = useState(budget?.name);
  const [budgetTotal, setBudgetTotal] = useState(budget?.total);
  const [budgetSummary, setBudgetSummary] = useState(budget?.summary);

  const socket = useContext(SocketContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEditBudget = (e) => {
    e.preventDefault();

    const payload = {
      budgetId: budget._id,
      budgetName,
      budgetSummary,
      budgetLabels,
    };

    socket.emit('updateBudget', payload);
    close();
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
    <Modal visible={true} close={close}>
      <AddWrap width="600">
        <AddNav>
          <div>Edit budget</div>
          <Close close={close} />
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
                  className="btn-disabled"
                  value={budgetTotal}
                  onChange={(e) => setBudgetTotal(e.target.value)}
                />
                <p>You cannot edit this field.</p>
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
                      className={budgetLabels.map((l) =>
                        l._id === label._id ? 'active' : ''
                      )}
                      onClick={() => handleSelectLabel(label)}
                    >
                      {label.name}
                    </Label>
                  ))}
                </LabelList>
              </InputWrap>
            </InputGroup>
            <ButtonWrap>
              <ButtonPrimary type="submit">Edit budget</ButtonPrimary>
            </ButtonWrap>
          </form>
        </AddMain>
      </AddWrap>
    </Modal>
  );
};

export default EditBudget;
