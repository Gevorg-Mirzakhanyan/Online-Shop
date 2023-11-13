import { useState } from "react";
import Title from "../../../../../components/title/Title";
import "./Address.scss"
import OrderTotal from "../OrderTotal/OrderTotal";
const Address = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };

    return (
        <div>
            <div>
                <Title title={'BILLING ADDRESS'} />
            </div>
            <div className="address G-flex-column">
                <div className="billing-address G-flex">
                    <div className="billing-address-box G-flex-column">
                        <label for="firstName">First Name</label>
                        <input className="address-input" placeholder="John" type="text" />
                        <label for="email">E-mail</label>
                        <input className="address-input" placeholder="example@email.com" type="email" />
                        <label for="addressLine1">Address Line 1</label>
                        <input className="address-input" placeholder="123 Street" />
                        <label for="country">Country</label>
                        <input className="address-input" placeholder="United States" type="country" />
                        <label for="state">State</label>
                        <input className="address-input" placeholder="New York" />

                    </div>
                    <div className="billing-address-box G-flex-column">
                        <label for="lastName">Last Name</label>
                        <input className="address-input" placeholder="Doe" type="text" />
                        <label for="mobileNo">Mobile No</label>
                        <input className="address-input" placeholder="+123 456 789" type="email" />
                        <label for="addressLine1">Address Line 2</label>
                        <input className="address-input" placeholder="123 Street" />
                        <label for="city">City</label>
                        <input className="address-input" placeholder="New York" type="text" />
                        <label for="zipCode">Zip Code</label>
                        <input className="address-input" placeholder="123" />
                    </div>

                </div>
                <div>
                    <input type="checkbox" />
                    <span className="check-text">Create an account</span>
                </div>
                <div>
                    <input type="checkbox" onChange={handleCheckboxChange} />
                    <span className="check-text">Create an account</span>
                </div>
            </div>
            
      {isChecked && <OrderTotal />}
        </div>
    )
}

export default Address;