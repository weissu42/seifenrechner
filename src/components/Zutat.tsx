import React, { FC } from 'react';
import styled from '@emotion/styled';
import { Button, InputLabel } from '@mui/material';
import { Zutat as ZutatModel } from '../logic/model';
import { NumberField } from './NumberField';
import { DefaultProps } from './DefaultProps';
import { margins } from '../theme';

const StyledLabel = styled(InputLabel)`
  width: 80%;
  padding: 0 ${margins.s};
`;

const StyledNumberField = styled(NumberField)`
  width: 20%;
`;

interface ZutatProps extends ZutatModel, DefaultProps {
  update: (anteil: number) => void;
  remove: () => void;
}

const ZutatComp: FC<ZutatProps> = ({ name, anteil, update, remove, className }) => {
  return (
    <div className={className}>
      <StyledLabel>{name}</StyledLabel>
      <StyledNumberField
        value={anteil}
        update={update}
      />
      <Button onClick={remove}>Entfernen</Button>
    </div>
  );
};

export const Zutat = styled(ZutatComp)`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: 100%;
  margin: ${margins.m} ${margins.s}
`;

