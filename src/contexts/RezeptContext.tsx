import React, { FC, createContext, useState } from 'react';
import { Rezept } from '../logic/model';

export interface RezeptState {
  rezept: Rezept;
  updateRezept: (seife: Partial<Rezept>) => void;
}

const defaultRezept: RezeptState = {
  rezept: { laugenunterschuss: 10, gesamtfettmasse: 300 },
  updateRezept: () => undefined,
};

export const RezeptContext = createContext(defaultRezept);

export const RezeptProvider: FC = ({ children })=> {
  const [ laugenunterschuss, setLaugenunterschuss ] = useState(10);
  const [ gesamtfettmasse, setGesamtfettmasse ] = useState(300);

  const updateRezept = ({ laugenunterschuss, gesamtfettmasse }: Partial<Rezept>): void => {
    if (laugenunterschuss !== undefined) {
      setLaugenunterschuss(laugenunterschuss);
    }

    if (gesamtfettmasse !== undefined) {
      setGesamtfettmasse(gesamtfettmasse);
    }
    console.log('updateRezept');
  };

  return <RezeptContext.Provider value ={{
    rezept: { laugenunterschuss, gesamtfettmasse },
    updateRezept,
  }}>{children}</RezeptContext.Provider>;
};
