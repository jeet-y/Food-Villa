import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
// import Footer from './components/Footer'

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

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />)