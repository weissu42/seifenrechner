import React, { FC } from 'react';
import styled from '@emotion/styled';

import { StyledContainer } from './components/styles';
import { Metadata } from './components/Metadata';
import { Rezept } from './components/Rezept';
import { Zutaten } from './components/Zutaten';
import { Persistenz } from './components/Persistenz';
import { NeueZutat } from './components/NeueZutat';
import { margins } from './theme';
import { ZutatenProvider } from './contexts/ZutatenContext';

const Separator = styled.div`
  height: ${margins.s}
`;

const App: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ZutatenProvider>
          <StyledContainer>
            <Metadata/>
            <Separator />
            <Rezept />
            <Separator />
            <NeueZutat />
            <Separator />
            <Zutaten />
            <Separator />
            <Persistenz />
          </StyledContainer>
        </ZutatenProvider>
      </header>
    </div>
  );
};

export default App;
