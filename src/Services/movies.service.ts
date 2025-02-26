import { MoviesRunning } from './../Utils/Data/movies';

//get all movies
export function getAllMovies(category: string) {
    if (category === '') {
        return MoviesRunning;
    }
    const MoviesRunningFiltered = MoviesRunning?.filter(movie => movie.category === category);
    return MoviesRunningFiltered ?? [];
}

// Function to get movie by id
export function getMovieById(id: number) {
    const MoviesRunningFiltered = MoviesRunning?.filter(movie => movie.id === id);
    return MoviesRunningFiltered[0];
}

// Function to get all categories of movies
export function getAllCategoriesOfFilms(): string[] {
    const categories = MoviesRunning?.map(movie => movie.category);
    return categories ? [...new Set(categories.filter((category): category is string => category !== undefined))] : [];
}