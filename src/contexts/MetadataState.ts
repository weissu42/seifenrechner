import { useState } from 'react';

export interface Metadata {
  name: string;
}

export interface MetadataState {
  metadata: Metadata;
  updateMetadata: (seife: Partial<Metadata>) => void;
}

export const defaultMetadata: MetadataState = {
  metadata: { name: 'Seife' },
  updateMetadata: () => undefined,
};

export const useMetadataState = (): MetadataState => {
  const [ name, setName ] = useState(defaultMetadata.metadata.name);

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
