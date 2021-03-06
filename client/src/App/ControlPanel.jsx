import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import Rocket from '../assets/rocket.svg';

const ControlPanelContainer = styled.div`
  border: 1px solid #333;
  background-color: #657961;
  flex: 1;
  padding: 10px;
  margin-top: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (max-width: 950px) {
    margin: 10px;
    flex-direction: column;
  }
`;

const ControlContainer = styled.div`
  flex: 1;
  border: 1px solid #333;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;

  @media only screen and (max-width: 950px) {
    flex-direction: column;
    height: auto;
    width: 100%;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  margin: 10px;
  border-radius: 6px;
  cursor: pointer;

  :disabled {
    background-color: #ffb5b5;
  }
`;

const TextInput = styled.input`
  padding: 10px 12px;
  margin: 10px;
`;

const ControlPanel = () => {
  const dispatch = useDispatch();

  const [landingPadId, setLandingId] = useState('');
  const [isValidInput, setIsValidInput] = useState(false);

  const onClickCapsules = useCallback(
    () => dispatch({ type: 'SHOW_CAPSULES' }),
    [dispatch]
  );

  const handleChange = (event) => {
    const input = event.target.value;
    const isValid = !!input && !new RegExp('[#$%&]').test(input);

    setIsValidInput(isValid);
    setLandingId(input);
  };

  const onClickLandingPad = useCallback(
    () => dispatch({ type: 'SHOW_LANDING_PAD', landingPadId }),
    [dispatch, landingPadId]
  );

  return (
    <ControlPanelContainer>
      <ControlContainer>
        <Button onClick={onClickCapsules}>Capsules</Button>
      </ControlContainer>
      <ControlContainer>
        <Rocket />
      </ControlContainer>
      <ControlContainer>
        <TextInput type="string" value={landingPadId} onChange={handleChange} />
        <Button onClick={onClickLandingPad} disabled={!isValidInput}>
          Landing Pad
        </Button>
      </ControlContainer>
    </ControlPanelContainer>
  );
};

export default ControlPanel;
