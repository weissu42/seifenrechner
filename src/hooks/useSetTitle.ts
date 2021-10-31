import { useEffect, useState } from 'react';

export const useSetTitle = (name: string): void => {
  const [ debounceTimeout, setDebounceTimeout ] = useState<NodeJS.Timeout | undefined>(undefined);

  const setTitle = (): void => {
    document.title = `${name} - Seifenrechner by weissu42`;
  };

  const updateTitle = (): void => {
    if (debounceTimeout !== undefined) {
      clearTimeout(debounceTimeout);
    }

    setDebounceTimeout(setTimeout(setTitle, 1000));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(setTitle , []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(updateTitle,[ name ]);
};
