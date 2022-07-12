import React, { useState } from 'react';
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

const AddBudgetGoal = ({ close, budget }) => {
  const [goal, setGoal] = useState('');
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
          <form>
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
