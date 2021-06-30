import { useState } from 'react';

export const useCount = (arr) => {

  const [count, setCount] = useState(0);

  const func = () => {
    setCount(current => current === arr.length - 1 ? 0 : current + 1);
  };

  return { count, setCount, func }
};