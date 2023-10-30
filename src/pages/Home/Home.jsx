import Categories from "./components/Categories/Categories"
import HomeMenu from "./components/HomeMenu/HomeMenu"
import ShopInfo from "./components/ShopInfo/ShopInfo"


const Home = () => {
    return(
        <div className="home">
            <HomeMenu />
            <ShopInfo />
            <Categories />
        </div>
    )
}

export default Home