import "./HomeMenu.scss";
import imgCarusel from "../../../../../assets/img/carousel-1.jpg";
import imgOffer1 from "../../../../../assets/img/offer-1.jpg";
import imgOffer2 from "../../../../../assets/img/offer-2.jpg";
import Offer from "../../../../../components/offer/Offer";

const HomeMenu = () => {


return(
        <div className="home-menu">
            <div className="backgoundCarusel" style={{backgroundImage: `url(${imgCarusel})`}}></div>
            <div className="homeOffer">
                 <Offer image={imgOffer1} title={'Special Offer'} discount={'20%'} />
                 <Offer image={imgOffer2} title={'Special Offer'} discount={'20%'} />  
            </div>
           
        </div>
    )
}

export default HomeMenu