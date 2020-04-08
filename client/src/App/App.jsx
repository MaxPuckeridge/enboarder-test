import { hot } from 'react-hot-loader/root';
import React from 'react';
import GlobalStyle from '../theme';
import { Application, MainContent, Console, ControlPanel } from './styles';
import Rocket from '../assets/rocket.svg';

const App = () => (
  <>
    <Application>
      <MainContent>
        <Console>Hi!</Console>
        <ControlPanel>
          <Rocket />
        </ControlPanel>
      </MainContent>
    </Application>
    <GlobalStyle />
  </>
);

export default hot(App);
