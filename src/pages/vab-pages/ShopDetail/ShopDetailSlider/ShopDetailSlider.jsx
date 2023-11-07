import "./ShopDetailSlider.scss";
import Slider from "react-slick";
import slider from "./slider";

const ShopDetailSlider = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
    };

    return (
        <div className="shop-detail-slider">
            <Slider {...settings}>
                {slider.map((item) => (
                    <div className="">
                        <img src={item.image} alt="/" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ShopDetailSlider;