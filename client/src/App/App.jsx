import { hot } from 'react-hot-loader/root';
import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../theme';
import ControlPanel from './ControlPanel';
import Console from './Console';

const Application = styled.div`
  font-family: Roboto;
  font-weight: 300;
  font-size: 25px;
  font-style: italic;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ccc;
  height: 50%;
  width: 50%;
  border-radius: 6px;
  padding: 10px;

  @media only screen and (max-width: 600px) {
    height: 100%;
    width: 100%;
    border-radius: 0;
    flex-direction: row;
    padding: 0;
  }
`;

const App = () => (
  <>
    <Application>
      <MainContent>
        <Console />
        <ControlPanel />
      </MainContent>
    </Application>
    <GlobalStyle />
  </>
);

export default hot(App);
