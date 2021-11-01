import React from 'react';
import styled from '@emotion/styled';

import { DefaultProps } from '../common/DefaultProps';
import { margins } from '../../theme';
import { NumberField } from '../common/NumberField';
import { Button } from '../common/Button';
import { round } from '../../utils/round';
import { InfoText } from '../common/InfoText';
import { Zutat as ZutatModel, ZutatenState } from '../../contexts/ZutatenState';

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

interface ZutatProps<ZUTAT extends ZutatModel> extends DefaultProps {
  useZutaten: () => ZutatenState<ZUTAT>;
  zutat: ZUTAT;
  gesamtfettmasse: number;
  index: number;
  key: number;
}

export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: 100%;
  margin: 0 ${margins.s}
`;

export const Zutat = <ZUTAT extends ZutatModel, >({
  useZutaten,
  zutat: { name, anteil },
  gesamtfettmasse,
  index,
  key,
  className,
}: ZutatProps<ZUTAT>): JSX.Element => {
  const { updateZutat, removeZutat } = useZutaten();

  const onRemove = (event: React.FormEvent): void => {
    event.preventDefault();
    removeZutat(index);
  };

  return (
    <StyledRow className={className} key={key}>
      <StyledName>{name}</StyledName>
      <StyledMenge>{round(gesamtfettmasse * anteil / 100)} g</StyledMenge>
      <StyledAnteil
        value={anteil}
        update={(menge: number): void => updateZutat(index, menge)}
      /> %
      <Button onClick={onRemove}>Entfernen</Button>
    </StyledRow>
  );
};
