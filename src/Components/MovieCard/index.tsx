import React from 'react'
import { MovieType } from '../../Utils/Data/movies'
import { useNavigate } from 'react-router-dom';

const MovieCard: React.FC<MovieType> = ({
    id,
    poster_path,
    title,
    overview
}) => {

    const navigate = useNavigate();

    function handleCardClick() {
        navigate(`/movie/${id}`)
    }

    return (
        <div onClick={handleCardClick} key={id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <div className="relative h-64">
                <img src={poster_path} alt={title} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-90" />
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <p className="text-gray-600 mt-2">{overview}</p>
            </div>
        </div>
    )
}

export default MovieCard