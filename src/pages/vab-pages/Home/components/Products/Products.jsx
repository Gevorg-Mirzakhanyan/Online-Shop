import dataProducts from "./dataProducts"
import "./Products.scss"
const Products = (props) => {
    return (
        <div className="prod-section">
            <h2 className="prod-title">
                <span className="title">{props.title}</span>
            </h2>
            <div className="product">
                {dataProducts.map((item) => (
                    <a className="product-info G-flex-column G-center" href="/">
                        <img className="prod-img" src={item.image} alt="" />
                        <div className="prod-description">
                            <h6 className="prod-name">{item.name}</h6>
                            <span className="prod-name-info">{item.info}</span>
                            <h5 className="prod-price">{item.price} <del>{item.price}</del></h5>
                            <span className="prod-icon">{[...Array(5)].map(star => {
                                return item.icon
                            })}</span>(99),
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Products;