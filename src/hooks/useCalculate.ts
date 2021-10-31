import { useRezept } from './useRezept';
import { useZutaten } from './useZutaten';

interface Lauge {
  naoh: number;
  kaoh: number;
}

interface UseCalculate {
  calculate: () => Lauge;
}

export const useCalculate = (): UseCalculate => {
  const { rezept: { gesamtfettmasse, laugenunterschuss, kaohAnteil, naohAnteil } } = useRezept();
  const { zutaten } = useZutaten();

  const calculate = (): Lauge => {
    const result = zutaten
      .map(({ verseifungszahl, anteil }) => verseifungszahl * anteil / 100 * gesamtfettmasse)
      .reduce((prev, curr) => prev + curr);
    return { naoh: result * laugenunterschuss * naohAnteil / 100, kaoh: result * laugenunterschuss * kaohAnteil / 100 };
  };

  return { calculate };
};
