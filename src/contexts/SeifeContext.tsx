import React, { FC, createContext, useContext } from 'react';
import {
  Zutat,
  ZutatenState,
  defaultZutaten,
  useZutatenState,
} from './ZutatenState';
import { RezeptState, defaultRezept, useRezeptState } from './RezeptState';
import { MetadataState, defaultMetadata, useMetadataState } from './MetadataState';
import {
  VerseifungsZutatenState,
  defaultVerseifungsZutaten,
  useVerseifungsZutatenState,
} from './VerseifungsZutatenState';

export interface SeifeState {
  rezept: RezeptState;
  zutaten: ZutatenState<Zutat>;
  verseifungsZutaten: VerseifungsZutatenState;
  metadata: MetadataState;
}

export const defaultState: SeifeState = {
  rezept: defaultRezept,
  zutaten: defaultZutaten,
  verseifungsZutaten: defaultVerseifungsZutaten,
  metadata: defaultMetadata,
};

const SeifeContext = createContext(defaultState);
const useSeife = (): SeifeState => useContext(SeifeContext);
export const useRezept = (): RezeptState => useSeife().rezept;
export const useZutaten = (): ZutatenState<Zutat> => useSeife().zutaten;
export const useVerseifungsZutaten = (): VerseifungsZutatenState => useSeife().verseifungsZutaten;
export const useMetadata = (): MetadataState => useSeife().metadata;

export const SeifeProvider: FC = ({ children })=> {
  const rezept = useRezeptState();
  const zutaten = useZutatenState();
  const verseifungsZutaten = useVerseifungsZutatenState();
  const metadata = useMetadataState();

  return <SeifeContext.Provider value ={{ rezept, zutaten, verseifungsZutaten, metadata }}>{children}</SeifeContext.Provider>;
};
