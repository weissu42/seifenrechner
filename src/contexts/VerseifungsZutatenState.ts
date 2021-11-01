import { verseifungszahlen } from '../resources/verseifungszahlen';
import { VerseifungsZutat, ZutatenState, defaultZutaten, useZutatenState } from './ZutatenState';

export interface VerseifungsZutatenState extends ZutatenState <VerseifungsZutat> {
  getFette: () => VerseifungsZutat[];
  getZusaetze: () => VerseifungsZutat[];
}

export const defaultVerseifungsZutaten: VerseifungsZutatenState = {
  ...defaultZutaten,
  zutaten: [],
  getFette: () => [],
  getZusaetze: () => [],
  addZutat: () => undefined,
};
export const useVerseifungsZutatenState = (): VerseifungsZutatenState => {
  const { zutaten, setZutaten, updateZutat, removeZutat } = useZutatenState<VerseifungsZutat>();

  const getFette = (): VerseifungsZutat[] => {
    return zutaten.filter(({ zusatz }) => !zusatz);
  };

  const getZusaetze = (): VerseifungsZutat[] => {
    return zutaten.filter(({ zusatz }) => zusatz);
  };

  const addZutat = (name: string, anteil: number): void => {
    const zutatInfo = verseifungszahlen[name];

    if (zutatInfo === undefined) {
      console.log('keine Zutat:', name);
      return;
    }

    const { verseifungszahl, jodzahl, zusatz } = zutatInfo;
    const newZutat: VerseifungsZutat = { name, anteil, verseifungszahl, jodzahl, zusatz: zusatz ?? false };

    setZutaten([ ...zutaten, newZutat ]);
  };

  return { zutaten, setZutaten, getFette, getZusaetze, addZutat, removeZutat, updateZutat };
};
