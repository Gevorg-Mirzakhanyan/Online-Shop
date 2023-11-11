import "./Header.scss";
import Navbar from "./Navbar";
const Header = () => {
    return(
        <div className="header">
            <div className="header-nav G-flex">
                <span className="header-title title-mega">MEGA</span>
                <span className="header-title title-shop">SHOP</span>
                <Navbar />
            </div>
        </div>
    )
}

export default Header;