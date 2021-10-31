import React, { FC, createContext, useState } from 'react';

import { Zutat } from '../logic/model';

export interface ZutatenState {
  zutaten: Zutat[];
  addZutat: (zutat: Zutat) => void;
  removeZutat: (index: number) => void;
  updateZutat: (index: number, anteil: number) => void;
}

const defaultZutaten: ZutatenState = {
  zutaten: [],
  addZutat: () => undefined,
  removeZutat: () => undefined,
  updateZutat: () => undefined,
};

export const ZutatenContext = createContext(defaultZutaten);

export const ZutatenProvider: FC = ({ children })=> {
  const [ zutaten, setZutaten ] = useState<Zutat[]>([ { name: 'Beispiel', verseifungszahl: 0.13, anteil: 50 } ]);

  const addZutat = (zutat: Zutat): void => {
    setZutaten([ ...zutaten, zutat ]);
  };

  const removeZutat = (index: number): void => {
    setZutaten([ ...zutaten.slice(0, index), ...zutaten.slice(index + 1) ]);
  };

  const updateZutat = (index: number, anteil: number): void => {
    const zutat = zutaten[index];
    if (zutat === undefined) {
      return;
    }
    zutat.anteil = anteil;
    setZutaten([ ...zutaten.slice(0, index), zutat, ...zutaten.slice(index + 1) ]);
  };

  return <ZutatenContext.Provider value ={{ zutaten, addZutat, removeZutat, updateZutat }}>{children}</ZutatenContext.Provider>;
};
