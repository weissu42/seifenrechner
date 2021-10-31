import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useCalculate } from '../../hooks/useCalculate';
import { InfoText } from '../common/InfoText';
import { margins } from '../../theme';
import { useRezept } from '../../hooks/useRezept';
import { useZutaten } from '../../hooks/useZutaten';
import { LaugeRow } from './LaugeRow';

const StyledAnteile = styled(InfoText)`
  margin-bottom: ${margins.s};
`;

export const Lauge: FC = () => {
  const { rezept: { naohAnteil } } = useRezept();
  const { getFette } = useZutaten();
  const { calculateLauge } = useCalculate();

  const lauge = calculateLauge();

  return (<>
    <StyledAnteile>
      Summe der Anteile: {getFette().reduce((sum, { anteil }) => sum + anteil, 0)} %
    </StyledAnteile>
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

