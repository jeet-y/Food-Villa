const Shimmer = () => {
    return (
        <>
            {Array(15).fill("").map((e, index) => (<div key={index} className="2xl:w-72 2xl:h-80 w-56 xl:h-60 m-4 bg-gray-200"></div>))}
        </>
    )
}

export default Shimmer; 