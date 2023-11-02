import Slider from "react-slick"
import backgroundData from "./backgroundData";
import { Link } from "react-router-dom";
import "./HomeMenu.scss";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeMenuSlider = () => {
    
const settings2 = {
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  };
 
    return (
        <Slider {...settings2}>
               {backgroundData.map((item) => (
                
                <div className="backgroundCarusel" style={item.image}>
          
                <div className="home-menu-img">
                    <h2 className="home-menu-title">{item.title}</h2>
                    <p className="home-menu-des">{item.description}</p>
                    <Link>
                        <span className="home-menu-btn">Shop Now</span>
                    </Link>
                </div>
            
            </div>
         
        ))}
        </Slider>
    )
}

export default HomeMenuSlider