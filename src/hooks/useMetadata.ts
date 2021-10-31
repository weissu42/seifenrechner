import { useState } from 'react';
import { Metadata } from '../logic/model';

interface UseMetadata {
  metadata: Metadata;
  updateMetadata: (seife: Partial<Metadata>) => void;
}

export const useMetadata = (): UseMetadata => {
  const [ name, setName ] = useState('Seife');

  const updateMeta = ({ name }: Partial<Metadata>): void => {
    if (name !== undefined) {
      setName(name);
    }
  };

  return {
    metadata: { name },
    updateMetadata: updateMeta,
  };
};
