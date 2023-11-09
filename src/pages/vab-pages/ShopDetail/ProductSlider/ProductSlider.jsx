import Slider from "react-slick"
import dataProducts from "../../Home/components/Products/dataProducts"
import "./ProductSlider.scss"

const ProductSlider = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false
    }

    return (
        <div>
            <h2 className="prod-title">
                <span className="title">YOU MAY ALSO LIKE</span>
            </h2>
            <Slider  {...settings}>
                {dataProducts.map((item) => (
                    <div>
                        <div className="product-info">
                            <img className="prod-img" src={item.image} alt="" />
                            <div className="prod-description">
                                <h6 className="prod-name">{item.name}</h6>
                                <h5 className="prod-price">{item.price} <del>{item.price}</del></h5>
                                <span className="prod-icon">{[...Array(5)].map(star => {
                                    return item.icon
                                })}</span>(99)
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ProductSlider;