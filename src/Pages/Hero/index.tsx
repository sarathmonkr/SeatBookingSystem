import { Fragment } from 'react/jsx-runtime';
import { MoviesRunning, MovieType } from '../../Utils/Data/movies';
import MovieCard from '../../Components/MovieCard';
import { useEffect, useState } from 'react';
import { getAllCategoriesOfFilms, getAllMovies } from '../../Services/movies.service';

const LandingPage = () => {

    const [movies, setMovies] = useState<MovieType[]>(MoviesRunning);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    useEffect(() => {
        fetchAllCategories();
    }, [])

    useEffect(() => {
        const filteredMovies = getAllMovies(selectedCategory);
        setMovies(filteredMovies);
    }, [selectedCategory])

    const fetchAllCategories = () => {
        const categories: string[] = getAllCategoriesOfFilms()
        setCategories(categories);
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center pb-2">
                <h1 className="text-3xl font-bold mb-4">Movies</h1>
                <div className="flex items-center space-x-4">
                    <label htmlFor="category" className="text-lg font-medium text-gray-700">Category</label>
                    <select
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        name="category" id="category" className="border border-gray-300 p-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-grey-500 focus:border-grey-500 transition duration-150 ease-in-out">
                        <option value="">All</option>
                        {categories?.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies?.map((movie: MovieType) => (
                    <Fragment key={movie.id}>
                        <MovieCard {...movie} />
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default LandingPage