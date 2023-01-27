import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const { restaurantId } = useParams();
    const [restaurant, setRestaurent] = useState({});
    async function getRestaurantInfo() {
        const data = await fetch('https://www.swiggy.com/dapi/menu/v4/full?lat=12.978189262657288&lng=77.63857003301383&menuId=' + restaurantId);
        const json = await data?.json();
        setRestaurent(json?.data);
    }
    useEffect(() => {
        getRestaurantInfo();
    }, [])
    if (!restaurant) return null;
    return (
        (!restaurant) ? <h1>Restaurant Loading...</h1>
            : (
                <div className="restaurant-menu">
                    <h1>RestaurantId : {restaurant?.id}</h1>
                    <h2>Restaurant Name: {restaurant?.name}</h2>
                </div>
            )
    )
}

export default RestaurantMenu;


// https://www.swiggy.com/dapi/menu/v4/full?lat=12.978189262657288&lng=77.63857003301383&menuId=262385