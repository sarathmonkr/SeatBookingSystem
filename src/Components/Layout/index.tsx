import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom';

const LayoutContainer: React.FC = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Header />
            <main className="flex-grow bg-gray-300 ">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default LayoutContainer