import { Img_Restaurant_URL } from '../constant'

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating, slaString, costForTwoString }) => {
    return (
        <div className='restaurant-card'>
            <img src={Img_Restaurant_URL + cloudinaryImageId} alt="restaurant Image" />
            <br /><br /><br />
            <h3>{name}</h3>
            <br />
            <p>{cuisines.join(", ")}</p>
            <br />
            <div className='extraInfo'>
                <label>* <span>{avgRating}</span></label>
                <label>.</label> <label>{slaString}</label>
                <label>.</label> <label>{costForTwoString}</label>
            </div>
        </div>
    )
}

export default RestaurantCard