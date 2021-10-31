import React, { FC } from 'react';

import { TextField, TextFieldProps } from '@mui/material';
import styled from '@emotion/styled';
import { margins } from '../../theme';

interface NumberTextFieldProps {
  validate?: (value: number) => boolean;
  update: (value: number) => void;
}

const validatePercentage = (value: number): boolean => (0 <= value && value <= 100);

export const NumberField: FC <NumberTextFieldProps & TextFieldProps> = (props) => {
  const { validate, update, ...textFieldProps } = props;

  const onChange = ({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
    const parsed = parseFloat(value !== '' ? value : '0');

    if (isNaN(parsed) || !(validate ?? validatePercentage)(parsed)) {
      return;
    }

    update(parsed);
  };

  return (
    <TextField
      {...textFieldProps}
      type="number"
      onChange={onChange}
    />
  );
};

export const StyledNumberField = styled(NumberField)`
  margin-right: ${margins.s};
`;
