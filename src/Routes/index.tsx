import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutContainer from '../Components/Layout';

const LandingPage = React.lazy(() => import('../Pages/Hero'));
const MovieViewPage = React.lazy(() => import('../Pages/ViewMovie'))
const BookSeat = React.lazy(() => import('../Pages/BookSeat'))

const routes = [
    {
        path: '/',
        component: LandingPage,
    },
    {
        path:'/movie/:id',
        component: MovieViewPage
    },
    {
        path:'/book/:id',
        component: BookSeat
    }
]

const RoutesHandler = () => {
    return (
        <Router>
            <Routes>
                <Route element={<LayoutContainer />} >
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        Component={route.component}
                    />
                ))}
                </Route>
            </Routes>
        </Router>
    )
}

export default RoutesHandler
