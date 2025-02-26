import { MoviesRunning } from './../Utils/Data/movies';

// Function to get movie by id
export function getMovieById(id: number) {
    const MoviesRunningFiltered = MoviesRunning?.filter(movie => movie.id === id);
    return MoviesRunningFiltered[0];
}