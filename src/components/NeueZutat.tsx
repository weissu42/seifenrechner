import React, { FC, useState } from 'react';
import { Button, TextField } from '@mui/material';
import styled from '@emotion/styled';

import { NumberField } from './NumberField';
import { useZutaten } from '../hooks/useZutaten';
import verseifungszahlen from '../resources/verseifungszahlen.json';
import { DefaultProps } from './DefaultProps';

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const NeueZutat: FC<DefaultProps> = ({ className }) => {
  const { addZutat } = useZutaten();
  const [ zutat, setZutat ] = useState('');
  const [ anteil, setAnteil ] = useState(0);

  const onSubmitZutat = (): void => {
    const { verseifungszahl } = (verseifungszahlen as Record<string, { verseifungszahl: number }>)[zutat] ?? {};

    if (verseifungszahl === undefined) {
      console.log('Verzeifungszahl nicht gefunden', { zutat });
      return;
    }

    addZutat({ name: zutat, anteil , verseifungszahl });
    setZutat('');
    setAnteil(0);
  };

  return (
    <StyledForm
      className={className}
      onSubmit={onSubmitZutat}
    >
      <TextField
        label="Neue Zutat"
        type="text"
        value={zutat}
        onChange={({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>) => setZutat(value)}
        onSubmit={onSubmitZutat}
      />
      <NumberField
        label="Anteil"
        value={anteil}
        update={(value) => setAnteil(value)}
        onSubmit={onSubmitZutat}
      />
      <Button type="submit" >
          Hinzufügen
      </Button>
    </StyledForm>
  );
};
