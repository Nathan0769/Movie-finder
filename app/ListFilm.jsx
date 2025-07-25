export const ListFilm = ({ data }) => {
  if (!data || !data.Search || !Array.isArray(data.Search)) {
    return null;
  }

  return (
    <>
      {data.Search.map((film) => (
        <div
          key={film.imdbID}
          className="flex w-full max-w-[12rem] flex-col gap-4 mx-auto"
        >
          <div className="skeleton h-full w-full overflow-hidden">
            <img
              src={film.Poster}
              className="h-full w-full object-cover rounded-md shadow aspect-[2/3]"
            ></img>
          </div>
          <div className="h-7.5 w-full">
            <p className="text-xs font-medium overflow-hidden">{film.Title}</p>
          </div>
          <div className="h-4 w-full">
            <p className="text-xs font-medium">
              {film.Year} | {film.Type}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
