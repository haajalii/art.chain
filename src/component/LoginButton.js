import React from "react";
import './LoginButton.css';


const LoginButton = (props) => {
    return(
        <div className='all center'>
            <button className='login-btn pointer grow shadow-hover' onClick={props.login}>
                {props.name}
            </button>
        </div>
    )
}




export default LoginButton;