import React, { FC } from 'react';
import styled from '@emotion/styled';
import { round } from '../../utils/round';
import { InfoText } from '../common/InfoText';
import { margins } from '../../theme';

const StyledInfo = styled(InfoText)`
  min-width: 30%;
  margin-right: ${margins.s};
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

interface RowProps {
  menge: number | undefined;
  name: 'NaOH' | 'KOH';
  anteil: number;
}

export const LaugeRow: FC<RowProps> = ({ menge, name, anteil }) => (
  anteil !== 0
    ? <StyledRow>
      <StyledInfo>{name}: {menge !== undefined ? `${round(menge)} g` : '?'}</StyledInfo>
      <StyledInfo> (Anteil: {anteil} %)</StyledInfo>
    </StyledRow>
    : null
);
