import { Img_Restaurant_URL } from '../constant'

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating, slaString, costForTwoString, aggregatedDiscountInfo }) => {
    return (
        <div className='restaurant-card'>
            <img src={Img_Restaurant_URL + cloudinaryImageId} alt="restaurant Image" />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <div className='extraInfo'>
                <label>* <span>{avgRating}</span></label>
                <label>.</label> <label>{slaString}</label>
                <label>.</label> <label>{costForTwoString}</label>
            </div>
            <hr></hr>
            <p className='discountText'>{aggregatedDiscountInfo.shortDescriptionList[0].meta}</p>
        </div>
    )
}

export default RestaurantCard

// , aggregatedDiscountInfo["shortDescriptionList"][0]