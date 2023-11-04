import "./Vendor.scss"
import vendor1 from "../../../../../assets/img/vendor-1.jpg"
import vendor2 from "../../../../../assets/img/vendor-2.jpg"
import vendor3 from "../../../../../assets/img/vendor-3.jpg"
import vendor4 from "../../../../../assets/img/vendor-4.jpg"
import vendor5 from "../../../../../assets/img/vendor-5.jpg"
import vendor6 from "../../../../../assets/img/vendor-6.jpg"
import vendor7 from "../../../../../assets/img/vendor-7.jpg"
import vendor8 from "../../../../../assets/img/vendor-8.jpg"
import Slider from "react-slick";

const Vendor = () => {
    const image = [
        vendor1,
        vendor2,
        vendor3,
        vendor4,
        vendor5,
        vendor6,
        vendor7,
        vendor8,
    ]

    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        arrows: false
    };

    return (
        <Slider className="vendor" {...settings}>
            {image.map((item) => {
                return <div><img src={item} alt="/" /></div>
            })}
        </Slider>
    )
}

export default Vendor;