import React from 'react';

function Signup(){
    return(
        <div className ="form-box">
            <div class="logo-box"></div>
            <hr />
            <h2>User Login</h2>
            <h3>Enter your details below</h3>
            <form id="register" className="input-group-register">
            <input type="text" className="input-field" placeholder="First Name" required />
            <input type="text" className="input-field" placeholder="Last Name" required />
            <input type="email" className="input-field" placeholder="Email" required />
            <input type="text" className="input-field" placeholder="Username" required />
            <input type="password" className="input-field" placeholder="Enter Password" required />
            <input type="password" className="input-field" placeholder="Confirm Password" required />
            <input type="checkbox" className="check-box" /><span>I agree to the terms and conditions</span>
            <button type="submit" className="submit-btn">Register</button>
          </form>
        </div>
    )
}

export default Signup;