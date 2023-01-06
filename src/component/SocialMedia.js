import React, {Component} from "react";
import './SocialMedia.css';
import {BiComment, BiGift, BiShareAlt, BiDotsHorizontalRounded} from 'react-icons/bi';
import Navbar from "./Navbar";


class SocialMedia extends Component{
    render() {
        return(
            <div className='SocialMedia'>
                <div className='post'>
                    <div className='caption'>
                        <img src={this.props.profile} alt="profile"/>
                        <div className='info'>
                            <h4>{this.props.user}</h4>
                            <p>{this.props.description}</p>
                        </div>
                        <div className='more'>
                            <BiDotsHorizontalRounded/>
                        </div>
                    </div>
                    <div className='img'>
                        <img src={this.props.post} alt="image"/>
                    </div>
                    <div className='options-par'>
                        <div className='options'>
                            <button><BiGift /></button>
                            <button><BiComment/></button>
                            <button><BiShareAlt/></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SocialMedia;