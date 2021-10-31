import React, { FC } from 'react';
import styled from '@emotion/styled';

import { Metadata } from './components/Metadata';
import { Rezept } from './components/Rezept';
import { Zutaten } from './components/zutaten/Zutaten';
import { Persistenz } from './components/Persistenz';
import { NeueZutat } from './components/zutaten/NeueZutat';
import { mainColor, margins } from './theme';
import { ZutatenProvider } from './contexts/ZutatenContext';
import { RezeptProvider } from './contexts/RezeptContext';
import { Info } from './components/Info';
import { Lauge } from './components/lauge/Lauge';

export const StyledApp = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledContainer = styled.div`
  max-width: 80%;
  padding-top: ${margins.m};
`;

const Line = styled.div`
  height: ${margins.m};
  border-bottom: 1px solid ${mainColor};
  margin-bottom: ${margins.m};
`;

const App: FC = () => {
  return (
    <StyledApp className="App">
      <StyledContainer>
        <RezeptProvider>
          <ZutatenProvider>
            <Metadata/>
            <Line />
            <Rezept />
            <Line />
            <NeueZutat />
            <Line />
            <Zutaten />
            <Lauge />
            <Line />
            <Info />
            <Persistenz />
          </ZutatenProvider>
        </RezeptProvider>
      </StyledContainer>
    </StyledApp>
  );
};

export default App;
