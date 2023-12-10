import { useNavigate } from "react-router-dom";
import "./AdHeader.scss"


const AdHeader = ({title}) => {
    const navigate = useNavigate()
    
    const handleLogOut = () => {
        localStorage.removeItem('token');
        navigate('/Registration');
        window.location.reload();
        
    };
    return (
        <div className="log-btn G-justify-between">
                {title} 
                <button className="log-btn-click" onClick={handleLogOut}>Log out</button>
        </div>

    )
}

export default AdHeader;