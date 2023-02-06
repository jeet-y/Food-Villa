import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Body from './components/Body'
import Footer from './components/Footer'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import Instamart from './components/Instamart'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

const AppLayout = () => {
    return (
        <div>
            <Header />
            <div className="w-full full-height flex justify-center">
                <div className="w-3/4 xl:w-3/4 xl:px-16 2xl:w-2/3 px-8 full-height">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div >
    )
}

const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
                errorElement: < Error />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:restaurantId",
                element: <RestaurantMenu />
            }
            ,
            {
                path: "/Instamart",
                element: <Instamart />
            }
        ]
    },

])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={BrowserRouter} />)







/**
 * header
 *   logo
 *   navbar   
 *     - home
 *     - about
 *     - contact us
 *     - cart
 * body
 *   Search bar
 *   Restaurent list
 *      RestaurentCard
 *          - image
 *          - name
 *          - cuisines
 *          - rating
 * 
 * footer
 * 
 */
