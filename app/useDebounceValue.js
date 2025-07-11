import { useState, useEffect } from "react";

export const useDebounceValue = (value, time) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setDebounce(value);
    }, time);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [time, value]);

  return debounce;
};
