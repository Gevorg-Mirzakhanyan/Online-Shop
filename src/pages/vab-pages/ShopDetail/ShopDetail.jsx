import Paragrafs from "../../../components/paragrafs/Paragrafs"
import DetailInfo from "./DetailInfo/DetailInfo"
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
        </div>
    )
}

export default ShopDetail