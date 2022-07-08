import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonPrimary,
  LabelList,
  Label,
  AddWrap,
  AddNav,
  AddMain,
  ButtonWrap,
} from '../../styles/DefaultStyles';
import Modal from '../modal/Modal';
import styled from 'styled-components';
import { toggleAddLabelModal } from '../../features/actionSlice';
import Close from '../excerpt/Close';
import {
  clearActiveBudgetData,
  setBudgetLabels,
} from '../../features/budgetSlice';
import { SocketContext } from '../../context/socket';

const AddLabel = ({ budgetId }) => {
  const { labels, budgetLabels } = useSelector((state) => state.budget);
  const { addLabelModal } = useSelector((state) => state.action);
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);

  const close = () => {
    dispatch(toggleAddLabelModal(false));
    dispatch(clearActiveBudgetData());
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

  const handleAddLabel = () => {
    const data = {
      budgetId,
      labels: budgetLabels,
    };

    socket.emit('updateBudgetLabel', data);
    close();
  };

  return (
    <Modal visible={addLabelModal} close={close}>
      <AddWrap>
        <AddNav>
          <div>Add label</div>
          <Close close={close} />
        </AddNav>
        <AddMain>
          <LabelsWrap className="labels">
            <LabelList>
              {labels.map((label) => (
                <Label
                  key={label._id}
                  className={budgetLabels.map((l) =>
                    l._id === label._id ? 'active' : ''
                  )}
                  onClick={() => handleSelectLabel(label)}
                >
                  {label.name}
                </Label>
              ))}
            </LabelList>
          </LabelsWrap>
          <ButtonWrap>
            <ButtonPrimary onClick={handleAddLabel}>Done</ButtonPrimary>
          </ButtonWrap>
        </AddMain>
      </AddWrap>
    </Modal>
  );
};

const LabelsWrap = styled.div`
  margin-bottom: 30px;
`;

export default AddLabel;
