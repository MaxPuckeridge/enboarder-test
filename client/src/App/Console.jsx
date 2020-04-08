import React from 'react';
import styled from 'styled-components';

const ConsoleContainer = styled.div`
  border: 1px solid #333;
  background-color: #eee;
  flex: 2;
  padding: 10px;

  @media only screen and (max-width: 600px) {
    margin: 10px;
    margin-right: 0;
  }
`;

const Console = () => {
  return <ConsoleContainer>Hello!</ConsoleContainer>;
};

export default Console;