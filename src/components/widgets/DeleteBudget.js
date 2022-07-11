import React, { useState, useContext } from 'react';
import {
  ButtonDanger,
  AddWrap,
  AddNav,
  AddMain,
  InputWrap,
  DelInfo,
} from '../../styles/DefaultStyles';
import Close from '../excerpt/Close';
import Modal from '../modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDelBudgetModal } from '../../features/actionSlice';
import { SocketContext } from '../../context/socket';
import { useNavigate } from 'react-router-dom';
import { setBudget } from '../../features/budgetSlice';

const DeleteBudget = () => {
  const [budgetName, setBudgetName] = useState('');
  const { budget } = useSelector((state) => state.budget);
  const { delBudgetModal } = useSelector((state) => state.action);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const socket = useContext(SocketContext);

  const close = () => {
    setBudgetName('');
    dispatch(setBudget({}));
    dispatch(toggleDelBudgetModal(false));
  };

  const handleBudgetDelete = (e) => {
    e.preventDefault();
    socket.emit('deleteBudget', budget._id);
    close();
    navigate('/dashboard');
  };

  return (
    <Modal visible={delBudgetModal} close={close}>
      <AddWrap>
        <AddNav>
          <div>Delete budget</div>
          <Close close={close} />
        </AddNav>
        <AddMain>
          <DelInfo>
            <p>
              This action <span>cannot</span> be undone. This will remove all
              expenses associated with this budget.
            </p>
            <p>
              please type <span>{budget?.name?.toLowerCase()}</span> to confirm
            </p>
          </DelInfo>
          <form onSubmit={handleBudgetDelete}>
            <InputWrap>
              <input
                value={budgetName}
                onChange={(e) => setBudgetName(e.target.value)}
              />
            </InputWrap>
            <ButtonDanger
              fill="true"
              className={
                budgetName?.toLowerCase() === budget?.name?.toLowerCase()
                  ? ''
                  : 'btn-disabled'
              }
            >
              Delete budget
            </ButtonDanger>
          </form>
        </AddMain>
      </AddWrap>
    </Modal>
  );
};

export default DeleteBudget;
