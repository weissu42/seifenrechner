import React, { FC } from 'react';
import styled from '@emotion/styled';

import { useRezept } from '../hooks/useRezept';
import { DefaultProps } from './DefaultProps';
import { margins } from '../theme';
import { StyledNumberField, StyledText } from './styles';

const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-top: ${margins.m};
  margin-right: ${margins.s};
`;

const RezeptComp: FC<DefaultProps> = ({ className }) => {
  const { rezept: { laugenunterschuss, gesamtfettmasse }, updateRezept } = useRezept();

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
      </StyledInput>
    </div>
  );
};

export const Rezept = styled(RezeptComp)`
`;
