import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom';

const LayoutContainer: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="mx-auto p-4 min-h-screen bg-gray-300">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default LayoutContainer