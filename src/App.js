
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import './assets/style/index.scss'
import Admin from './pages/admin-pages/Admin';
import { useEffect, useState } from 'react';
import { useUserContext } from './context/users-context';
import GuestPages from './pages/vab-pages/GuestPages';



function App() {
  const location = useLocation()
  const [token, setToken] = useState('')
  const userData = useUserContext()

  useEffect(() => {
      let tokenData = localStorage.getItem('token')
      setToken(tokenData)
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
}, [location.pathname]);

if (userData.userLoading) {
  return <p>Loading.........</p>
}

  return (
    token && userData.user  ? <Admin /> : <GuestPages />
  );
}

export default App;
