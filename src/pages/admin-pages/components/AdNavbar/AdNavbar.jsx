import { NavLink } from "react-router-dom";
import "./AdNavbar.scss"
const AdNavbar = () => {
    return (
        <div className="admin-nav">   
            <div className="admin-logo">
                LOGO
            </div>
            <div className="admin-link">
                <div>
                    <NavLink to={'AdProducts'}>Products</NavLink>
                </div>
                <div>
                    <NavLink to={'AdCategories'}>Categories</NavLink>
                </div>
                <div>
                    <NavLink to={'AdSettings'}>Settings</NavLink>
                </div>
                <div>
                    <NavLink to={'AdNotifications'}>Notifications</NavLink>
                </div>
            </div>
        </div>
    )
}

export default AdNavbar;