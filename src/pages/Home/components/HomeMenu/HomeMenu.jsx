import "./HomeMenu.scss";
import imgCarusel from "../../../../assets/img/carousel-1.jpg";
import Offer from "./Offer";

const HomeMenu = () => {
const backgoundCarusel  = {
    backgroundImage: `url(${imgCarusel})`,
    backgroundSize: 'cover',
    width: '60%',
    minHeight: '600px',
    backgroundPosition: 'center',
}

return(
        <div className="home-menu">
            <div style={backgoundCarusel}></div>
            <div className="homeOffer"> <Offer /></div>
           
        </div>
    )
}

export default HomeMenu