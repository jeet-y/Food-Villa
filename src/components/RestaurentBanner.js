import React from 'react'
import rm from './RestaurantMenu.module.css'
import { Img_Restaurant_URL } from '../constant'

const RestaurentBanner = ({ name, cloudinaryImageId, cuisines, locality, area, avgRatingString, totalRatingsString, sla, costForTwo }) => {
    return (
        <div className={rm.selected_restaurant}>
            <div className={rm.selected_restaurant_center}>
                <img src={Img_Restaurant_URL + cloudinaryImageId} />
                <div className={rm.info}>
                    <h3 className={rm.name}>{name}</h3>
                    <p className={rm.cuisines}>{cuisines.join(", ")}</p>
                    <p className={rm.area}>{locality}, {area}</p>
                    <div className={rm.extraInfo}>
                        <div className={rm.subExtraInfo}>
                            <div><i className="fa fa-star" aria-hidden="true"></i>  {avgRatingString}</div>
                            <div>{totalRatingsString}</div>
                        </div>
                        <div></div>
                        <div className={rm.subExtraInfo}>
                            <div> {sla.slaString?.toLowerCase()}</div>
                            <div>Delivery Time</div>
                        </div>
                        <div></div>
                        <div className={rm.subExtraInfo}>
                            <div><span>&#8377;</span>  {Math.round(costForTwo / 100).toString()}</div>
                            <div>Cost for two</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default RestaurentBanner
