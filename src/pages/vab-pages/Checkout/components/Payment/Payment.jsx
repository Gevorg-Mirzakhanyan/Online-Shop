import Title from "../../../../../components/title/Title";
import "./Payment.scss"
const Payment = () => {
    return (
        <div className="payment">
        <Title title={'PAYMENT'} />
        <div className="payment-box G-flex-column">
            <div>
                <input type="radio" name="payment" /> 
                <span className="payment-text">Paypal</span>
            </div>
            <div>
                <input type="radio" name="payment" /> 
                <span className="payment-text">Direct Check</span>
            </div>
            <div>
                <input type="radio" name="payment" /> 
                <span className="payment-text">Bank Transfer</span>
            </div>
           
            <button className="payment-btn">Place Order</button>
          

        </div>
    </div>
    )
}

export default Payment;

