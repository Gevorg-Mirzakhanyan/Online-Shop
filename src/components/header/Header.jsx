import "./Header.scss";
import Navbar from "./Navbar";
import {Link} from "react-router-dom"
const Header = () => {
    return(
        <div className="header">
            <div className="header-nav">
                <span className="header-title title-mega">MEGA</span>
                <span className="header-title title-shop">SHOP</span>
                <Navbar />
            </div>
          
            <Link className="icon-container">
            <i className="icon-basket basket"/> 
                <span className="box">0</span>
            </Link>
           
        </div>
    )
}

export default Header;