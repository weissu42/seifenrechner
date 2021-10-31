import React, { FC } from 'react';
import styled from '@emotion/styled';
import { margins } from '../../theme';
import { Zutat } from './Zutat';
import { DefaultProps } from '../common/DefaultProps';
import { SectionTitle } from '../common/SectionTitle';
import { InfoText } from '../common/InfoText';
import { Zutat as ZutatModel } from '../../contexts/ZutatenState';
import { useRezept, useZutaten } from '../../contexts/SeifeContext';

const StyledZutat = styled(Zutat)`
  margin-top: ${margins.m};
`;

const StyledContainer = styled.div`
  margin-bottom: ${margins.m};
`;

const StyledFallback = styled(InfoText)`
  margin-left: ${margins.s};
`;

const Separator = styled.div`
  height: ${margins.s};
`;

const addSeparators = (withSeparators: JSX.Element[], zutat: JSX.Element, index: number): JSX.Element[] => {
  return (index === 0 ? [ zutat ] : [ ...withSeparators, <Separator key={`separator-${index}`}/>, zutat ]);
};

export const Zutaten: FC<DefaultProps> = ({ className }) => {
  const { zutaten, updateZutat, removeZutat } = useZutaten();
  const { rezept: { gesamtfettmasse } } = useRezept();

  const renderZutat = (zutat: ZutatModel, index: number): JSX.Element => (
    <StyledZutat
      {...zutat}
      gesamtfettmasse ={gesamtfettmasse}
      update={(menge) => updateZutat(index, menge)}
      remove={() => removeZutat(index)}
      key={index}
    />
  );

  const renderZutaten = (): JSX.Element[] => zutaten.map(renderZutat).reduce(addSeparators, []);

  return (
    <StyledContainer className={className}>
      <SectionTitle>Zutaten</SectionTitle>
      {zutaten.length > 0
        ? renderZutaten()
        : <StyledFallback>Noch keine Öle und Fette eingegeben</StyledFallback>
      }
    </StyledContainer>
  );
};
