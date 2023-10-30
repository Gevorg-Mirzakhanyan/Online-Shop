import "./Header.scss";
import Navbar from "./Navbar";
import {Link} from "react-router-dom"
import {FaShoppingCart} from "react-icons/fa"
const Header = () => {
    return(
        <div className="header">
            <div className="header-nav">
                <span className="header-title title-mega">MEGA</span>
                <span className="header-title title-shop">SHOP</span>
                <Navbar />
            </div>
          
            <Link className="icon-container">
                <FaShoppingCart className="icon" />
                <span className="box">0</span>
            </Link>
           
        </div>
    )
}

export default Header;