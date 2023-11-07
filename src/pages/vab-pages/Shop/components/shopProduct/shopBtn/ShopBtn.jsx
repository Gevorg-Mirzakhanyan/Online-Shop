import { Link } from "react-router-dom";
import "./ShopBtn.scss"

const ShopBtn = () => {
    return (
        <div className="shop-btn">
            <nav>
                <ul className="shop-btn-list">
                    <li>
                        <Link className="shop-btn-link disabled" to={'#'}>Previous</Link>
                    </li>
                    <li>
                        <Link className="shop-btn-link active" to={'#'}>1</Link>
                    </li>
                    <li>
                        <Link className="shop-btn-link" to={'#'}>2</Link>
                    </li>
                    <li>
                        <Link className="shop-btn-link" to={'#'}>3</Link>
                    </li>
                    <li>
                        <Link className="shop-btn-link" to={'#'}>Next</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default ShopBtn