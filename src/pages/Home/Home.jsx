import Categories from "./components/Categories/Categories"
import HomeMenu from "./components/HomeMenu/HomeMenu"
import Products from "./components/Products/Products"
import ShopInfo from "./components/ShopInfo/ShopInfo"


const Home = () => {
    return(
        <div className="home">
            <HomeMenu />
            <ShopInfo />
            <Categories />
            <Products />

        </div>
    )
}

export default Home