import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './Postbutton.css';

class PostButton extends Component {
    render() {
        const styles = {
            backgroundColor: this.props.color,
            border: 'none',
            height: '35px',
            width: '280px',
            fontSize: '16px',
            fontWeight: 500,
            borderRadius: '20px'
        };
        return (
            <div className='post-button' >
                <NavLink to='/explore' className='navlink'>
                    <button style={styles}>
                        {this.props.name}
                    </button>
                </NavLink>
            </div>
        );
    }
}



export default PostButton;