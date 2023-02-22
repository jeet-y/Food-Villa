import { useContext } from "react"
import Logo from "../assets/Img/logo.png"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"
import store from '../utils/store'

const Title = () => {
    return (
        <img id="logo" src={Logo} alt="logo" className="h-16 pl-3" />
    )
}
const Header = () => {
    const { user } = useContext(UserContext);
    const noOfItemsOrder = useSelector(store => store.cart.noOfItemsOrder);
    return (
        <div className="w-full h-20 flex justify-center items-center shadow-md relative">
            <div className="w-2/3 2xl:px-16 h-18 flex justify-between items-center">
                <Title />
                <ul className="flex">
                    <Link className="mx-4" to='/'>Home</Link>
                    <Link className="mx-4" to='/about'>About</Link>
                    <Link className="mx-4" to='/contact'>Contact</Link>
                    <Link className="mx-4" to='/instamart'>Instamart</Link>
                    <Link className="mx-4 relative" to='/cart'>Cart<span className="text-sm absolute right-2 bottom-4 text-green-600">{noOfItemsOrder}</span></Link>
                </ul>
            </div>
            <span className="absolute right-20">{user.name} <div className="ml-2 w-2 h-2 rounded-full bg-green-700 border-green-700 inline-block"></div></span>
        </div>
    )
}

export default Header

