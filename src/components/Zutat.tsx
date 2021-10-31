import React, { FC } from 'react';
import styled from '@emotion/styled';
import { InputLabel } from '@mui/material';
import { Zutat as ZutatModel } from '../logic/model';
import { DefaultProps } from './DefaultProps';
import { margins } from '../theme';
import { NumberField } from './NumberField';
import { Button } from './Button';

const StyledName = styled(InputLabel)`
  flex: 1;
  margin: 0 ${margins.s};
`;

const StyledAnteil = styled(NumberField)`
  width: 20%;
  margin-right: ${margins.s};
`;

const StyledMenge = styled(InputLabel)`
  width: 20%;
  margin: 0 ${margins.s};
`;

interface ZutatProps extends ZutatModel, DefaultProps {
  gesamtfettmasse: number;
  update: (anteil: number) => void;
  remove: () => void;
}

const ZutatComp: FC<ZutatProps> = ({ name, anteil, gesamtfettmasse, update, remove, className }) => {
  return (
    <div className={className}>
      <StyledName>{name}</StyledName>
      <StyledAnteil
        value={anteil}
        update={update}
      />
      <StyledMenge>{gesamtfettmasse * anteil / 100} g</StyledMenge>
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

