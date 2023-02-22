import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Img_Restaurant_URL } from '../constant'
import rm from './RestaurantMenu.module.css'
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import RestaurentBanner from './RestaurentBanner'
import { RestaurantMenuBannerShimmer, RestaurantMenuItems } from './Shimmer'

const RestaurantMenu = () => {
    const { restaurantId } = useParams();
    const [restaurant, setRestaurent] = useState(null);
    const [isAddFoodItemBtnActive, setIsAddFoodItemBtnActive] = useState(false)
    const dispath = useDispatch();

    const addFoodItem = (item) => {
        item.noOfItem = 1;
        dispath(addItem(item));
    }

    async function getRestaurantInfo() {
        const data = await fetch('https://www.swiggy.com/dapi/menu/v4/full?lat=12.978189262657288&lng=77.63857003301383&menuId=' + restaurantId);
        const json = await data?.json();
        setRestaurent(json?.data);
    }
    useEffect(() => {
        getRestaurantInfo();
    }, [])
    if (!restaurant) {
        return (
            <div className={rm.container}>
                <RestaurantMenuBannerShimmer />
                <div className="w-full flex justify-center mt-10">
                    <div className="w-1/3 text-gray-800 p-5">
                        <RestaurantMenuItems />

                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={rm.container}>
            <RestaurentBanner {...restaurant} />
            <div className="w-full flex justify-center mt-10">
                <div className="w-1/3 text-gray-800 p-5">
                    {Object.values(restaurant?.menu?.items).map((item) =>
                        (!item.cloudinaryImageId) ? '' :
                            (
                                <div key={item?.id} >
                                    <div className="mt-12" >
                                        <div className="flex justify-between h-32">
                                            <div className="w-3/4">
                                                <p className="mt-4 font-bold">{item?.name}</p>
                                                <p className="text-sm"><span>&#8377;</span> {Math.round(item?.price / 100).toString()}</p>
                                                <p className="mt-4 text-sm font-light text-gray-400">{item?.description}</p>
                                            </div>
                                            <div className="flex flex-col relative">
                                                <img className="h-20 rounded object-center" src={Img_Restaurant_URL + item?.cloudinaryImageId} />
                                                <button className="addItemBtn1"
                                                    onClick={() => { addFoodItem(item) }}>
                                                    ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-b mt-10"></div>
                                </div >
                            )
                    )}
                </div >
            </div >
        </div >

    )
}


export default RestaurantMenu;


// https://www.swiggy.com/dapi/menu/v4/full?lat=12.978189262657288&lng=77.63857003301383&menuId=262385

{/* {
    (!isAddFoodItemBtnActive) ?
        <button className="addItemBtn1"
            onClick={() => { addFoodItem(item); setIsAddFoodItemBtnActive(true); }}>
            ADD</button>
        :
        <div className="addItemBtn1">
            <button onClick={() => { (foodItemCount > 1) ? setfoodItemCount(foodItemCount - 1) : setfoodItemCount(foodItemCount) }}>-</button>
            <p className='text-xs text-green-600'>{foodItemCount}</p>
            <button className='text-green-600 font-md text-base' onClick={() => setfoodItemCount(foodItemCount + 1)}>+</button>
        </div>
} */}