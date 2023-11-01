
import { Link } from "react-router-dom";

import "./Offer.scss"

const Offer = ({ image, title, link, discount }) => {
   
    return (
      
            <div className="background-offer1"  style={{backgroundImage: `url(${image})`}}>
                <div className="offer-info G-center G-flex-column">
                    <span>SAVE {discount}%</span>
                    <h2>{title}</h2>
                    <Link>
                        <button className="offerBtn">Shop Now</button>
                    </Link>
                    
                </div>
            </div>
       

    )
}

export default Offer;