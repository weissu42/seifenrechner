import React, { FC } from 'react';
import styled from '@emotion/styled';

import { DefaultProps } from './common/DefaultProps';
import { margins } from '../theme';
import { SectionTitle } from './common/SectionTitle';
import { StyledNumberField } from './common/NumberField';
import { useRezept } from '../contexts/SeifeContext';
import { StyledTextField as StyledTextFieldBase } from './common/StyledTextField';

const RezeptContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInputRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin: 0 ${margins.s} ${margins.m} 0;
`;

const StyledTextField = styled(StyledTextFieldBase)`
  margin-left: ${margins.s};
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
      fluessigkeitsanteil,
    },
    updateRezept,
  } = useRezept();

  return (
    <div className={className}>
      <SectionTitle>Rezept</SectionTitle>
      <RezeptContainer>
        <StyledInputRow>
          <StyledNumberField
            label="Gesamtfettmasse"
            value={gesamtfettmasse}
            validate={(value) => 0 <= value}
            update={(value) => updateRezept({ gesamtfettmasse: value })}
          /> g
        </StyledInputRow>
        <StyledInputRow>
          <StyledNumberField
            label="Flüssigkeitsanteil"
            value={fluessigkeitsanteil}
            validate={(value) => 0 <= value}
            update={(value) => updateRezept({ fluessigkeitsanteil: value })}
          /> %
          <StyledTextField
            label="Laugenflüssigkeit"
            value={laugenfluessigkeit}
            onChange={({ currentTarget: { value } }): void => updateRezept({ laugenfluessigkeit: value })}
          />
        </StyledInputRow>
        <LaugeContainer>
          <StyledInputRow>
            <StyledNumberField
              label="Laugenunterschuss"
              value={laugenunterschuss}
              update={(value) => updateRezept({ laugenunterschuss: value })}
            /> %
          </StyledInputRow>
          <StyledInputRow>
            <StyledNumberField
              label="NaOH-Anteil"
              value={naohAnteil}
              update={(value) => updateRezept({ naohAnteil: value })}
            /> %
          </StyledInputRow>
        </LaugeContainer>
      </RezeptContainer>
    </div>
  );
};
