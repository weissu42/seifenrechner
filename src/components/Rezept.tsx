import React, { FC } from 'react';
import styled from '@emotion/styled';

import { InputLabel } from '@mui/material';
import { useRezept } from '../hooks/useRezept';
import { DefaultProps } from './DefaultProps';
import { margins } from '../theme';
import { StyledNumberField, StyledText } from './styles';
import { useCalculate } from '../hooks/useCalculate';

const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-top: ${margins.m};
  margin-right: ${margins.s};
`;

const StyledMenge = styled(InputLabel)`
  margin: 0 ${margins.s};
`;

const RezeptComp: FC<DefaultProps> = ({ className }) => {
  const { rezept: { laugenunterschuss, gesamtfettmasse }, updateRezept } = useRezept();
  const { calculate } = useCalculate();

  const lauge = calculate();

  return (
    <div className={className}>
      <StyledText>Rezept</StyledText>
      <StyledInput>
        <StyledNumberField
          label={'Gesamtfettmasse'}
          value={gesamtfettmasse}
          validate={(value) => 0 < value}
          update={(value) => updateRezept({ gesamtfettmasse: value })}
        /> g
      </StyledInput>
      <StyledInput>
        <StyledNumberField
          label={'Laugenunterschuss'}
          value={laugenunterschuss}
          update={(value) => updateRezept({ laugenunterschuss: value })}
        /> %
        <StyledMenge>NaOH: {lauge.naoh} g</StyledMenge>
        <StyledMenge>KaOH: {lauge.kaoh} g</StyledMenge>
      </StyledInput>
    </div>
  );
};

export const Rezept = styled(RezeptComp)`
`;
