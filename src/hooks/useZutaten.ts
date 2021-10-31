import { useContext } from 'react';
import { ZutatenContext, ZutatenState } from '../contexts/ZutatenContext';

export const useZutaten = (): ZutatenState => useContext(ZutatenContext);
