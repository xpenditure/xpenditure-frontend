import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updateUserProfileAsync } from '../../features/userSlice';
import {
  FormWrap,
  InputWrap,
  InputGroup,
  ButtonPrimary,
} from '../../styles/DefaultStyles';
import PageLoading from '../loading/PageLoading';

const Account = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(true);

  const { user, status } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setFirstName(user?.firstName);
      setLastName(user?.lastName);
      setEmail(user?.email);
      setLoading(false);
    }
  }, [user]);

  const handleUpdateUserProfile = (e) => {
    e.preventDefault();
    const payload = {
      firstName,
      lastName,
      email,
    };

    dispatch(updateUserProfileAsync(payload));
  };

  if (loading) {
    return <PageLoading />;
  }

  return (
    <AccountWrap>
      <AccountLeft>
        <FormWrap>
          <form onSubmit={handleUpdateUserProfile}>
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
              <ButtonPrimary
                className={status === 'loading' ? 'btn-disabled' : ''}
              >
                {status === 'loading' ? 'Updating...' : 'Update profile'}
              </ButtonPrimary>
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
