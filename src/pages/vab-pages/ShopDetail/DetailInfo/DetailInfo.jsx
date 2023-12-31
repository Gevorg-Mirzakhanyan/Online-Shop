import { useContext, useState } from "react";
import Counter from "../../../../components/counter/Counter";

import "./DetailInfo.scss"
import { ProductContext } from "../../../../context/ProductContext";
const DetailInfo = () => {

    const {addToProduct} = useContext(ProductContext)

    const [count, setCount] = useState(0)
    const handleClickAdd = () => {
        addToProduct(count)
    }

    return (
        <div className="shop-detail-info G-flex-column">
            <h2 className="detail-title">Product Name Goes Here</h2>
            <span className="prod-icon">{[...Array(5)].map(star => {
                return <i className="icon-star icon" />
            })}(99)</span>
            <h3 className="detail-title">$150.00</h3>
            <p className="detail-description">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc ipsum et,
                labore clita lorem magna duo dolor no sea Nonumy
            </p>
            <div className="detail-info-size">
                <span className="size-name">Sizes:</span>
                <label>
                    <input type="radio" name="size"/>
                    <span className="size">XS</span>
                </label>
                <label>
                    <input type="radio" name="size" />
                    <span className="size">S</span>
                </label>
                <label>
                    <input type="radio" name="size" />
                    <span className="size">M</span>
                </label>
                <label>
                    <input type="radio" name="size" />
                    <span className="size">L</span>
                </label>
                <label>
                    <input type="radio" name="size" />
                    <span className="size">XL</span>
                </label>
            </div>
            <div className="detail-info-size">
                <span className="size-name">Color:</span>
                <label>
                    <input type="radio" name="color" />
                    <span className="size">Black</span>
                </label>
                <label>
                    <input type="radio" name="color"  />
                    <span className="size">White</span>
                </label>
                <label>
                    <input type="radio" name="color"  />
                    <span className="size">Red</span>
                </label>
                <label>
                    <input type="radio" name="color"  />
                    <span className="size">Blue</span>
                </label>
                <label>
                    <input type="radio" name="color"  />
                    <span className="size">Green</span>
                </label>
            </div>
            <div className="detail-add G-flex">
                <div className="shopdetail-counter">
                    <Counter setCount={setCount} />
                </div>
                <button onClick={handleClickAdd} className="detail-add-btn">
                    <i className="icon-basket" />
                       <span>Add To Cart</span>
                </button>
            </div>
            <div className="detail-icon G-flex">
                <span>Share on:</span>
                <div>
                    <i className="icon-facebook" />
                    <i className="icon-twitter" />
                    <i className="icon-linkedin" />
                    <i className="icon-instagram" />
                </div>
            </div>
           
        </div>
    )
}

export default DetailInfo;