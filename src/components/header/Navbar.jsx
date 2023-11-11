import "./Navbar.scss"
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return(
    <nav className="navbar G-justify-around">
        <div  className="navbar-box G-flex">
            <div className="link-container">
                <NavLink to={'/'}>Home</NavLink>
            </div>
            <div className="link-container">
                <NavLink to={'Shop'}>Shop</NavLink>
            </div>
            <div className="link-container">
                <NavLink to={'Shop Detail'}>Shop Detail</NavLink>
            </div>
            <div className="link-container">
                <NavLink to={'Contacts'}>Contact</NavLink>
            </div>
        </div>
        <div>
            <NavLink to={'ShoppingCart'}  className="icon-container G-flex ">
                <i className="icon-basket basket"/> 
                <span className="box G-center">0</span>
            </NavLink>
        </div>
    </nav>
    )
}

export default Navbar;