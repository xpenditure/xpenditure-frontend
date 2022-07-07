import React, { useState } from 'react';
import {
  ButtonPrimary,
  AddWrap,
  AddNav,
  AddMain,
} from '../../styles/DefaultStyles';
import Modal from '../modal/Modal';
import styled from 'styled-components';
import Close from '../excerpt/Close';

const AddFund = () => {
  const [fund, setFund] = useState('');

  return (
    <Modal>
      <AddWrap>
        <AddNav>
          <div>Add fund</div>
          <Close />
        </AddNav>
        <AddMain>
          <form>
            <InputWrap>
              <label>Fund total</label>
              <input value={fund} onChange={(e) => setFund(e.target.value)} />
            </InputWrap>
          </form>
        </AddMain>
      </AddWrap>
    </Modal>
  );
};

export default AddFund;
