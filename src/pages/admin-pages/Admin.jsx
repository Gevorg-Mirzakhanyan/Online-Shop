import "./Admin.scss";
import { Navigate, Route, Routes } from "react-router-dom";
import AdProducts from "./components/AdProducts/AdProducts";
import AdCategories from "./components/AdCategories/AdCategories";
import AdSettings from "./components/AdSettings/AdSettings";
import AdNotification from "./components/AdNotifications/AdNotifications"
import AdNavbar from "./components/AdNavbar/AdNavbar";
function Admin() {
 
    return(
        <div className="admin">
            <AdNavbar className="nav-admin"  />
            <div className="admin-main">
                <Routes>
                    <Route path={'AdProducts'} element={<AdProducts />} />
                    <Route path={'AdCategories'} element={<AdCategories />} />
                    <Route path={'AdSettings'} element={<AdSettings />} />
                    <Route path={'AdNotifications'} element={<AdNotification />} />
                    <Route path={'/*'} element={<Navigate to={'AdCategories'} />} />
                </Routes>
            </div>
        </div>
    )
}

export default Admin;