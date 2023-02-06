import { useState } from "react"
import Logo from "../assets/Img/logo.png"
import { Link } from "react-router-dom"

const Title = () => {
    return (
        // <img id="logo" src="https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT" alt="logo" />
        <img id="logo" src={Logo} alt="logo" className="h-16" />
    )
}


const Header = () => {
    return (
        <div className="w-full h-20 flex justify-center items-center">
            <div className="2xl:w-2/3 xl:w-3/4 w-3/4 xl:px-20 px-12 h-18 flex justify-between items-center">
                <Title />
                <ul className="flex text-right ">
                    <Link className="pl-11" to='/'>Home</Link>
                    <Link className="pl-11" to='/about'>About</Link>
                    <Link className="pl-11" to='/contact'>Contact</Link>
                    <Link className="pl-11" to='/'>Cart</Link>
                    <Link className="pl-11" to='/Instamart'>Instamart</Link>
                </ul>
            </div>
        </div>
    )
}

export default Header

