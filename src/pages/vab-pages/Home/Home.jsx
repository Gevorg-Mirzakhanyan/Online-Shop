import Categories from "./components/Categories/Categories"
import HomeMenu from "./components/HomeMenu/HomeMenu"
import Offer from "../../../components/offer/Offer"
import Products from "./components/Products/Products"
import ShopInfo from "./components/ShopInfo/ShopInfo"
import imgOffer1 from "../../../assets/img/offer-1.jpg";
import imgOffer2 from "../../../assets/img/offer-2.jpg"
import "./Home.scss"
import Vendor from "./components/Vendor/Vendor"


const Home = () => {
    return(
        <div className="home">
            <HomeMenu />
            <ShopInfo />
            <Categories />
            <Products title={'FEATURED PRODUCTS'} />
            <div className="offer-container">
                <Offer image={imgOffer1} title={'Special Offer'} discount={'20%'} />
                <Offer image={imgOffer2} title={'Special Offer'} discount={'20%'} />
            </div>
            <Products title={'RECENT PRODUCTS'} />
            <Vendor />
        </div>
    )
}

export default Home