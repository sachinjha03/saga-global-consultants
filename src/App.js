import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './admin panel/admin pages/AdminDashboard';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import AdminNavbar from './admin panel/admin components/AdminNavbar';
import AdminFooter from './admin panel/admin components/AdminFooter';

function App() {
  const[admin , setAdmin] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.admin) {
        setAdmin(true)
      } else {
        setAdmin(false)
      }
    }
  })
  return (
   <>
    <BrowserRouter basename='/saga-global-consultants'>
      {admin ? <AdminNavbar/> : <Navbar/>}
      <Routes>
        <Route path='/' element={admin ? <AdminDashboard/> :  <HomePage/>}/>
        <Route path='/about-us' element={admin ? <AdminDashboard/> :<AboutPage/>}/>
        <Route path='/services' element={admin ? <AdminDashboard/> :<ServicePage/>}/>
        <Route path='/contact' element={admin ? <AdminDashboard/> :<ContactPage/>}/>
        <Route path='/login' element={admin ? <AdminDashboard/> :<LoginPage/>}/>

        <Route path='/dashboard' element={admin ? <AdminDashboard/> :<HomePage/>}/>
      </Routes>
      {admin ? <AdminFooter/> :<Footer/>}
    </BrowserRouter>
   </>
  );
}

export default App;
