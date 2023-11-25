
import { Route, Routes } from 'react-router-dom';
import '../../App.css';
import '../../assets/style/index.scss'
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Contacts from '../vab-pages/Contacts/Contacts';
import Home from '../vab-pages/Home/Home';
import Shop from '../vab-pages/Shop/Shop';
import ShopDetail from '../vab-pages/ShopDetail/ShopDetail';
import ShoppingCart from '../vab-pages/ShooppingCart/ShoppingCart';
import Checkout from '../vab-pages/Checkout/Checkout';
import Login from '../vab-pages/Login/Login';
import Registration from '../vab-pages/Registration/Registration';

const GuestPages = () => {
    return (
        <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Shop' element={<Shop />} /> 
          <Route path='Shop Detail' element={<ShopDetail />} /> 
          <Route path='Contacts' element={<Contacts />} /> 
          <Route path='ShoppingCart' element={<ShoppingCart />} /> 
          <Route path='Checkout' element={<Checkout />} /> 
          <Route path='Login' element={<Login />} /> 
          <Route path='Registration' element={<Registration />} /> 
   
        </Routes>
        <Footer />
  
      </div>
    )
}

export default GuestPages;