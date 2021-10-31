import React, { FC, createContext, useContext } from 'react';
import { ZutatenState, defaultZutaten, useZutatenState } from './ZutatenState';
import { RezeptState, defaultRezept, useRezeptState } from './RezeptState';
import { MetadataState, defaultMetadata, useMetadataState } from './MetadataState';

export interface SeifeState {
  rezept: RezeptState;
  zutaten: ZutatenState;
  metadata: MetadataState;
}

export const defaultState: SeifeState = {
  rezept: defaultRezept,
  zutaten: defaultZutaten,
  metadata: defaultMetadata,
};

const SeifeContext = createContext(defaultState);
const useSeife = (): SeifeState => useContext(SeifeContext);
export const useRezept = (): RezeptState => useSeife().rezept;
export const useZutaten = (): ZutatenState => useSeife().zutaten;
export const useMetadata = (): MetadataState => useSeife().metadata;

export const SeifeProvider: FC = ({ children })=> {
  const rezept = useRezeptState();
  const zutaten = useZutatenState();
  const metadata = useMetadataState();

  return <SeifeContext.Provider value ={{ rezept, zutaten, metadata }}>{children}</SeifeContext.Provider>;
};
