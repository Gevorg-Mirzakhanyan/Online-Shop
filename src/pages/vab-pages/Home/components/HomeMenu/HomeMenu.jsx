import "./HomeMenu.scss";
import imgOffer1 from "../../../../../assets/img/offer-1.jpg";
import imgOffer2 from "../../../../../assets/img/offer-2.jpg";
import Offer from "../../../../../components/offer/Offer";
import backgroundData from "./backgroundData";
import { Link } from "react-router-dom";
import Slider from "react-slick";




const HomeMenu = () => {
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false
    };


    return (
        <div className="home-menu">
            <div className="home-slider">
                <Slider {...settings}>
                    {backgroundData.map((item) => (
                        <div className="slider-images">
                            <div className="backgroundCarusel G-flex-column G-center" style={item.image}>
                                <div className="home-menu-img">
                                    <h2 className="home-menu-title">{item.title}</h2>
                                    <p className="home-menu-des">{item.description}</p>
                                    <Link>
                                        <span className="home-menu-btn">Shop Now</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="homeOffer">
                <Offer image={imgOffer1} title={'Special Offer'} discount={'20%'} />
                <Offer image={imgOffer2} title={'Special Offer'} discount={'20%'} />
            </div>

        </div>
    )
}

export default HomeMenu