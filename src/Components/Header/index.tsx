
const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Movie Booking App</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#" className="hover:text-gray-400">Movies</a></li>
                        <li><a href="#" className="hover:text-gray-400">Bookings</a></li>
                        <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header