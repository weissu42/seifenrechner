import React, { FC } from 'react';
import styled from '@emotion/styled';
import { useZutaten } from '../hooks/useZutaten';
import { margins } from '../theme';
import { Zutat } from './Zutat';
import { DefaultProps } from './DefaultProps';

const StyledZutat = styled(Zutat)`
  margin-top: ${margins.m};
`;

export const Zutaten: FC<DefaultProps> = ({ className }) => {
  const { zutaten, updateZutat, removeZutat } = useZutaten();

  return (
    <div className={className}>
      Zutaten
      {zutaten.map((zutat, index) => (
        <StyledZutat
          {...zutat}
          update={(menge) => updateZutat(index, menge)}
          remove={() => removeZutat(index)}
          key={index}
        />
      ))}
    </div>
  );
};
