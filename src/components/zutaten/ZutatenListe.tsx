import React from 'react';
import { Zutat as ZutatModel, ZutatenState } from '../../contexts/ZutatenState';
import { Zutat } from './Zutat';
import { addSeparators } from '../common/Separator';

interface ZutatenListeProps<ZUTAT extends ZutatModel> {
  useZutaten: () => ZutatenState<ZUTAT>;
  gesamtfettmasse: number;
}

export const ZutatenListe = <ZUTAT extends ZutatModel, >({
  useZutaten,
  gesamtfettmasse,
}: ZutatenListeProps<ZUTAT>): JSX.Element => {
  const { zutaten } = useZutaten();

  return (<>
    {zutaten.map((zutat, index) => (
      <Zutat
        useZutaten={useZutaten}
        zutat={zutat}
        gesamtfettmasse={gesamtfettmasse}
        index={index}
        key={index}
      />)).reduce(addSeparators, [])}
  </>);
};
