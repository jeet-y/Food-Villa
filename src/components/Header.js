import { useContext } from "react"
import Logo from "../assets/Img/logo.png"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"
import store from '../utils/store'

const Title = () => {
    return (
        // <img id="logo" src="https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT" alt="logo" />
        <img id="logo" src={Logo} alt="logo" className="h-16" />
    )
}
const Header = () => {
    const { user } = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);
    return (
        <div className="w-full h-20 flex justify-center items-center shadow-md">
            <div className="w-1/2 h-18 mr-20 flex justify-between items-center">
                <Title />
                <ul className="flex text-right">
                    <Link className="pl-7" to='/'>Home</Link>
                    <Link className="pl-7" to='/about'>About</Link>
                    <Link className="pl-7" to='/contact'>Contact</Link>
                    <Link className="pl-7" to='/instamart'>Instamart</Link>
                    <Link className="pl-7 relative" to='/cart'>Cart<span className="text-sm absolute right-2 bottom-4 text-green-600">{cartItems.length}</span></Link>
                </ul>

            </div>
            <span className="">{user.name} <div className="ml-2 w-2 h-2 rounded-full bg-green-700 border-green-700 inline-block"></div></span>
        </div>
    )
}

export default Header

