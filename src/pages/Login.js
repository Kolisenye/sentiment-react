import React from 'react';


function Login(){
    return(
        <div className ="form-box">
            <div class="logo-box"></div>
            <hr />
            <h2>User Login</h2>
            <h3>Enter your details below</h3>
            <form id="login" className="input-group-login">
            <input type="text" className="input-field" placeholder="Email Id" required />
            <input type="password" className="input-field" placeholder="Enter password" required />
            <input type="checkbox" className="check-box" /><span>Remember Password</span>
            <button type="submit" className="submit-btn">Log in</button>
          </form>
        </div>
    )
}

export default Login;