import React from 'react'
import "../admin css/AdminNavbar.css"
import logo from "../../images/logo.jpeg"
export default function AdminNavbar() {

  const handleLogout = () => {
    localStorage.clear()
    window.location.href = "/"
  }

  return (
    <div className='admin-navbar'>
        <div className="admin-navbar-left">
            <img src={logo} alt="" />
        </div>
        <div className="admin-navbar-right">
            <button className="btn-a red-btn" onClick={handleLogout}>Logout</button>
        </div>
    </div>
  )
}
