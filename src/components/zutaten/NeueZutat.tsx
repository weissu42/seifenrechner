import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Select, TextField } from '@mui/material';

import { DefaultProps } from '../common/DefaultProps';
import { Button } from '../common/Button';
import { StyledNumberField } from '../common/NumberField';
import { zutatenNamen } from '../../resources/verseifungszahlen';
import { margins } from '../../theme';
import { InfoText } from '../common/InfoText';
import { Zutat, ZutatenState } from '../../contexts/ZutatenState';

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledLabel = styled(InfoText)`
  flex: 1;
`;

const StyledSelect = styled(Select)`
  margin: 0 ${margins.s};
  min-width: 200px;
`;

const StyledTextField = styled(TextField)`
  margin: 0 ${margins.s};
  min-width: 200px;
`;

interface NeueZutatProps<ZUTAT extends Zutat> extends DefaultProps {
  label: string;
  useZutaten: () => ZutatenState<ZUTAT>;
  zutatenOptions?: JSX.Element[];
}

export const NeueZutat = <ZUTAT extends Zutat>({ label, useZutaten, zutatenOptions, className }: NeueZutatProps<ZUTAT>): JSX.Element => {
  const defaultZutat = zutatenOptions ? (zutatenNamen[0] ?? '') : '';

  const { addZutat } = useZutaten();
  const [ zutat, setZutat ] = useState(defaultZutat);
  const [ anteil, setAnteil ] = useState(0);

  const onSubmitZutat = (event: React.FormEvent): void => {
    event.preventDefault();

    addZutat(zutat, anteil);
    setZutat(defaultZutat);
    setAnteil(0);
  };

  return (
    <StyledForm
      className={className}
      onSubmit={onSubmitZutat}
    >
      <StyledLabel>{label}:</StyledLabel>
      {zutatenOptions
        ? <StyledSelect
          type="text"
          value={zutat}
          onChange={({ target: { value } }) => setZutat(value as string)}
        >
          {zutatenOptions}
        </StyledSelect>
        : <StyledTextField
          value={zutat}
          onChange={({ target: { value } }) => setZutat(value)}
        />}
      <StyledNumberField
        label="Anteil"
        value={anteil}
        update={(value) => setAnteil(value)}
      />
      <Button type="submit" >
          Hinzufügen
      </Button>
    </StyledForm>
  );
};
