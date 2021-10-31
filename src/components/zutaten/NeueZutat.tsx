import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import { DefaultProps } from '../common/DefaultProps';
import { Button } from '../common/Button';
import { StyledNumberField } from '../common/NumberField';
import { StyledTextField } from '../common/StyledTextField';
import { useZutaten } from '../../contexts/SeifeContext';

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const NeueZutat: FC<DefaultProps> = ({ className }) => {
  const { addZutat } = useZutaten();
  const [ zutat, setZutat ] = useState('');
  const [ anteil, setAnteil ] = useState(0);

  const onSubmitZutat = (event: React.FormEvent): void => {
    event.preventDefault();
    addZutat(zutat, anteil);
    setZutat('');
    setAnteil(0);
  };

  return (
    <StyledForm
      className={className}
      onSubmit={onSubmitZutat}
    >
      <StyledTextField
        label="Neues Öl, Fett oder Säure"
        type="text"
        value={zutat}
        onChange={({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>) => setZutat(value)}
        onSubmit={onSubmitZutat}
      />
      <StyledNumberField
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
