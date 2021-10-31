import React, { FC } from 'react';

import { useMetadata } from '../hooks/useMetadata';
import { DefaultProps } from './common/DefaultProps';
import { StyledTextField } from './common/StyledTextField';

export const Metadata: FC<DefaultProps> = ({ className }) => {
  const { metadata: { name }, updateMetadata } = useMetadata();

  return (
    <StyledTextField
      className={className}
      label={'Name'}
      value={name}
      onChange={({ target: { value: name } }) => updateMetadata({ name })}
    />
  );
};
