import { useState } from 'react';

import { verseifungszahlen } from '../resources/verseifungszahlen';

export interface Zutat {
  name: string;
  zusatz: boolean;
  verseifungszahl: number;
  jodzahl: number;
  anteil: number;
}

export interface ZutatenState {
  zutaten: Zutat[];
  getFette: () => Zutat[];
  getZusaetze: () => Zutat[];
  addZutat: (name: string, anteil: number) => void;
  removeZutat: (index: number) => void;
  updateZutat: (index: number, anteil: number) => void;
}

export const defaultZutaten: ZutatenState = {
  zutaten: [],
  getFette: () => [],
  getZusaetze: () => [],
  addZutat: () => undefined,
  removeZutat: () => undefined,
  updateZutat: () => undefined,
};

export const useZutatenState = (): ZutatenState => {
  const [ zutaten, setZutaten ] = useState<Zutat[]>(defaultZutaten.zutaten);

  const getFette = (): Zutat[] => {
    return zutaten.filter(({ zusatz }) => !zusatz);
  };

  const getZusaetze = (): Zutat[] => {
    return zutaten.filter(({ zusatz }) => zusatz);
  };

  const addZutat = (name: string, anteil: number): void => {
    const zutatInfo = verseifungszahlen[name];

    if (zutatInfo === undefined) {
      console.log('keine Zutat:', name);
      return;
    }

    const { verseifungszahl, jodzahl, zusatz } = zutatInfo;
    const newZutat: Zutat = { name, anteil, verseifungszahl, jodzahl, zusatz: zusatz ?? false };

    setZutaten([ ...zutaten, newZutat ]);
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

  return { zutaten, getFette, getZusaetze, addZutat, removeZutat, updateZutat };
};
