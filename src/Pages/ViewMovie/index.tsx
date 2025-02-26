import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getMovieById } from '../../Services/movies.service';
import { MovieType } from '../../Utils/Data/movies';
import BreadCrumb from '../../Components/BreadCrumb';
import { toast } from 'react-toastify';

const ViewMovie = () => {
    const params = useParams();
    const movieId = params?.id;
    const navigate = useNavigate();

    const [movie, setMovie] = useState<MovieType | undefined>(undefined)

    useEffect(() => {
        fetchMovie(movieId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId]);

    function fetchMovie(id: string | undefined) {
        if (!id) return;
        const movie = getMovieById(+id);

        if (!movie) {
            toast.error('Movie not found.', {
                toastId: 'movie-not-found',
            })
            navigate('/')
        }

        setMovie(movie);
    }

    const onBookTicketClick = () => {
        navigate(`/book/${movieId}`);
    };

    return (
        <>
            <BreadCrumb
                data={[
                    {
                        title: "Movies",
                        href: "/"
                    },
                    {
                        title: movie?.title || "Movie"
                    }
                ]}
            />

            <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen ">

                <img src={movie?.poster_path} alt={movie?.title} className="w-64 h-auto rounded-lg shadow-lg mb-6 transition-transform transform hover:scale-105" />
                <div className="text-center max-w-lg bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-101">
                    <h1 className="text-4xl font-bold mb-4 text-gray-800">{movie?.title}</h1>
                    <p className="text-xl text-gray-600 mb-1">
                        Category: <span className="font-bold text-green-600">{movie?.category}</span>
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700 mb-4">{movie?.overview}</p>
                    <button
                        onClick={onBookTicketClick}
                        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors cursor-pointer"
                    >
                        Book Ticket
                    </button>
                </div>
            </div>
        </>
    );
};

export default ViewMovie;