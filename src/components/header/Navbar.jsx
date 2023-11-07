import "./Navbar.scss"
import { NavLink} from "react-router-dom"
const Navbar = () => {
    return(
    <nav className="navbar">
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
    </nav>
    )
}

export default Navbar;