import useSWR from "swr";

export const useMovieQuery = (search) => {
  const shouldFetch = search && search.length >= 3;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    shouldFetch ? `/api/omdb?s=${encodeURIComponent(search)}` : null,
    fetcher
  );

  return { data, error, isLoading };
};
