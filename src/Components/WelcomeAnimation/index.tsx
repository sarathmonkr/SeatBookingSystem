const WelcomeAnimation = () => {
    return (
        <div className='bg-black h-screen flex justify-center items-center'>
            <div className="animation-container animate-bounce">
                <h1 className="text-7xl font-bold transition duration-300 ease-in-out cursor-pointer">
                    <span className="hover:text-gray-400 text-blue-500">Go</span> <span className="hover:text-gray-400 text-white">Cinema</span>
                </h1>
            </div>
        </div>
    )
}

export default WelcomeAnimation;
