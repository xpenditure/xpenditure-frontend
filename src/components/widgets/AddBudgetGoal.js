import React, { useState, useContext } from 'react';
import {
  ButtonPrimary,
  InputWrap,
  AddWrap,
  AddNav,
  AddMain,
  ButtonWrap,
} from '../../styles/DefaultStyles';
import {
  numberWithCommas,
  onlyNumber,
} from '../../validations/inputValidation';
import Close from '../excerpt/Close';
import Modal from '../modal/Modal';
import { SocketContext } from '../../context/socket';

const AddBudgetGoal = ({ close, budget }) => {
  const [goal, setGoal] = useState('');
  const socket = useContext(SocketContext);

  const handleBudgetGoal = (e) => {
    e.preventDefault();

    const payload = {
      budgetId: budget._id,
      goal,
    };

    socket.emit('budgetGoal', payload);
    close();
  };

  return (
    <Modal visible={true} close={close}>
      <AddWrap>
        <AddNav>
          <div>
            Add goal<small>({budget.name})</small>
          </div>
          <Close close={close} />
        </AddNav>
        <AddMain>
          <form onSubmit={handleBudgetGoal}>
            <InputWrap>
              <label>Goal total</label>
              <input
                value={numberWithCommas(goal)}
                onChange={(e) => setGoal(onlyNumber(e.target.value))}
              />
            </InputWrap>
            <ButtonWrap>
              <ButtonPrimary>Add goal</ButtonPrimary>
            </ButtonWrap>
          </form>
        </AddMain>
      </AddWrap>
    </Modal>
  );
};

export default AddBudgetGoal;
