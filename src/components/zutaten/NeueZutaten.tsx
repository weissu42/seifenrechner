import React, { FC } from 'react';
import { MenuItem } from '@mui/material';
import styled from '@emotion/styled';

import { NeueZutat } from './NeueZutat';
import { useVerseifungsZutaten, useZutaten } from '../../contexts/SeifeContext';
import { zutatenNamen } from '../../resources/verseifungszahlen';
import { margins } from '../../theme';

const StyledNeueZutat = styled(NeueZutat)`
margin-top: ${margins.m};
`;

export const NeueZutaten: FC = () => {
  const zutatenOptions = zutatenNamen.map((name: string): JSX.Element => <MenuItem value={name} key={name}>{name}</MenuItem>);

  return (
    <>
      <NeueZutat label="Neues Öl, Fett oder Säure" useZutaten={useVerseifungsZutaten} zutatenOptions={zutatenOptions}/>
      <StyledNeueZutat label="Neuer Zusatz" useZutaten={useZutaten}/>
    </>
  );
};
