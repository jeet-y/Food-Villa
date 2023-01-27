const Shimmer = () => {
    return (
        <div>
            <div className="search-box">
                <input className="search-bar" placeholder="search" />
            </div>
            <div className='restaurant-list'>
                {Array(15).fill("").map((e, index) => (<div key={index} className="shimmer-card"></div>))}
            </div>
        </div>
    )
}

export default Shimmer;