
import Paragrafs from "../../../components/paragrafs/Paragrafs"
import DetailInfo from "./DetailInfo/DetailInfo"
import ProductInfo from "./ProductInfo/ProductInfo"
import ProductSlider from "./ProductSlider/ProductSlider"
import "./ShopDetail.scss"
import ShopDetailSlider from "./ShopDetailSlider/ShopDetailSlider"


const ShopDetail = () => {


    return (
        <div className="shop-detail">
            <Paragrafs list={['Home /', 'Shop /', 'Shop Detail']} />
            <div className="details">
                <ShopDetailSlider />
                <DetailInfo />
            </div>
            <ProductInfo />
            <ProductSlider />
        </div>

     
    )
}

export default ShopDetail