import React, { useState } from 'react'
import "../css/page css/LoginPage.css"
export default function LoginPage() {
  const[loginForm , setLoginForm] = useState(false)
  const[registrationForm , setRegistrationForm] = useState(true)
  const [registrationData , setRegistrationData] = useState({name:"" , email:"" , contact:"" , password:""})
  const [loginData , setLoginData] = useState({email:"" , password:""})

  const showLoginForm = () => {
    setLoginForm(true)
    setRegistrationForm(false)
  }

  const showRegistrationForm = () => {
    setLoginForm(false)
    setRegistrationForm(true)
  }

  const handleRegistrationFormChange = (e) => {
    setRegistrationData({...registrationData , [e.target.name]:e.target.value})
  }

  const handleRegistrationFormSubmit = async(e) => {
    e.preventDefault()
    try{
      const response = await fetch("https://saga-global-backend.onrender.com/api/registration" , {
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(registrationData)
      })
      const json = await response.json()
      if(json.success){
        alert("Registration Successfull!!")
        window.location.href = "/"
      }
    }catch(Err){
      console.log(Err);
    }
  }

  const handleLoginFormChange = (e) => {
    setLoginData({...loginData , [e.target.name]:e.target.value})
  }

  const handleLoginFormSubmit = async(e) => {
    e.preventDefault()
    try{
      const response = await fetch("https://saga-global-backend.onrender.com/api/login" , {
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(loginData)
      })
      const json = await response.json()
      if(json.success){
        alert("Login Successfull!!")
        window.location.href = "/"
        localStorage.setItem("login" , true)
        const token = json.token
        localStorage.setItem("token" , token)
      }else{
        alert("Invalid Credentials")
      }
    }catch(err){
      console.log(err);
    }
  }


  return (


    <div className='login-page'>
        <div className="form-box">
          {registrationForm && <form className="signup-form" onSubmit={handleRegistrationFormSubmit}>
            <h3>Registration</h3>
            <div className="input-box">
              <p>Name</p>
              <input type="text" className="input-field" name='name' value={registrationData.name} onChange={handleRegistrationFormChange} />
            </div>
            <div className="input-box">
              <p>Email Address</p>
              <input type="email" className="input-field" name='email' value={registrationData.email} onChange={handleRegistrationFormChange} />
            </div>
            <div className="input-box">
              <p>Contact Number</p>
              <input type="number" className="input-field" name='contact' value={registrationData.contact} onChange={handleRegistrationFormChange} />
            </div>
            <div className="input-box">
              <p>Password</p>
              <input type="password" className="input-field" name='password' value={registrationData.password} onChange={handleRegistrationFormChange} />
            </div>
            <input type="submit" value="Register" className="btn-a" />
            <button className='link-a' onClick={showLoginForm}>Login</button>
          </form>}

          {loginForm && <form className="signup-form signin-form" onSubmit={handleLoginFormSubmit}>
          <h3>Login</h3>
          <div className="input-box">
              <p>Email Address</p>
              <input type="email" className="input-field" name='email' value={loginData.email} onChange={handleLoginFormChange} />
            </div>
            <div className="input-box">
              <p>Password</p>
              <input type="password" className="input-field" name='password' value={loginData.password} onChange={handleLoginFormChange} />
            </div>
            <input type="submit" value="Login" className="btn-a" />
            <button className='link-a' onClick={showRegistrationForm}>Register Yourself</button>
          </form>}
        </div>
    </div>
  )
}
