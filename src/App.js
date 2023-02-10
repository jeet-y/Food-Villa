import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Body from './components/Body'
import Footer from './components/Footer'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import Instamart from './components/Instamart'
import Cart from './components/Cart'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import UserContext from './utils/UserContext'
import { Provider } from 'react-redux'
import store from './utils/store'


const AppLayout = () => {
    const [user, setUser] = useState({
        name: "Jitedra yadav",
        email: "jitendra.y@alivenow.in"
    })
    return (
        <Provider store={store}>
            <UserContext.Provider
                value={{
                    user: user,
                    setUser: setUser
                }}>
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </Provider>
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
            },
            {
                path: "/instamart",
                element: <Instamart />
            },
            {
                path: "/cart",
                element: <Cart />
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
