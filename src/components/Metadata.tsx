import React, { FC } from 'react';

import { DefaultProps } from './common/DefaultProps';
import { StyledTextField } from './common/StyledTextField';
import { useMetadata } from '../contexts/SeifeContext';

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
