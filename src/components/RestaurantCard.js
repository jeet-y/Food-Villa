import { Img_Restaurant_URL } from "../constant"

const RestaurantCard = ({ cloudinaryImageId, name, id, cuisines, avgRating, slaString, costForTwoString, aggregatedDiscountInfo }) => {
    return (
        <div className="p-4 hover:border" key={id}>
            <img src={Img_Restaurant_URL + cloudinaryImageId} alt="restaurant Image" />
            <h3 className="font-semibold text-slate-700 mt-3">{name}</h3>
            <p className="font-light text-xs text-slate-500" > {cuisines.join(", ")}</p >
            <div className="flex justify-between items-center mt-4 mb-4">
                <div className="pl-2 pr-2 pt-[2px] pb-[2px] bg-green-500 text-white text-xs">* <span>{avgRating}</span></div>&#183;
                <div className="font-light text-xs text-slate-500">{slaString}</div>&#183;
                <div className="font-light text-xs text-slate-500">{costForTwoString}</div>
            </div>
            <hr></hr>
            <p className="text-[#8a584b] text-sm mt-4">{aggregatedDiscountInfo.shortDescriptionList[0].meta}</p>
        </div>
    )
}

export default RestaurantCard