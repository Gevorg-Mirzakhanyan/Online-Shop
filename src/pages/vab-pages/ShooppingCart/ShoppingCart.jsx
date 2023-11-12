import "./ShoppingCart.scss";
import Paragrafs from "../../../components/paragrafs/Paragrafs";
import prodImg1 from "../../../assets/img/product-1.jpg"
import Counter from "../../../components/counter/Counter";
const ShoppingCart = () => {
    return (
        <div  className="shop-cart">
             <Paragrafs list={['Home/', 'Shop/', 'Shopping Cart']}/>
            <div className="shop-cart-container G-justify-between">
                <div className="cart G-flex-column">
                    <div className="products-list G-flex">
                        <span>Products</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Total</span>
                        <span>Remove</span>
                    </div>
                    {[...Array(5)].map(cart => (
                            <div className="shop-product-info G-flex">
                            <img className="prod-image" src={prodImg1} alt="/" />
                            <span className="prod-info-text">Product Name</span>
                            <span className="prod-info-text">150$</span>
                            <Counter />
                            <span className="prod-info-text">150$</span>
                            <button className="delete">X</button>
                        </div>
                    ))}
                
                </div>
                <div className="product-coupon G-flex-column">
                    <div>
                        <label>
                            <input className="coupon-input" placeholder="Coupon Code" />
                            <button className="coupon-btn">Apply Coupon</button>
                        </label>
                    </div>
                    <h2 className="coupon-title">
                            <span className="title">CART SUMMARY</span>
                    </h2>
                    <div>
                        <div  G-justify-around>
                            <span>Subtotal</span>
                            <span>$150</span>
                        </div>
                        <div>
                            <span>Shipping</span>
                            <span>$10</span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>$160</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ShoppingCart