import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { updateUserProfileAsync } from '../../features/userSlice';
import {
  FormWrap,
  InputWrap,
  InputGroup,
  ButtonPrimary,
  Button,
  ButtonWrap,
} from '../../styles/DefaultStyles';
import PageLoading from '../loading/PageLoading';
import UploadAvatar from './UploadAvatar';

const Account = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [loading, setLoading] = useState(true);
  const [upload, setUpload] = useState(false);

  const { user, status } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.email) {
      setFirstName(user?.firstName || '');
      setLastName(user?.lastName || '');
      setEmail(user?.email || '');
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

  const close = () => {
    setUpload(false);
  };

  if (loading) {
    return <PageLoading />;
  }

  return (
    <>
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
                    Your email will be updated. Note: This is the email you'll
                    use to log in next time.
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
        <AccountRight>
          <AvatarWrap>
            <div className="profile-img">
              {user?.avatar && <img src={user?.avatar} alt="Profile Image" />}
            </div>
            <ButtonWrap className="btn-wrap">
              <Button onClick={() => setUpload(true)}>Edit</Button>
            </ButtonWrap>
          </AvatarWrap>
        </AccountRight>
      </AccountWrap>
      {upload && <UploadAvatar close={close} />}
    </>
  );
};

const AccountWrap = styled.div`
  display: flex;
`;

const AccountLeft = styled.div`
  width: 60%;
`;
const AccountRight = styled.div`
  margin-left: 50px;
`;

const AvatarWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  .profile-img {
    margin-top: 50px;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.input_color1};
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-position: top;
      object-fit: cover;
    }
  }

  .btn-wrap {
    position: absolute;
    bottom: 5px;
  }
`;

export default Account;
