import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Img_Restaurant_URL } from '../constant'
import rm from './RestaurantMenu.module.css'

const RestaurantMenu = () => {
    const { restaurantId } = useParams();
    const [restaurant, setRestaurent] = useState(null);
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
                <div>
                    <div className={rm.selected_restaurant}>
                        <div className={rm.selected_restaurant_center}>
                            <img src={Img_Restaurant_URL + restaurant?.cloudinaryImageId} />
                            <div className={rm.info}>
                                <h3 className={rm.name}>{restaurant?.name}</h3>
                                <p className={rm.cuisines}>{restaurant?.cuisines.join(", ")}</p>
                                <p className={rm.area}>{restaurant?.locality}, {restaurant?.area}</p>
                                <div className={rm.extraInfo}>
                                    <div className={rm.subExtraInfo}>
                                        <div><i className="fa fa-star" aria-hidden="true"></i>  {restaurant?.avgRatingString}</div>
                                        <div>{restaurant?.totalRatingsString}</div>
                                    </div>
                                    <div></div>
                                    <div className={rm.subExtraInfo}>
                                        <div> {restaurant?.sla.slaString?.toLowerCase()}</div>
                                        <div>Delivery Time</div>
                                    </div>
                                    <div></div>
                                    <div className={rm.subExtraInfo}>
                                        <div><span>&#8377;</span>  {Math.round(restaurant?.costForTwo / 100).toString()}</div>
                                        <div>Cost for two</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={rm.restaurant_menu}>
                        <div className={rm.restaurant_menu_center}>
                            {/* <h3>Recommended</h3> */}
                            {console.log(restaurant)}
                            {Object.values(restaurant?.menu?.items).map((item) =>
                                (!item.cloudinaryImageId) ? '' :
                                    (
                                        <div className={rm.menu_list} key={item.id} >
                                            <div className={rm.menu_list_item}>
                                                <div className={rm.menu_list_item_info}>
                                                    <p className={rm.menu_item_name}>{item.name}</p>
                                                    <p className={rm.menu_item_price}><span>&#8377;</span> {item.price}</p>
                                                    <p className={rm.menu_item_description}>{item.description}</p>
                                                </div>
                                                <img src={Img_Restaurant_URL + item?.cloudinaryImageId} />
                                            </div>
                                            <div className={rm.hr}></div>
                                        </div>
                                    )
                            )}
                        </div>
                    </div>
                </div >
            )
    )
}

export default RestaurantMenu;


// https://www.swiggy.com/dapi/menu/v4/full?lat=12.978189262657288&lng=77.63857003301383&menuId=262385