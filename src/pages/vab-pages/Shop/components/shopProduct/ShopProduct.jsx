import "./ShopProduct.scss";
import dataProducts from "../../../Home/components/Products/dataProducts";
import "../../../Home/components/Products/Products.scss"
import ShopBtn from "./shopBtn/ShopBtn";
const ShopProduct = () => {
    return(
        <div>
            <div className="icon-section">
                <button className="icon-box">
                    <i className="icon-menu_FILL" />  
                </button>
                <button className="icon-box">
                    <i className="icon-grid_view" />  
                </button>
            </div>
            <div className="product">
                {dataProducts.map((item) => (
                    <a className="product-info" href="/">
                        <img className="prod-img" src={item.image} alt="" />
                        <div className="prod-description">
                            <h6 className="prod-name">{item.name}</h6>
                            <span className="prod-name-info">{item.info}</span>
                            <h5 className="prod-price">{item.price} <del>{item.price}</del></h5>
                            <span className="prod-icon">{[...Array(5)].map(star => {
                                return item.icon
                            })}</span>(99)
                        </div>
                    </a>
                ))}
            </div>
            <ShopBtn />
        </div>
    )
}

export default ShopProduct; 