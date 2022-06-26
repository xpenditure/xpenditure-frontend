import styled from 'styled-components';

export const FormWrap = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }

  button {
    width: 100%;
    border: none;
    outline: none;
    background-color: #222;
    color: #fff;
    height: 45px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
  }
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  label {
    font-size: 12px;
    font-weight: 600;
  }

  input {
    border: 1px solid #999;
    border-radius: 4px;
    outline: none;
    padding: 0 15px;
    height: 40px;
    font-weight: 600;
    color: #333;
  }
`;

export const Title = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h1 {
  }

  p {
    font-size: 14px;
  }
`;

export const TabWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Tab = styled.div`
  margin-right: 20px;
  cursor: pointer;
  padding: 5px 10px;
  position: relative;
  transition: all 300ms linear;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;

  ::after {
    content: '';
    height: 2px;
    background-color: orangered;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: ${(props) => (props.active ? 'scale(1)' : 'scale(0)')};
    transition: all 300ms linear;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  :hover {
    background-color: #eee;
  }
`;
