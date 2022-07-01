import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  FormWrap,
  InputWrap,
  InputGroup,
  ButtonPrimary,
} from '../../styles/DefaultStyles';

const Account = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    setFirstName(user?.firstName);
    setLastName(user?.lastName);
    setEmail(user?.email);
  }, [user]);

  return (
    <AccountWrap>
      <AccountLeft>
        <FormWrap>
          <form>
            <InputGroup>
              <InputWrap>
                <label>First name</label>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                />
              </InputWrap>
              <InputWrap>
                <label>Last name</label>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                />
              </InputWrap>
              <InputWrap>
                <label>Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                />
                <p>
                  Your email will be updated. Note: This is the email you'll use
                  to log in next time.
                </p>
              </InputWrap>
            </InputGroup>
            <div style={{ display: 'block' }}>
              <ButtonPrimary>Update profile</ButtonPrimary>
            </div>
          </form>
        </FormWrap>
      </AccountLeft>
      <AccountRight></AccountRight>
    </AccountWrap>
  );
};

const AccountWrap = styled.div`
  display: flex;
`;

const AccountLeft = styled.div`
  width: 60%;
`;
const AccountRight = styled.div``;

export default Account;
