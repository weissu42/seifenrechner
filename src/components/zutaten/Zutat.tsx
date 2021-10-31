import React, { FC } from 'react';
import styled from '@emotion/styled';

import { Zutat as ZutatModel } from '../../model';
import { DefaultProps } from '../common/DefaultProps';
import { margins } from '../../theme';
import { NumberField } from '../common/NumberField';
import { Button } from '../common/Button';
import { round } from '../../utils/round';
import { InfoText } from '../common/InfoText';

const StyledName = styled(InfoText)`
  flex: 1;
  margin: 0 ${margins.s};
`;

const StyledAnteil = styled(NumberField)`
  width: 20%;
  margin-right: ${margins.s};
`;

const StyledMenge = styled(InfoText)`
  width: 20%;
  margin: 0 ${margins.s};
`;

interface ZutatProps extends ZutatModel, DefaultProps {
  gesamtfettmasse: number;
  update: (anteil: number) => void;
  remove: () => void;
}

const ZutatComp: FC<ZutatProps> = ({ name, anteil, gesamtfettmasse, update, remove, className }) => {
  const onRemove = (event: React.FormEvent): void => {
    event.preventDefault();
    remove();
  };

  return (
    <div className={className}>
      <StyledName>{name}</StyledName>
      <StyledMenge>{round(gesamtfettmasse * anteil / 100)} g</StyledMenge>
      <StyledAnteil
        value={anteil}
        update={update}
      /> %
      <Button onClick={onRemove}>Entfernen</Button>
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

