import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useRezept } from '../hooks/useRezept';
import { DefaultProps } from './common/DefaultProps';
import { margins } from '../theme';
import { SectionTitle } from './common/SectionTitle';
import { StyledNumberField } from './common/NumberField';

const RezeptContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-right: ${margins.s};
`;

const LaugeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: start;
  align-items: baseline;
  margin-top: ${margins.m};
`;

export const Rezept: FC<DefaultProps> = ({ className }) => {
  const { rezept: { laugenunterschuss, gesamtfettmasse, naohAnteil }, updateRezept } = useRezept();

  return (
    <div className={className}>
      <SectionTitle>Rezept</SectionTitle>
      <RezeptContainer>
        <StyledInput>
          <StyledNumberField
            label={'Gesamtfettmasse'}
            value={gesamtfettmasse}
            validate={(value) => 0 <= value}
            update={(value) => updateRezept({ gesamtfettmasse: value })}
          /> g
        </StyledInput>
        <LaugeContainer>
          <StyledInput>
            <StyledNumberField
              label={'Laugenunterschuss'}
              value={laugenunterschuss}
              update={(value) => updateRezept({ laugenunterschuss: value })}
            /> %
          </StyledInput>
          <StyledInput>
            <StyledNumberField
              label={'NaOH-Anteil'}
              value={naohAnteil}
              update={(value) => updateRezept({ naohAnteil: value })}
            /> %
          </StyledInput>
        </LaugeContainer>
      </RezeptContainer>
    </div>
  );
};
