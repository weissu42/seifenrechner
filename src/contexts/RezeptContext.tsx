import React, { FC, createContext, useState } from 'react';
import { Rezept } from '../model';

export interface RezeptState {
  rezept: Rezept;
  updateRezept: (seife: Partial<Rezept>) => void;
}

const defaultRezept: RezeptState = {
  rezept: { laugenunterschuss: 10, gesamtfettmasse: 300, kaohAnteil: 0, naohAnteil: 100 },
  updateRezept: () => undefined,
};

export const RezeptContext = createContext(defaultRezept);

export const RezeptProvider: FC = ({ children })=> {
  const [ laugenunterschuss, setLaugenunterschuss ] = useState(defaultRezept.rezept.laugenunterschuss);
  const [ gesamtfettmasse, setGesamtfettmasse ] = useState(defaultRezept.rezept.gesamtfettmasse);
  const [ kaohAnteil, setKaohAnteil ] = useState(defaultRezept.rezept.kaohAnteil);
  const [ naohAnteil, setNaohAnteil ] = useState(defaultRezept.rezept.naohAnteil);

  const updateRezept = ({ laugenunterschuss, gesamtfettmasse, kaohAnteil, naohAnteil }: Partial<Rezept>): void => {
    if (laugenunterschuss !== undefined) {
      setLaugenunterschuss(laugenunterschuss);
    }

    if (gesamtfettmasse !== undefined) {
      setGesamtfettmasse(gesamtfettmasse);
    }

    if (kaohAnteil !== undefined) {
      setKaohAnteil(kaohAnteil);
    }

    if (naohAnteil !== undefined) {
      setNaohAnteil(naohAnteil);
    }
  };

  return <RezeptContext.Provider value ={{
    rezept: { laugenunterschuss, gesamtfettmasse, kaohAnteil, naohAnteil },
    updateRezept,
  }}>{children}</RezeptContext.Provider>;
};
