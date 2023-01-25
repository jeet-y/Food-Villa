import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/components/Header'
import Body from './src/components/Body'
import { useSearch } from './src/components/Header'

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
    const { searchText, searchBox } = useSearch();
    return (
        <>
            <Header searchBox={searchBox} />
            <Body searchText={searchText} />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />)