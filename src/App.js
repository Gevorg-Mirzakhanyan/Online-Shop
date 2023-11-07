
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/style/index.scss'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Contacts from './pages/vab-pages/Contacts/Contacts';
import Home from './pages/vab-pages/Home/Home';
import Shop from './pages/vab-pages/Shop/Shop';
import ShopDetail from './pages/vab-pages/ShopDetail/ShopDetail';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Shop' element={<Shop />} /> 
        <Route path='Shop Detail' element={<ShopDetail />} /> 
        <Route path='Contacts' element={<Contacts />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
