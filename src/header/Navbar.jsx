
import { NavLink} from "react-router-dom"
const Navbar = () => {
    return(
    <nav className="navbar">
        <div className="link-container">
            <NavLink>Home</NavLink>
        </div>
        <div className="link-container">
            <NavLink>Shop</NavLink>
        </div>
        <div className="link-container">
            <NavLink>Contact</NavLink>
        </div>
    </nav>
    )
}

export default Navbar;