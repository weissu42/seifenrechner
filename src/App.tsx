import React, { FC } from 'react';
import styled from '@emotion/styled';

import { StyledContainer } from './components/styles';
import { Metadata } from './components/Metadata';
import { Rezept } from './components/Rezept';
import { Zutaten } from './components/Zutaten';
import { Persistenz } from './components/Persistenz';
import { NeueZutat } from './components/NeueZutat';
import { mainColor, margins } from './theme';
import { ZutatenProvider } from './contexts/ZutatenContext';
import { RezeptProvider } from './contexts/RezeptContext';

const Line = styled.div`
  height: ${margins.m};
  border-bottom: 1px solid ${mainColor};
  margin-bottom: ${margins.m};
`;

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <RezeptProvider>
          <ZutatenProvider>
            <StyledContainer>
              <Metadata/>
              <Line />
              <Rezept />
              <Line />
              <NeueZutat />
              <Line />
              <Zutaten />
              <Line />
              <Persistenz />
            </StyledContainer>
          </ZutatenProvider>
        </RezeptProvider>
      </header>
    </div>
  );
};

export default App;
