import styled from 'styled-components';

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
    background-color: ${(props) => props.theme.colors.hover_color1};
  }
`;
