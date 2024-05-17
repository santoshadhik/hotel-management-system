import React from 'react'
import './Sign.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div class="signup-form">
       <div >
      <h2>Sign Up</h2>
   
      <form>
        <label>Full Name</label>
        <input type="text" placeholder=""  required/>
        <label>Address</label>
        <input type="text" placeholder=""required />
        <label>Email</label>
        <input type="email" placeholder=""required />
        <label>Password</label>
        <input type="password" placeholder=""required />
        <label>Confirm Password</label>
        <input type="password" placeholder=""required />
        <input type="button" value="Submit" />
      </form>
      <p>
        By clicking the Sign Up button,you agree to our <br />
        <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
      </p>
    </div>
    <p class="para-2">
      <p>Already have an account? </p> 
       <button><Link to='/signin' className="navbar-link">Login</Link> </button>
    </p>
    </div>
  )
}

export default Signup