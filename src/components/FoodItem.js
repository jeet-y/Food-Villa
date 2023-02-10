import { Img_Restaurant_URL } from '../constant'
import { useState, useEffect } from 'react'

const FoodItem = (props) => {
    let initialFoodItemCount = 1;
    const [foodItemCount, setfoodItemCount] = useState(initialFoodItemCount);
    return (
        <div className="grid grid-cols-2 p-2 m-2 text-sm">
            <div className='flex justify-start items-center'>
                {(props.isVeg === 1) ?
                    <div className='border border-green-700 flex justify-center items-center mr-2'>
                        <div className='rounded-full bg-green-700 w-2 h-2 m-[1.5px]'></div>
                    </div>
                    :
                    <div className='border border-red-700 flex justify-center items-center mr-2'>
                        <div className='rounded-full bg-red-700 w-2 h-2 m-[1.5px]'></div>
                    </div>
                }
                <h3 className="font-sm text-slate-700">{props.name}</h3>
            </div>
            <div className='flex justify-end items-center'>
                <div className="py-1 w-20 text-center border flex justify-around items-center font-md text-base mr-4">
                    <button onClick={() => { (foodItemCount > 1) ? setfoodItemCount(foodItemCount - 1) : setfoodItemCount(foodItemCount) }}>-</button>
                    <p className='text-xs text-green-600'>{foodItemCount}</p>
                    <button className='text-green-600 font-md text-base' onClick={() => setfoodItemCount(foodItemCount + 1)}>+</button>
                </div>
                <div className='text-xs font-normal text-gray-500 w-14'><span>&#8377;</span>{Math.round(props.price / 100).toString()}</div>
            </div>
        </div >
    )
}

export default FoodItem;

