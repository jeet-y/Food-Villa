
export const HomeShimmer = () => {
    return (
        <>
            {Array(15).fill("").map((e, index) => (<div key={index} className="2xl:w-72 2xl:h-80 w-56 xl:h-60 m-4 bg-gray-200"></div>))}
        </>
    )
}

export const RestaurantMenuBannerShimmer = () => {
    return (
        <div className="w-full h-[240px] bg-gray-200 mt-[110px]">
        </div>
    )
}

const RestaurantMenuItem = () => {
    return (
        <div className="mt-12 w-full h-44 bg-gray-200"></div>
    )
}
export const RestaurantMenuItems = () => {
    return (
        <>
            {
                Array(20).fill("").map((e, index) =>
                    (<div key={index}><RestaurantMenuItem /></div>)
                )
            }
        </>
    )
}
