import { useState } from "react"
import Logo from "../assets/Img/logo.png"
import { Link } from "react-router-dom"

const Title = () => {
    return (
        // <img id="logo" src="https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT" alt="logo" />
        <img id="logo" src={Logo} alt="logo" />
    )
}


const Header = () => {
    return (
        <div className="header">
            <div className="header-inner">
                <Title />
                <ul className="nav-items-list">
                    <Link className="link" to='/'>Home</Link>
                    <Link className="link" to='/about'>About</Link>
                    <Link className="link" to='/contact'>Contact</Link>
                    <Link className="link" to='/'>Cart</Link>
                </ul>
            </div>
        </div>
    )
}

export default Header

