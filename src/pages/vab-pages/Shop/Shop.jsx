import { Link } from "react-router-dom";
import "./Shop.scss"
const Shop = () => {
    return(
        <div className="shop">
             <div className="shop-page">
                <span><Link>Home</Link>/<Link>Shop</Link>/Contact</span>
            </div>
        </div>
    )
}

export default Shop