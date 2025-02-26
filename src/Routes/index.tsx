import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutContainer from '../Components/Layout';
const LandingPage = React.lazy(() => import('../Pages/Hero'));

const routes = [
    {
        path: '/',
        component: LandingPage,
    },
    {
        path:'/movie/:id',
        component: React.lazy(() => import('../Pages/ViewMovie'))
    },
    {
        path:'/book/:id',
        component: React.lazy(() => import('../Pages/BookSeat'))
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
