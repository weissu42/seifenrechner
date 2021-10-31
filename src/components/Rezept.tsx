import React, { FC } from 'react';

import { NumberField } from './NumberField';
import { useRezept } from '../hooks/useRezept';
import { DefaultProps } from './DefaultProps';

export const Rezept: FC<DefaultProps> = ({ className }) => {
  const { rezept: { laugenunterschuss, gesamtfettmasse }, updateRezept } = useRezept();

  return (
    <div className={className}>
      <NumberField
        label={'Laugenunterschuss'}
        value={laugenunterschuss}
        update={(value) => updateRezept({ laugenunterschuss: value })}
      />
      <NumberField
        label={'Gesamtfettmasse'}
        value={gesamtfettmasse}
        validate={(value) => 0 < value}
        update={(value) => updateRezept({ gesamtfettmasse: value })}
      />
    </div>
  );
};
