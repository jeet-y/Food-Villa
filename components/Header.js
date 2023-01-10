const Title = () => {
    return (
        <img id="logo" src="https://lh5.googleusercontent.com/p/AF1QipOhHeCaQ6Xb6RVf3R_ZBTbDK4FIug_203rKsHLT" alt="logo" />
    )
}

// 

const Header = () => {
    return (
        <>
            <div className="header">
                <Title />
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

