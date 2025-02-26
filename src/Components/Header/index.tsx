import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-4 shadow-md transition duration-300 ease-in-out">
            <div className="container mx-auto flex justify-between items-center">
                <Link to={'/'}>
                    <h1 className="text-2xl font-bold hover:text-gray-400 transition duration-300 ease-in-out cursor-pointer">Go Cinema</h1></Link>
            </div>
        </header>
    );
}

export default Header;
