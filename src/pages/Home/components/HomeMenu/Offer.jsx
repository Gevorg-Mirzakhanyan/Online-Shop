import imgOffer1 from "../../../../assets/img/offer-1.jpg";
import imgOffer2 from "../../../../assets/img/offer-2.jpg";
import "./HomeMenu.scss";

const Offer = () => {
    const backgoundOffer1  = {
        backgroundImage: `url(${imgOffer1})`,
        backgroundSize: 'cover',
        minHeight: '300px',
        backgroundPosition: 'center',
    }
    
    const backgoundOffer2  = {
        backgroundImage: `url(${imgOffer2})`,
        backgroundSize: 'cover',
        minHeight: '300px',
        backgroundPosition: 'center',
    }

    return(
        <div className="offer">
            <div style={backgoundOffer1}>
                <div className="offer-info">
                    <span>SAVE 20%</span>
                    <h2>Special Offer</h2>
                    <button className="offerBtn">Shop Now</button>
                </div>
            </div>
            <div style={backgoundOffer2}>
                <div className="offer-info">
                    <span>SAVE 20%</span>
                    <h2>Special Offer</h2>
                    <button className="offerBtn">Shop Now</button>
                </div>
        </div>
    </div>
        
    )
}

export default Offer;