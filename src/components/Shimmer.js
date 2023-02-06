const Shimmer = () => {
    return (
        <>
            {Array(15).fill("").map((e, index) => (<div key={index} className="w-72 h-80 p-4 mt-8 bg-gray-200"></div>))}
        </>
    )
}

export default Shimmer;