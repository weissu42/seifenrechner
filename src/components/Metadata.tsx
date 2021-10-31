import React, { FC } from 'react';
import { TextField } from '@mui/material';

import { useMetadata } from '../hooks/useMetadata';
import { DefaultProps } from './DefaultProps';

export const Metadata: FC<DefaultProps> = ({ className }) => {
  const { metadata: { name }, updateMetadata } = useMetadata();

  return (
    <TextField
      className={className}
      label={'Name'}
      value={name}
      onChange={({ target: { value: name } }) => updateMetadata({ name })}
    />
  );
};
