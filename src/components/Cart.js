import { useSelector } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import store from '../utils/store';
import FoodItem from './FoodItem';

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems[1])
    return (
        <div className="w-full full-height flex justify-center mt-8">
            <div className="w-1/2 2xl:px-16">
                {cartItems.map(item => <FoodItem item={item} key={item?.id} />)}
            </div>
        </div >
    )
}

export default Cart;

