import React, { FC } from 'react';
import styled from '@emotion/styled';
import { margins } from '../../theme';
import { DefaultProps } from '../common/DefaultProps';
import { SectionTitle } from '../common/SectionTitle';
import { InfoText } from '../common/InfoText';
import { useRezept, useVerseifungsZutaten, useZutaten } from '../../contexts/SeifeContext';
import { ZutatenListe } from './ZutatenListe';
import { Separator } from '../common/Separator';

const StyledContainer = styled.div`
  margin-bottom: ${margins.m};
`;

const StyledFallback = styled(InfoText)`
  margin-left: ${margins.s};
`;

export const Zutaten: FC<DefaultProps> = ({ className }) => {
  const { zutaten: verseifungsZutaten } = useVerseifungsZutaten();
  const { zutaten } = useZutaten();
  const { rezept: { gesamtfettmasse } } = useRezept();

  return (
    <StyledContainer className={className}>
      <SectionTitle>Zutaten</SectionTitle>
      {verseifungsZutaten.length > 0
        ? <ZutatenListe useZutaten={useVerseifungsZutaten} gesamtfettmasse={gesamtfettmasse} />
        : <StyledFallback>Noch keine Öle und Fette eingegeben</StyledFallback>
      }
      {zutaten.length > 0
        ? (
          <>
            <Separator />
            <ZutatenListe useZutaten={useZutaten} gesamtfettmasse={gesamtfettmasse} />
          </>
        )
        : undefined
      }
    </StyledContainer>
  );
};
