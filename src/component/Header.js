import React, {Component} from "react";
import './Header.css';
import logoPic2 from '../assets/Art.Chain.svg';

const Header = () => {
    return (
        <div className='header'>
            <header>
                <div className='img-logo'>
                    <img src={logoPic2} alt=""/>
                </div>
            </header>
        </div>
    )
}

export default Header;