"use client";

import { useQueryState } from "./useQueryState";
import { useDebounceValue } from "./useDebounceValue";
import { useApiKey } from "./useApiKey";
import { useMovieQuery } from "./useMovieQuery";
import { ListFilm } from "./ListFilm";

export default function Home() {
  const [search, setSearch] = useQueryState("search", "");
  const debounceValue = useDebounceValue(search, 500);

  useApiKey();
  const { data, error, isLoading } = useMovieQuery(debounceValue);

  return (
    <div className="flex flex-col gap-4 py-8 max-w-4xl m-auto px-4">
      <header className="flex items-center justify-between relative">
        <h1 className="text-4xl font-bold absolute left-1/2 -translate-x-1/2 w-full text-center">
          Movie Finder
        </h1>
        <div className="flex-1"></div>
        <div className="md:static absolute right-4 bottom-[-2.5rem] md:bottom-auto">
          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <input
              type="checkbox"
              value="dark"
              className="toggle theme-controller"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </header>
      <main className="flex justify-center pt-5">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 w-lg max-w-2xl">
          <legend className="fieldset-legend">Search</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="Search a movie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </fieldset>
      </main>
      <div className="grid w-full grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pt-2">
        {debounceValue.length < 3 ? (
          <div className="flex justify-center items-center col-span-full w-full">
            <div role="alert" className="alert alert-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>Veuillez entrer au moins 3 caractères</span>
            </div>
          </div>
        ) : null}
        {isLoading ? (
          <div className="flex justify-center items-center col-span-full w-full h-32">
            <span className="loading loading-spinner loading-md"></span>
          </div>
        ) : null}
        {error || (data && data.Response === "False") ? (
          <div className="flex justify-center items-center col-span-full w-full">
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>
                {error
                  ? error.message || String(error)
                  : data && data.Error
                  ? data.Error
                  : "Aucun résultat trouvé"}
              </span>
            </div>
          </div>
        ) : null}

        <ListFilm data={data} />
      </div>
    </div>
  );
}
