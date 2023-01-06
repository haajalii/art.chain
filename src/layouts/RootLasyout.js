import React, {Component} from "react";
import Navbar from "../component/Navbar";
import {NavLink} from "react-router-dom";
import Header from "../component/Header";

class RootLasyout extends Component{
    render () {
        return (
            <div className="RootLayout">
                <Header/>
                <p>this is Layout</p>
                <NavLink to='explore'>exp</NavLink>
            </div>
        )
    }
}
export default RootLasyout;