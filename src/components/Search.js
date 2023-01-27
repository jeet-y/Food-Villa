const Search = ({ setText }) => {
    return (
        <div className="search-box">
            <input className="search-bar" onChange={e => setText(e.target.value)} placeholder="search" />
        </div>
    )
}

export default Search;