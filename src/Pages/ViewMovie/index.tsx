import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

            <div className="flex flex-col items-center p-6 ">
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-2/3">
                    <img src={movie?.poster_path} alt={movie?.title} className="w-full md:w-1/3 h-[40rem] object-cover transition-transform transform hover:scale-105" />
                    <div className="p-6 flex flex-col justify-between w-full md:w-2/3 h-[30rem]">
                        <div>
                            <h1 className="text-4xl font-bold mb-4 text-gray-800">{movie?.title}</h1>
                            <p className="text-xl text-gray-600 mb-1">
                                Category: <span className="font-bold text-green-600">{movie?.category}</span>
                            </p>
                            <p className="text-lg text-gray-600 mb-1">
                                Release Date: <span className="font-bold text-green-600">{movie?.release_date}</span>
                            </p>
                            <p className="text-lg text-gray-600 mb-1">
                                Duration: <span className="font-bold text-green-600">{movie?.duration} mins</span>
                            </p>
                            <p className="text-lg text-gray-600 mb-1">
                                Language: <span className="font-bold text-green-600">{movie?.language}</span>
                            </p>
                            <p className="text-lg text-gray-600 mb-1">
                                Genre: <span className="font-bold text-green-600">{movie?.genre.join(', ')}</span>
                            </p>
                            <p className="text-lg text-gray-600 mb-1">
                                Director: <span className="font-bold text-green-600">{movie?.director}</span>
                            </p>
                            <p className="text-lg text-gray-600 mb-1">
                                Cast: <span className="font-bold text-green-600">{movie?.cast.join(', ')}</span>
                            </p>
                            <p className="text-lg text-gray-600 mb-1">
                                Rating: <span className="font-bold text-green-600">{movie?.rating}</span>
                            </p>
                            <br />
                            <h6 className="text-xl font-bold text-gray-800 mb-2">Overview</h6>
                            <p className="text-lg text-gray-600 mb-4">{movie?.overview}</p>
                            <h6 className="text-xl font-bold text-gray-800 mb-2">Plot Summary</h6>
                            <p className="text-lg text-gray-600 mb-4">{movie?.plot_summary}</p>
                        </div>
                        <button
                            onClick={onBookTicketClick}
                            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors cursor-pointer self-start"
                        >
                            Book Ticket
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewMovie;