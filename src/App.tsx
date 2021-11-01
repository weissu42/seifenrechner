import React, { FC } from 'react';
import styled from '@emotion/styled';

import { Metadata } from './components/Metadata';
import { Rezept } from './components/Rezept';
import { Zutaten } from './components/zutaten/Zutaten';
import { Persistenz } from './components/Persistenz';
import { mainColor, margins } from './theme';
import { Info } from './components/Info';
import { Lauge } from './components/lauge/Lauge';
import { SeifeProvider } from './contexts/SeifeContext';
import { NeueZutaten } from './components/zutaten/NeueZutaten';

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
        <SeifeProvider>
          <Metadata/>
          <Line />
          <Rezept />
          <Line />
          <NeueZutaten />
          <Line />
          <Zutaten />
          <Lauge />
          <Line />
          <Info />
          <Persistenz />
        </SeifeProvider>
      </StyledContainer>
    </StyledApp>
  );
};

export default App;
