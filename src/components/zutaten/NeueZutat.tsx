import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { MenuItem, Select } from '@mui/material';
import { DefaultProps } from '../common/DefaultProps';
import { Button } from '../common/Button';
import { StyledNumberField } from '../common/NumberField';
import { useZutaten } from '../../contexts/SeifeContext';
import { zutatenNamen } from '../../resources/verseifungszahlen';
import { margins } from '../../theme';
import { InfoText } from '../common/InfoText';

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledSelect = styled(Select)`
  margin: 0 ${margins.s};
  max-width: 50%;
  min-width: 200px;
`;

export const NeueZutat: FC<DefaultProps> = ({ className }) => {
  const { addZutat } = useZutaten();
  const [ zutat, setZutat ] = useState(zutatenNamen[0] ?? '');
  const [ anteil, setAnteil ] = useState(0);

  const onSubmitZutat = (event: React.FormEvent): void => {
    event.preventDefault();

    addZutat(zutat, anteil);
    setZutat(zutatenNamen[0] ?? '');
    setAnteil(0);
  };

  return (
    <StyledForm
      className={className}
      onSubmit={onSubmitZutat}
    >
      <InfoText>Neues Öl, Fett oder Säure:</InfoText>
      <StyledSelect
        type="text"
        value={zutat}
        onChange={({ target: { value } }) => setZutat(value as string)}
      >
        {zutatenNamen.map((name: string): JSX.Element => <MenuItem value={name} key={name}>{name}</MenuItem>)}
      </StyledSelect>
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
