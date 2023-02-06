import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer';
import Search from './Search';
import { Link } from 'react-router-dom';

function filterData(searchText, allRestaurents) {
    const filterData = allRestaurents.filter((restaurant) =>
        restaurant.data.name?.toUpperCase().includes(searchText?.toUpperCase()));
    return filterData
}
const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [allRestaurents, setAllRestaurents] = useState([])
    const [allFilteredRestaurents, setAllFilteredRestaurents] = useState([])

    const setText = (text) => {
        setSearchText(text)
    }

    async function getAllRestaurents() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9783692&lng=77.6408356&page_type=DESKTOP_WEB_LISTING");
        const json = await data?.json();
        setAllRestaurents(json?.data?.cards[2]?.data?.data?.cards);
        setAllFilteredRestaurents(json?.data?.cards[2]?.data?.data?.cards);
    }
    useEffect(() => {
        getAllRestaurents()
    }, [])
    useEffect(() => {
        const filterRestaurants = filterData(searchText, allRestaurents)
        setAllFilteredRestaurents(filterRestaurants)
    }, [searchText])
    if (!allRestaurents) return (<h2>No Restaurent Found!</h2>)
    if (allRestaurents.length > 0 && allFilteredRestaurents?.length === 0) {
        return (
            <>
                <Search setText={setText} />
                <h2 className='mt-20 font-bold text-xl'> No Restaurent Found!</h2>
            </>
        )
    }
    return (
        <>
            <Search setText={setText} />
            <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 sm:grid-cols-2 gap-4'>
                {
                    (allFilteredRestaurents?.length === 0) ? <Shimmer className='w-full' /> :
                        allFilteredRestaurents.map(restaurant => {
                            return <Link to={'/restaurant/' + restaurant?.data?.id} key={restaurant.data.id}>
                                <RestaurantCard {...restaurant?.data} />
                            </Link>
                        })
                }
            </div>
        </>

    )
}
export default Body