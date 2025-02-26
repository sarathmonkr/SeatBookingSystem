import { Fragment } from 'react/jsx-runtime';
import { MoviesRunning, MovieType } from '../../Utils/Data/movies';
import MovieCard from '../../Components/MovieCard';

const LandingPage = () => {

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Movies</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {MoviesRunning?.map((movie: MovieType) => (
                    <Fragment key={movie.id}>
                        <MovieCard {...movie} />
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

export default LandingPage