import { useContext } from 'react';
import { limitContext } from 'contexts/limitsContext';

export const useLimit = () => {
  const limit = useContext(limitContext);
  return limit;
};
