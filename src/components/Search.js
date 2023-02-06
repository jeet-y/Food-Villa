const Search = ({ setText }) => {
    return (
        <div className="text-right mr-4">
            <input className="outline-none border-b-[0.5px] border-gray-300" onChange={e => setText(e.target.value)} placeholder="search" />
        </div>
    )
}

export default Search;