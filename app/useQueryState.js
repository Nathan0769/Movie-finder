import { useState, useEffect } from "react";

export const useQueryState = (queryKey, initialValue) => {
  const [queryState, setqueryState] = useState(initialValue);

  useEffect(() => {
    const newURL = new URL(window.location);
    const params = newURL.searchParams;

    if (params.get(queryKey)) {
      setqueryState(params.get(queryKey));
    }
  }, [queryKey, initialValue]);

  useEffect(() => {
    const newURL = new URL(window.location);
    const params = newURL.searchParams;

    if (!queryState) {
      params.delete(queryKey);
    } else {
      params.set(queryKey, queryState);
    }

    window.history.replaceState(null, "", newURL.toString());
  }, [queryKey, queryState]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.replaceState({}, "");
    }
  }, []);

  return [queryState, setqueryState];
};
