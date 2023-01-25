import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard'


function filterData(searchText, allRestaurents) {
    const filterData = allRestaurents.filter((restaurant) =>
        restaurant.data.name?.toUpperCase().includes(searchText?.toUpperCase()));
    return filterData
}

const Body = (props) => {
    const [allRestaurents, setAllRestaurents] = useState([])
    const [allFilteredRestaurents, setAllFilteredRestaurents] = useState([])

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
        const filterRestaurants = filterData(props.searchText, allRestaurents)
        setAllFilteredRestaurents(filterRestaurants)
    }, [props.searchText])
    return (
        (allFilteredRestaurents.length === 0) ? <h1 className='loading-popUp'>Restaurent are loading...</h1> :
            (<div className='container'>
                <div className='container-center'>
                    <div className='restaurant-list'>
                        {
                            allFilteredRestaurents.map(restaurant => {
                                return <RestaurantCard {...restaurant?.data} key={restaurant.data.id} />
                            })
                        }
                    </div>
                </div>
            </div>
            )
    )
}
export default Body