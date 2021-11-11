import { getMovies } from "../services/fakeMovieService";

export function filterByGenre(desiredGenre) {
  const allMovies = getMovies();
  const filtered = allMovies.filter((m) => m.genre === desiredGenre);
  return filtered;
}
