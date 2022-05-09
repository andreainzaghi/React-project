import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [debounce, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounce;
};
