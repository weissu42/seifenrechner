import React, { FC } from 'react';
import { InputLabel } from '@mui/material';
import { useCalculate } from '../hooks/useCalculate';
import { SectionTitle } from './common/SectionTitle';

export const Info: FC = () => {
  const { calculateJodzahl } = useCalculate();

  const jodzahl = calculateJodzahl();
  return (
    <>
      <SectionTitle>Informationen</SectionTitle>
      <InputLabel>Jodzahl: {jodzahl ?? '?'}</InputLabel>
    </>
  );
};
