import React, { useEffect, useState } from 'react'
import "../css/component css/Navbar.css"
import logo from "../images/logo.png"
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export default function Navbar() {
  const [backgroundColor , setBackgroundColor] = useState("transparent")
  const [sideMenu , setSideMenu] = useState(false)
  const [isLogin , setIsLogin] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 60) {
        setBackgroundColor("white");
      } else {
        setBackgroundColor("transparent");
      }
    });
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []); 

  useEffect(() => {
    const checkLogin = localStorage.getItem("login")
    setIsLogin(checkLogin)
  } , [])

  const handleLogout = () => {
    localStorage.removeItem("login")
    window.location.reload()
  }

  const displaySideMenu = () => {
    setSideMenu(true)
  }
  const closeSideMenu = () => {
    setSideMenu(false)
  }
  return (
    <div className='navbar' id='navbar' style={{backgroundColor}}>
      <div className="nav-left">
        <img src={logo} alt="" />
        {/* <h4>Saga Consultants</h4> */}
      </div>
      <div className="nav-right">
        <Link to="/" className='link-a'>Home</Link>
        <Link to="/about-us" className='link-a'>About</Link>
        <Link to="/services" className='link-a'>Services</Link>
        <Link to="/contact" className='link-a'>Contact Us</Link>
        {isLogin ? <button className='btn-a red-btn' onClick={handleLogout}>Logout</button> : <Link to="/login" className="btn-a">Login</Link>}
      </div>
      <MenuIcon className='menu-icon' onClick={displaySideMenu}/>
      {sideMenu && <div className="side-menu">
        <img src={logo} alt="" />
        <Link to="/" className='link-a' onClick={closeSideMenu}>Home</Link>
        <Link to="/about-us" className='link-a' onClick={closeSideMenu}>About</Link>
        <Link to="/services" className='link-a' onClick={closeSideMenu}>Services</Link>
        <Link to="/contact" className='link-a' onClick={closeSideMenu}>Contact Us</Link>
        <Link to="/login" className="btn-a" onClick={closeSideMenu}>Login</Link>
        <CloseIcon className='close-icon' onClick={closeSideMenu}/>
      </div>}
    </div>
  )
}
