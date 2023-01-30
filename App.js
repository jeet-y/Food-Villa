import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/components/Header'
import About from './src/components/About'
import Contact from './src/components/Contact'
import Body from './src/components/Body'
import Footer from './src/components/Footer'
import Error from './src/components/Error'
import RestaurantMenu from './src/components/RestaurantMenu'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            {/* <Footer /> */}
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
