import styled from '@emotion/styled';
import React from 'react';
import { margins } from '../../theme';

export const Separator = styled.div`
  height: ${margins.s};
`;

export const addSeparators = (withSeparators: JSX.Element[], element: JSX.Element, index: number): JSX.Element[] => {
  return (index === 0 ? [ element ] : [ ...withSeparators, <Separator key={`separator-${index}`}/>, element ]);
};
