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
        <div className="header">Login</div>
        <div className="content">
            <div className="image">
                <img src = {logo} />
            </div>
            <div className = "form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type= "text" name= "username" placeholder="username" />
                </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type= "password" name= "password" placeholder="password" />
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