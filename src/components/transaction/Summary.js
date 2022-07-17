import React from 'react';
import styled from 'styled-components';
import { Label, LabelList } from '../../styles/DefaultStyles';

const Summary = ({ budget }) => {
  return (
    <DataSummary>
      <section className="summary">
        <h5>Summary</h5>
        {budget?.summary ? (
          <p>{budget.summary}</p>
        ) : (
          <p className="empty">No summary</p>
        )}
      </section>
      <section className="labels">
        <h5>Labels</h5>
        {budget?.labels.length > 0 ? (
          <LabelList>
            {budget?.labels.map((label) => (
              <Label>{label.name}</Label>
            ))}
          </LabelList>
        ) : (
          <p className="empty">No Label</p>
        )}
      </section>
    </DataSummary>
  );
};

const DataSummary = styled.div`
  display: flex;
  width: 33%;
  border: 1px solid ${(props) => props.theme.colors.border_color1};
  border-radius: ${(props) => props.theme.reset.border_radius};
  padding: 20px;
  flex-direction: column;

  @media (max-width: 800px) {
    width: 100%;
    order: 2;
  }

  .summary {
    margin-bottom: 20px;
  }

  h5 {
    color: ${(props) => props.theme.colors.text_color2};
    margin-bottom: 5px;
  }

  p {
    color: ${(props) => props.theme.colors.text_color1};
    font-size: 14px;
  }
`;

export default Summary;
