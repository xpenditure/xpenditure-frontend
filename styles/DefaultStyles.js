import styled from 'styled-components';

export const Container = styled.div``;

export const PageCenter = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  flex-direction: column;
`;

export const FormWrap = styled.div`
  max-width: 100%;
  width: 350px;
  form {
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
  margin-bottom: 5px;

  label {
    font-size: 14px;
    color: #666;
    margin-bottom: 3px;
  }

  input {
    height: 35px;
    padding: 0 15px;
    outline: none;
    border: 1px solid #999;
    background-color: #f1f1f1;
    border-radius: 3px;
    color: #333;
    font-weight: 600;
    font-size: 14px;
  }
`;

export const Button = styled.div`
  button {
    background-color: #000;
    border: none;
    width: 100%;
    border-radius: 3px;
    height: 40px;
    color: #fff;
    cursor: pointer;
    transition: all 300ms linear;
    font-weight: 600;

    :hover {
      background-color: #222;
    }
  }
`;

export const Heading = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 50px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
  }
`;
