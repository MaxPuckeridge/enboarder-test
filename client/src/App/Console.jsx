import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ConsoleContainer = styled.div`
  border: 1px solid #333;
  background-color: #eee;
  flex: 2;
  padding: 10px;
  overflow-y: scroll;
  word-break: break-word;
  font-size: 14px;

  @media only screen and (max-width: 600px) {
    margin: 10px;
    margin-right: 0;
  }

  pre {
    margin: 0;
  }
`;

const makeCapsuleRequest = (setConsoleText) => {
  setConsoleText('Fetching...');

  fetch('http://localhost:4000/capsules')
    .then((response) => response.json())
    .then((data) => {
      const pretty = JSON.stringify(data, null, 2);
      setConsoleText(pretty);
    })
    .catch((error) => {
      setConsoleText('Error!');
    });
};

const makeLandingPadRequest = (setConsoleText, landingPadId) => {
  setConsoleText('Fetching...');

  fetch(`http://localhost:4000/landing-pad/${landingPadId}`)
    .then((response) => response.json())
    .then((data) => {
      const pretty = JSON.stringify(data, null, 2);
      setConsoleText(pretty);
    })
    .catch((error) => {
      setConsoleText('Error!');
    });
};

const Console = () => {
  const currentContext = useSelector((state) => state.currentContext);
  const landingPadId = useSelector((state) => state.landingPadId);

  const [consoleText, setConsoleText] = useState('');

  useEffect(() => {
    console.log(currentContext);

    switch (currentContext) {
      case 'CAPSULES':
        makeCapsuleRequest(setConsoleText);
        break;

      case 'LANDING_PAD':
        makeLandingPadRequest(setConsoleText, landingPadId);
        break;

      default:
        setConsoleText('');
    }
  }, [currentContext, landingPadId]);

  return (
    <ConsoleContainer>
      <pre>{consoleText}</pre>
    </ConsoleContainer>
  );
};

export default Console;
