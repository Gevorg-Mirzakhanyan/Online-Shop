import Title from "../../../../../components/title/Title";
import "./OrderTotal.scss"
const OrderTotal = () => {
    return(
        <div className="order-total">
        <div>
            <Title title={'ORDER TOTAL'} />
        </div>
        <div className="order-total-box G-flex-column">
            <h5>Products</h5>
            <div className="product-name G-justify-between">
                <span>Product Name 1</span>
                <span>$150</span>
            </div>
            <div className="product-name G-justify-between" >
                <span>Product Name 2</span>
                <span>$150</span>
            </div>
            <div className="product-name product-name-border G-justify-between">
                <span>Product Name 3</span>
                <span>$150</span>
            </div>
            <div className="G-justify-between">
                <span>Subtotal</span>
                <span>$150</span>
            </div>
            <div className="product-name-border G-justify-between">
                <span>Shipping</span>
                <span>$10</span>
            </div>
            <div className="total-result G-justify-between">
                <span>Total</span>
                <span>$160</span>
            </div>
        </div>
    </div>
    )
}

export default OrderTotal;