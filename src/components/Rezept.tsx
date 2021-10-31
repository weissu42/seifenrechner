import React, { FC } from 'react';
import styled from '@emotion/styled';

import { DefaultProps } from './common/DefaultProps';
import { margins } from '../theme';
import { SectionTitle } from './common/SectionTitle';
import { StyledNumberField } from './common/NumberField';
import { useRezept } from '../contexts/SeifeContext';
import { StyledTextField } from './common/StyledTextField';

const RezeptContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin: 0 ${margins.s} ${margins.m} 0;
`;

const LaugeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: start;
  align-items: baseline;
`;

export const Rezept: FC<DefaultProps> = ({ className }) => {
  const {
    rezept: {
      laugenunterschuss,
      gesamtfettmasse,
      naohAnteil,
      laugenfluessigkeit,
    },
    updateRezept,
  } = useRezept();

  return (
    <div className={className}>
      <SectionTitle>Rezept</SectionTitle>
      <RezeptContainer>
        <StyledInput>
          <StyledNumberField
            label="Gesamtfettmasse"
            value={gesamtfettmasse}
            validate={(value) => 0 <= value}
            update={(value) => updateRezept({ gesamtfettmasse: value })}
          /> g
        </StyledInput>
        <StyledInput>
          <StyledTextField
            label="Laugenflüssigkeit"
            value={laugenfluessigkeit}
            onChange={({ currentTarget: { value } }): void => updateRezept({ laugenfluessigkeit: value })}
          />
        </StyledInput>
        <LaugeContainer>
          <StyledInput>
            <StyledNumberField
              label="Laugenunterschuss"
              value={laugenunterschuss}
              update={(value) => updateRezept({ laugenunterschuss: value })}
            /> %
          </StyledInput>
          <StyledInput>
            <StyledNumberField
              label="NaOH-Anteil"
              value={naohAnteil}
              update={(value) => updateRezept({ naohAnteil: value })}
            /> %
          </StyledInput>
        </LaugeContainer>
      </RezeptContainer>
    </div>
  );
};
