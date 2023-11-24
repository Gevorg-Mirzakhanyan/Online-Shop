import "./ShopProduct.scss";
import dataProducts from "../../../Home/components/Products/dataProducts";
import "../../../Home/components/Products/Products.scss"
import ShopBtn from "./shopBtn/ShopBtn";
import { useNavigate } from "react-router-dom";
const ShopProduct = () => {
    const navigate = useNavigate()
       const handleClick = () => {
        navigate('/Shop Detail');
    };


    return(
        <div>
            <div className="icon-section G-flex">
                <button className="icon-box">
                    <i className="icon-menu_FILL" />  
                </button>
                <button className="icon-box">
                    <i className="icon-grid_view" />  
                </button>
            </div>
            <div className="product">
                {dataProducts.map((item) => (
                    <button onClick={handleClick} className="product-info G-flex-column G-center">
                        <img className="prod-img" src={item.image} alt="" />
                        <div className="prod-description">
                            <h6 className="prod-name">{item.name}</h6>
                            <span className="prod-name-info">{item.info}</span>
                            <h5 className="prod-price">{item.price} <del>{item.price}</del></h5>
                            <span className="prod-icon">{[...Array(5)].map(star => {
                                return item.icon
                            })}</span>(99)
                        </div>
                    </button>
                ))}
            </div>
            <ShopBtn />
        </div>
    )
}

export default ShopProduct; 