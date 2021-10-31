import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useZutaten } from '../hooks/useZutaten';
import { margins } from '../theme';
import { Zutat } from './Zutat';
import { DefaultProps } from './DefaultProps';
import { useRezept } from '../hooks/useRezept';
import { StyledText } from './styles';

const StyledZutat = styled(Zutat)`
  margin-top: ${margins.m};
`;

export const Zutaten: FC<DefaultProps> = ({ className }) => {
  const { zutaten, updateZutat, removeZutat } = useZutaten();
  const { rezept: { gesamtfettmasse } } = useRezept();

  return (
    <div className={className}>
      <StyledText>Zutaten</StyledText>
      {zutaten.map((zutat, index) => (
        <StyledZutat
          {...zutat}
          gesamtfettmasse ={gesamtfettmasse}
          update={(menge) => updateZutat(index, menge)}
          remove={() => removeZutat(index)}
          key={index}
        />
      ))}
    </div>
  );
};
