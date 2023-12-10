import { NavLink } from "react-router-dom";
import "./AdNavbar.scss"
const AdNavbar = () => {
    return (
        <div className="admin-nav G-flex-column">   
            <div className="admin-logo">
                LOGO
            </div>
            <div className="admin-nav-section">
                <div  className="admin-link">
                    <NavLink to={'AdProducts'}>Products</NavLink>
                </div>
                <div className="admin-link">
                    <NavLink to={'AdCategories'}>Categories</NavLink>
                </div>
                <div className="admin-link">
                    <NavLink to={'AdSettings'}>Settings</NavLink>
                </div>
                <div className="admin-link">
                    <NavLink to={'AdNotifications'}>Notifications</NavLink>
                </div>
            </div>
        </div>
    )
}

export default AdNavbar;