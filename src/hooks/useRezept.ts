import { useContext } from 'react';
import { RezeptContext, RezeptState } from '../contexts/RezeptContext';

export const useRezept = (): RezeptState => useContext(RezeptContext);

