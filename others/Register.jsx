import { render } from "@testing-library/react";
import React from "react"
import logo from "../../src/assets/background.png"

export class login extends React.Component {
    constructor(props) {
        super(props);
    }
render() {
    return (
    <div className = "base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
            <div className="image">
                <img src = {logo} />
            </div>
            <div className = "form">
                <div className="form-group">
                    <label htmlFor="firstname">First Name</label>
                    <input type= "text" name= "firstname" placeholder="First name" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input type= "text" name= "lastname" placeholder="Last name" />
                </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type= "email" name= "email" placeholder="Email" />
                </div>
                 <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type= "text" name= "username" placeholder="Username" />
                </div>
                 <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type= "password" name= "password" placeholder="Password" />
                </div>
                 <div className="form-group">
                    <label htmlFor="password">Confirm Password</label>
                    <input type= "password" name= "password" placeholder="Confirm password" />
                </div>
            </div>
        </div>
        <div className="footer">
            <button type="submit" className="btn">
                Login
            </button>
        </div>
    </div>
);
    }
}