import useSWR from "swr";
import { useState, useEffect } from "react";

export const useMovieQuery = (search) => {
  const [apiKey, setApiKey] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setApiKey(localStorage.getItem("omdbAPIKEY"));
    }
  }, []);

  const shouldFetch = apiKey && search && search.length >= 3;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    shouldFetch ? `http://www.omdbapi.com/?apikey=${apiKey}&s=${search}` : null,
    fetcher
  );

  return { data, error, isLoading };
};
