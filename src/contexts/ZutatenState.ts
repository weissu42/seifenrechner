import { useState } from 'react';

export interface Zutat {
  name: string;
  anteil: number;
}

export interface VerseifungsZutat extends Zutat {
  zusatz: boolean;
  verseifungszahl: number;
  jodzahl: number;
}

export interface ZutatenState <ZUTAT extends Zutat> {
  zutaten: ZUTAT[];
  setZutaten: (zutaten: ZUTAT[]) => void;
  addZutat: (name: string, anteil: number) => void;
  removeZutat: (index: number) => void;
  updateZutat: (index: number, anteil: number) => void;
}

export const defaultZutaten: ZutatenState<Zutat> = {
  zutaten: [],
  setZutaten: () => undefined,
  addZutat: () => undefined,
  removeZutat: () => undefined,
  updateZutat: () => undefined,
};

export const useZutatenState = <ZUTAT extends Zutat,>(): ZutatenState<ZUTAT> => {
  const [ zutaten, setZutaten ] = useState<ZUTAT[]>([]);

  const addZutat = (name: string, anteil: number): void => {
    setZutaten([ ...zutaten, { name, anteil } as ZUTAT ]);
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

  return { zutaten, setZutaten, addZutat, removeZutat, updateZutat };
};

