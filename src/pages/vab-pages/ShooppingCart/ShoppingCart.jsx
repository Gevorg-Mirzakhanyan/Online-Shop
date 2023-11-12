import "./ShoppingCart.scss";
import Paragrafs from "../../../components/paragrafs/Paragrafs";
import prodImg1 from "../../../assets/img/product-1.jpg"
import Counter from "../../../components/counter/Counter";
import { useNavigate } from "react-router-dom";
import Title from "../../../components/title/Title";

const ShoppingCart = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Checkout');
    };


    return (
        <div className="shop-cart">
            <Paragrafs list={['Home/', 'Shop/', 'Shopping Cart']} />
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
                    <Title title={'CART SUMMARY'} />
                    <div className="total">
                        <div className="coupon-total G-justify-between">
                            <span>Subtotal</span>
                            <span>$150</span>
                        </div>
                        <div className="coupon-total coupon-shipping G-justify-between">
                            <span>Shipping</span>
                            <span>$10</span>
                        </div>
                        <div className="coupon-total coupon-total-result  G-justify-between">
                            <span>Total</span>
                            <span>$160</span>
                        </div>
                        <div className="coupon-link G-center">
                            <button onClick={handleClick} className="coupon-btn btn-checkout">Procced To Checkout</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShoppingCart