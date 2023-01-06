import React, {Component} from "react";
import {BrowserRouter as Router, Link, NavLink, Route, Routes} from "react-router-dom";
import Home from "../container/Home";
import Explore from "../container/Explore";
import './Navbar.css';
import {FiHome, FiPlus} from 'react-icons/fi';
import {MdOutlineExplore, MdOutlineAccountCircle, MdOutlineHome} from 'react-icons/md';

class Navbar extends Component {
    render() {
        return(
            <div className='Navbar'>
                <nav className='vertical-center'>
                    <ul>
                        <li><NavLink to='/art.chain'><FiHome className='nav-icon'/></NavLink></li>
                        <li><NavLink to='/explore'><MdOutlineExplore className='nav-icon'/></NavLink></li>
                        <li><NavLink to='/add'><FiPlus className='nav-icon'/></NavLink></li>
                        <li><NavLink to='/profile'><MdOutlineAccountCircle className='nav-icon'/></NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}


export default Navbar;