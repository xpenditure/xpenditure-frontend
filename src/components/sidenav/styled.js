import styled from 'styled-components';

export const TabList = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TabItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.text_color1};

  :hover {
    background-color: ${(props) => props.theme.colors.hover_color1};
  }
`;

export const TabIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: ${(props) => props.theme.colors.text_color1};
    width: 20px;
  }
`;
export const TabName = styled.div`
  margin-left: 10px;
  font-size: 14px;
`;
