import { useState } from 'react';
import { Rezept } from '../logic/model';

interface UseRezept {
  rezept: Rezept;
  updateRezept: (seife: Partial<Rezept>) => void;
}

export const useRezept = (): UseRezept => {
  const [ laugenunterschuss, setLaugenunterschuss ] = useState(10);
  const [ gesamtfettmasse, setGesamtfettmasse ] = useState(300);

  const updateRezept = ({ laugenunterschuss, gesamtfettmasse }: Partial<Rezept>): void => {
    if (laugenunterschuss !== undefined) {
      setLaugenunterschuss(laugenunterschuss);
    }

    if (gesamtfettmasse !== undefined) {
      setGesamtfettmasse(gesamtfettmasse);
    }
  };

  return {
    rezept: { laugenunterschuss, gesamtfettmasse },
    updateRezept,
  };
};
