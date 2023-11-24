import "./Admin.scss";
import {  NavLink, Route, Routes } from "react-router-dom";
import AdProducts from "./components/AdProducts/AdProducts";
import AdCategories from "./components/AdCategories/AdCategories";
import AdSettings from "./components/AdSettings/AdSettings";
import AdNotification from "./components/AdNotifications/AdNotifications"


function Admin() {
    const handleLogOut = () => {
        localStorage.removeItem('loginData');
        window.location.reload();
      };

   
    return(
        <div>
           <button onClick={handleLogOut}>Log out</button>
            <ul>
                <li>
                    <NavLink to={'AdProducts'}>Products</NavLink>
                </li>
                <li>
                    <NavLink to={'AdCategories'}>Categories</NavLink>
                </li>
                <li>
                    <NavLink to={'AdSettings'}>Settings</NavLink>
                </li>
                       <li>
                    <NavLink to={'AdNotifications'}>Notifications</NavLink>
                </li>
            </ul>
            <Routes>
               
               
                <Route path={'AdProducts'} element={<AdProducts />} />
                <Route path={'AdCategories'} element={<AdCategories />} />
                <Route path={'AdSettings'} element={<AdSettings />} />
                <Route path={'AdNotifications'} element={<AdNotification />} />
            </Routes>
        </div>
    )
}

export default Admin;