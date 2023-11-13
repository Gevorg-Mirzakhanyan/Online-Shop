
import Paragrafs from "../../../components/paragrafs/Paragrafs";
import "./Checkout.scss";
import Address from "./components/Address/Address";
import OrderTotal from "./components/OrderTotal/OrderTotal";
import Payment from "./components/Payment/Payment";
const Checkout = () => {
    return (
        <div className="checkout">
            <Paragrafs list={['Home/ ', 'Shop/ ', 'Checkout']} />
            <div className="checkout-container G-flex">
                <Address />
                <div className="total-payment">
                    <OrderTotal />
                    <Payment />
                </div>

            </div>

        </div>
    )
}

export default Checkout;