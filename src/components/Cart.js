import { useSelector } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import store from '../utils/store';
import FoodItem from './FoodItem';

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems)
    if (cartItems.length <= 0) {
        return (
            <div className='flex justify-center full-height mt-8 text-lg text-gray-500 font-bold w-full h-4/6'> Your cart is empty</div>
        )
    }
    return (
        <div className="w-full full-height flex justify-center mt-8">
            <div className="w-1/2 2xl:px-16">
                {cartItems.map(item => <FoodItem item={item} key={item?.id} />)}
            </div>
        </div >
    )
}

export default Cart;

