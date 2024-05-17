import React from 'react'
import './Sign.css'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className="signin-form">
        <h2>Sign In</h2>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <input type="button" value="Login" />
          <a href='#'>Forgot password</a>
          
          
        </form>
        <div className="signup">
            <p>Don't have an account?</p>
        <button ><Link to='/signup' className="navbar-link">Signup</Link></button>
            
        </div>
      </div>
  )
}

export default Signin