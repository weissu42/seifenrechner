import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useCalculate } from '../../hooks/useCalculate';
import { InfoText } from '../common/InfoText';
import { margins } from '../../theme';
import { LaugeRow } from './LaugeRow';
import { useRezept, useVerseifungsZutaten } from '../../contexts/SeifeContext';

const StyledAnteile = styled(InfoText)`
  margin-bottom: ${margins.s};
`;

export const Lauge: FC = () => {
  const { rezept: { naohAnteil, laugenfluessigkeit } } = useRezept();
  const { getFette } = useVerseifungsZutaten();
  const { calculateLauge, calculateFluessigkeit } = useCalculate();

  const lauge = calculateLauge();

  return (<>
    <StyledAnteile>
      Summe der Anteile: {getFette().reduce((sum, { anteil }) => sum + anteil, 0)} %
    </StyledAnteile>
    <InfoText>{laugenfluessigkeit}: {calculateFluessigkeit()} g</InfoText>
    <LaugeRow
      menge={lauge?.naoh}
      name={'NaOH'}
      anteil={naohAnteil}
    />
    <LaugeRow
      menge={lauge?.koh}
      name={'KOH'}
      anteil={100 - naohAnteil}
    />
  </>);
};

