import styled from '@emotion/styled';

import { TextField } from '@mui/material';
import { mainColor, margins } from '../theme';
import { NumberField } from './NumberField';

export const StyledContainer = styled.div`
  display: flex; 
  flex-direction: column;
  max-width: 50%;
  margin: ${margins.m} ${margins.m};
`;

export const StyledTextField = styled(TextField)`
  margin-right: ${margins.s}
`;

export const StyledNumberField = styled(NumberField)`
  margin-right: ${margins.s}
`;

export const StyledText = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  color: ${mainColor};
`;
