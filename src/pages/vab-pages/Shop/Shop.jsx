
import "./Shop.scss"
import Paragrafs from "../../../components/paragrafs/Paragrafs";
import "../../../components/paragrafs/Paragrafs.scss"
import Filter from "./components/filter/Filter.jsx";
import ShopProduct from "./components/shopProduct/ShopProduct.jsx";


const Shop = () => {
    return(
        <div className="shop">
            <Paragrafs list={['Home/', 'Shop/', 'Shop List']} />
            <div className="shop-page G-flex">
                <Filter />
                <ShopProduct />
            </div>
        </div>
    )
}

export default Shop