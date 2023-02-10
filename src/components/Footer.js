import { useContext } from 'react'
import UserContext from "../utils/UserContext"

const Footer = () => {
    const { user } = useContext(UserContext);
    return (
        <div className='w-full flex justify-center items-center bg-slate-900 mt-16'>
            <div className="h-20 text-gray-100 flex justify-between items-center w-11/12 font-light"><div> &#169; 2023 Food Villa</div> <div> Created by {user.name} - {user.email}</div> </div>
        </div>
    )
}

export default Footer;