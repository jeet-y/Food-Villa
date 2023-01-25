import { useState } from "react"

const Title = () => {
    return (
        <img id="logo" src="https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT" alt="logo" />
        // <img id="logo" src="../assets/Img/logo.png" alt="logo" />
    )
}

export function useSearch() {
    const [searchText, setSearchText] = useState("");
    return {
        searchText,
        searchBox: (
            <div className="search-box">
                <input className="search-bar" onChange={e => { setSearchText(e.target.value) }} placeholder="search" />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <>
            <div className="header">
                <Title />
                {props.searchBox}
                <ul className="nav-items-list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>

            </div>
        </>
    )
}

export default Header

