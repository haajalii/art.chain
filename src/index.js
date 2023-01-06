import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Home from './container/Home';
import Explore from './container/Explore';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import Navbar from "./component/Navbar";
import SocialMedia from "./component/SocialMedia";
import Header from "./component/Header";
import App from "./App";





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
