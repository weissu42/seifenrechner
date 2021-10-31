import { useState } from 'react';

export interface Rezept {
  laugenunterschuss: number;
  gesamtfettmasse: number;
  naohAnteil: number;
  laugenfluessigkeit: string;
}

export interface RezeptState {
  rezept: Rezept;
  updateRezept: (seife: Partial<Rezept>) => void;
}

export const defaultRezept: RezeptState = {
  rezept: {
    laugenunterschuss: 10,
    gesamtfettmasse: 300,
    naohAnteil: 100,
    laugenfluessigkeit: 'Wasser',
  },
  updateRezept: () => undefined,
};

export const useRezeptState = (): RezeptState => {
  const [ laugenunterschuss, setLaugenunterschuss ] = useState(defaultRezept.rezept.laugenunterschuss);
  const [ gesamtfettmasse, setGesamtfettmasse ] = useState(defaultRezept.rezept.gesamtfettmasse);
  const [ naohAnteil, setNaohAnteil ] = useState(defaultRezept.rezept.naohAnteil);
  const [ laugenfluessigkeit, setLaugenfluessigkeit ] = useState(defaultRezept.rezept.laugenfluessigkeit);

  const updateRezept = ({ laugenunterschuss, gesamtfettmasse, naohAnteil, laugenfluessigkeit }: Partial<Rezept>): void => {
    if (laugenunterschuss !== undefined) {
      setLaugenunterschuss(laugenunterschuss);
    }

    if (gesamtfettmasse !== undefined) {
      setGesamtfettmasse(gesamtfettmasse);
    }

    if (naohAnteil !== undefined) {
      setNaohAnteil(naohAnteil);
    }

    if (laugenfluessigkeit !== undefined) {
      setLaugenfluessigkeit(laugenfluessigkeit);
    }
  };

  return {
    rezept: {
      laugenunterschuss,
      gesamtfettmasse,
      naohAnteil,
      laugenfluessigkeit,
    },
    updateRezept,
  };
};

