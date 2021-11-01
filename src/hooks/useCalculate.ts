import { umrechnungsfaktor } from '../resources/verseifungszahlen';
import { VerseifungsZutat } from '../contexts/ZutatenState';
import { useRezept, useVerseifungsZutaten } from '../contexts/SeifeContext';

interface Lauge {
  naoh: number;
  koh: number;
}

interface UseCalculate {
  calculateLauge: () => Lauge | undefined;
  calculateJodzahl: () => number | undefined;
  calculateFluessigkeit: () => number;
}

const calculateLaugeFor = (zutaten: VerseifungsZutat[]): number => zutaten
  .map(({ verseifungszahl, anteil }) => verseifungszahl * anteil)
  .reduce((sum, menge) => sum + menge, 0) / 1000 / 100;

export const useCalculate = (): UseCalculate => {
  const {
    rezept: {
      gesamtfettmasse,
      laugenunterschuss,
      naohAnteil,
      fluessigkeitsanteil,
    },
  } = useRezept();
  const { getFette, getZusaetze } = useVerseifungsZutaten();

  const validateAnteile = (): boolean => {
    const anteilSum = getFette().reduce<number>((sum, { anteil }) => sum + anteil, 0);
    return anteilSum === 100;
  };

  const calculateLauge = (): Lauge | undefined => {
    if (!validateAnteile()) {
      return undefined;
    }

    const laugeFette = calculateLaugeFor(getFette());
    const laugeZusaetze = calculateLaugeFor(getZusaetze());
    const lauge = gesamtfettmasse * ((100 - laugenunterschuss) / 100 * laugeFette + laugeZusaetze);

    return {
      naoh: lauge,
      koh: lauge * (100 - naohAnteil) / 100 * umrechnungsfaktor,
    };
  };

  const calculateJodzahl = (): number | undefined => {
    if (!validateAnteile()) {
      return undefined;
    }

    const jodzahl = getFette()
      .map(({ jodzahl, anteil }) => jodzahl * anteil)
      .reduce((sum, menge) => sum + menge);

    return jodzahl / 100;
  };

  const calculateFluessigkeit = (): number => {
    return gesamtfettmasse * fluessigkeitsanteil / 100;
  };

  return { calculateLauge, calculateJodzahl, calculateFluessigkeit };
};
