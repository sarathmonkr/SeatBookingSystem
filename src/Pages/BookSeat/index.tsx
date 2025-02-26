import { useEffect, useState } from 'react';
import SeatLegend from '../../Components/SeatLegend';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { MovieType } from '../../Utils/Data/movies';
import { getMovieById } from '../../Services/movies.service';
import BreadCrumb from '../../Components/BreadCrumb';
import BookingConfirmModal from '../../Components/BookSeat/ConfirmModal';

const rows = 6;
const seatsPerRow = 10;
const seatPrices = {
    silver: 100,
    gold: 150,
    platinum: 200,
};

const getSeatPrice = (row: number) => {
    if (row < 2) return seatPrices.silver;
    if (row < 4) return seatPrices.gold;
    return seatPrices.platinum;
};

const BookSeat = () => {
    const params = useParams();
    const movieId = params?.id;
    const navigate = useNavigate();

    const [movie, setMovie] = useState<MovieType | undefined>(undefined);
    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);    
    const [disabledSeats, setDisabledSeats] = useState<string[]>(['B5','B6','B7', 'D8', 'D7']);// already booked seats
    const [totalCost, setTotalCost] = useState<number>(0);
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);

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
            navigate('/');
        }

        setMovie(movie);
    }

    function onCancelConfirmClick() {
        setIsConfirmModalOpen(false);
    }

    function onConfirmBookingClick() {
        setIsConfirmModalOpen(false);
        setDisabledSeats([...disabledSeats, ...selectedSeats]);
        setSelectedSeats([]);
        setTotalCost(0);
        navigate('/');
        toast.success('Booking Confirmed!', {
            toastId: 'booking-confirmed'
        });
    }

    function onBookNowClick() {
        setIsConfirmModalOpen(true);
    }

    const handleSeatClick = (seatId: string, price: number) => {
        if (disabledSeats.includes(seatId)) return;

        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
            setTotalCost(totalCost - price);
        } else {
            if (selectedSeats.length >= 8) {
                toast.error('You can only select up to 8 seats', {
                    toastId: 'max-seats',
                    autoClose: 3000,
                });
                return;
            }
            setSelectedSeats([...selectedSeats, seatId]);
            setTotalCost(totalCost + price);
        }
    };

    const renderSeats = () => {
        const seats = [];
        for (let row = 0; row < rows; row++) {
            for (let seat = 0; seat < seatsPerRow; seat++) {
                const seatId = `${String.fromCharCode(65 + row)}${seat + 1}`;
                const price = getSeatPrice(row);
                const isSelected = selectedSeats.includes(seatId);
                const isDisabled = disabledSeats.includes(seatId);
                seats.push(
                    <div
                        key={seatId}
                        className={`seat cursor-pointer p-2 m-1 border-2 rounded text-center ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200'} ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'transition-transform transform hover:scale-110 duration-300 ease-in-out'} ${price === seatPrices.silver ? 'border-gray-400' : price === seatPrices.gold ? 'border-yellow-500' : 'border-red-500'}`}
                        onClick={() => handleSeatClick(seatId, price)}
                        title={isDisabled ? 'Seat not available' : isSelected ? 'Selected' : 'Select seat'}
                    >
                        {seatId}
                    </div>
                );
            }
        }
        return seats;
    };

    return (
        <>
            <BreadCrumb
                data={[
                    {
                        title: movie?.title || "Movie",
                        href: `/movie/${movie?.id}`
                    },
                    {
                        title: "Book Now"
                    }
                ]}
            />

            <div className="book-seat p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-start text-gray-800">Select Your Seats {movie?.title ? `for ${movie?.title}` : ""}</h1>
                <div>
                    <div className="movie-details mb-8 p-6 border rounded bg-white shadow-lg flex items-start space-x-6">
                        <img src={movie?.poster_path} alt={movie?.title} className="w-32 h-auto rounded shadow-md" />
                        <div>
                            <h2 className="text-2xl font-bold mb-2 text-gray-800">{movie?.title}</h2>
                            <p className="mb-2 text-gray-600"><strong>Category:</strong> {movie?.category}</p>
                            <p className="text-gray-600"><strong>Overview:</strong> {movie?.overview}</p>
                        </div>
                    </div>
                    <SeatLegend seatPrices={seatPrices} />
                </div>

                <div className="seat-layout grid grid-cols-10 gap-2 mb-8">
                    {renderSeats()}
                </div>

                {selectedSeats.length > 0 && (
                    <div className="booking-summary p-6 border rounded-lg bg-white shadow-lg ">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Booking Summary</h3>
                        <div className="mb-4 text-gray-600">
                            <strong>Selected Seats:</strong>
                            <div className="flex flex-wrap mt-2">
                                {selectedSeats.map(seat => (
                                    <div key={seat} className="flex items-center bg-gray-100 p-2 m-1 border rounded-lg shadow-sm transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                        <span className="mr-2 font-semibold text-gray-700">{seat}</span>
                                        <button
                                            className="text-gray-500 hover:text-red-500 text-lg cursor-pointer transition-colors duration-300 ease-in-out"
                                            onClick={() => handleSeatClick(seat, getSeatPrice(seat.charCodeAt(0) - 65))}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-lg font-bold mb-4 text-gray-800">Total Cost: ₹{totalCost}</p>
                        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-101 duration-300 ease-in-out cursor-pointer" onClick={onBookNowClick}>Book Now</button>
                    </div>
                )}

                <BookingConfirmModal
                    isOpen={isConfirmModalOpen}
                    onCancel={() => onCancelConfirmClick()}
                    onConfirm={() => onConfirmBookingClick()}
                />
            </div>
        </>
    );
};

export default BookSeat;
