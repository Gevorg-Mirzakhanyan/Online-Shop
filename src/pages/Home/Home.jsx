import Categories from "./components/Categories/Categories"
import HomeMenu from "./components/HomeMenu/HomeMenu"
import Offer from "./components/HomeMenu/Offer"
import Products from "./components/Products/Products"
import ShopInfo from "./components/ShopInfo/ShopInfo"
import "./Home.scss"


const Home = () => {
    return(
        <div className="home">
            <HomeMenu />
            <ShopInfo />
            <Categories />
            <Products />
            <div className="offer-container"><Offer /></div>
            

        </div>
    )
}

export default Home