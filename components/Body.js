import { restaurantList } from '../constant'
import RestaurantCard from './RestaurantCard'

const Body = () => {
    return (
        <div className='container'>
            <div className='restaurant-list'>
                {
                    restaurantList.map(restaurant => {
                        return <RestaurantCard {...restaurant.data} />
                    })
                }
            </div>
        </div>
    )
}
export default Body