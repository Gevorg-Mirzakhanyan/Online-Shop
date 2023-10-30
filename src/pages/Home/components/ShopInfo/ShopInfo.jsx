import "./ShopInfo.scss"
import { FaCheck } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
const ShopInfo = () => {
    return(
        <div className="info-shop">
            <div className="info">
                <FaCheck className="info-icon" />
                <h5 className="info-text">Quality Product</h5>
            </div>
            <div className="info">
                <FaShippingFast className="info-icon" />
                <h5 className="info-text">Free Shipping</h5>
            </div>
            <div className="info">
                <FaExchangeAlt className="info-icon" />
                <h5 className="info-text">14-Day Return</h5>
            </div>
            <div className="info">
                <FaPhoneVolume className="info-icon" />
                <h5 className="info-text">24/7 Support</h5>
            </div>
        </div>
    )
}

export default ShopInfo