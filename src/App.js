
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/style/index.scss'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Contacts from './pages/vab-pages/Contacts/Contacts';
import Home from './pages/vab-pages/Home/Home';
import Shop from './pages/vab-pages/Shop/Shop';
import ShopDetail from './pages/vab-pages/ShopDetail/ShopDetail';
import ShoppingCart from './pages/vab-pages/ShooppingCart/ShoppingCart';
import Checkout from './pages/vab-pages/Checkout/Checkout';
import Login from './pages/vab-pages/Login/Login';
import Registration from './pages/vab-pages/Registration/Registration';
import Admin from './pages/admin-pages/Admin';
import { useEffect, useState } from 'react';



function App() {

  const [token, setToken] = useState('')

  useEffect(() => {
      let tokenData = localStorage.getItem('loginData')
      setToken(tokenData)
  }, []);

  return (

    token ? <Admin /> : 
    (<div className="App">
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

    </div>)
  );
}

export default App;
