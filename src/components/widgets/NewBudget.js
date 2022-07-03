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
import styled from 'styled-components';

const NewBudget = () => {
  const [budgetName, setBudgetName] = useState('');
  const [budgetTotal, setBudgetTotal] = useState('');
  const [budgetSummary, setBudgetSummary] = useState('');
  const [budgetLabels, setBudgetLabels] = useState([]);
  const [labels, setLabels] = useState([]);

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

  useEffect(() => {
    return () => {
      socket.emit('fetchLabels');
      socket.on('fetchLabels', (data) => {
        setLabels(data);
      });
    };
  }, []);

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
                  {labels.map((label) => (
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

const LabelList = styled.div`
  display: flex;
  margin-top: 10px;

  .active {
    border-color: ${(props) => props.theme.colors.btn_color_primary};
  }
`;
const Label = styled.div`
  border-radius: 25px;
  border: 2px solid ${(props) => props.theme.colors.border_color1};
  padding: 5px 10px;
  margin-right: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.text_color2};
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.input_color1};

  :hover {
    border-color: ${(props) => props.theme.colors.btn_color_primary};
  }
`;

export default NewBudget;
