
import Paragrafs from "../../../components/paragrafs/Paragrafs";
import Title from "../../../components/title/Title";
import "./Checkout.scss";
const Checkout = () => {
    return(
        <div className="checkout">
            <Paragrafs list={['Home/ ', 'Shop/ ', 'Checkout']} />
            <div>
                <div>
                    <Title title={'BILLING ADDRESS'} />
                </div>
                <div className="billing-address G-flex">
                    <div className="billing-address-box G-flex-column">
                        <label for="firstName">First Name</label>
                        <input className="address-input" placeholder="John" type="text" />
                        <label for="email">E-mail</label>
                        <input className="address-input" placeholder="example@email.com" type="email"/>
                        <label for="addressLine1">Address Line 1</label>
                        <input className="address-input" placeholder="123 Street"/>
                        <label for="country">Country</label>
                        <input className="address-input" placeholder="United States" type="country" />
                        <label for="state">State</label>
                        <input className="address-input" placeholder="New York" />
                    
                    </div>
                    <div className="billing-address-box G-flex-column">
                        <label for="firstName">First Name</label>
                        <input className="address-input" placeholder="John" type="text" />
                        <label for="email">E-mail</label>
                        <input className="address-input" placeholder="example@email.com" type="email"/>
                        <label for="addressLine1">Address Line 1</label>
                        <input className="address-input" placeholder="123 Street"/>
                        <label for="country">Country</label>
                        <input className="address-input" placeholder="United States" type="country" />
                        <label for="state">State</label>
                        <input className="address-input" placeholder="New York" />
                    
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Checkout;