import React, { FC } from 'react';

import { TextField, TextFieldProps } from '@mui/material';

interface NumberTextFieldProps {
  validate?: (value: number) => boolean;
  update: (value: number) => void;
}

const validatePercentage = (value: number): boolean => (0 <= value && value <= 100);

export const NumberField: FC <NumberTextFieldProps & TextFieldProps> = (props) => {
  const { validate, update, ...textFieldProps } = props;

  const onChange = ({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>): void => {
    const parsed = parseFloat(value);

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

