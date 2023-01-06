import React, {Component} from "react";
import LoginButton from '../component/LoginButton';
import './Home.css';
import logoPic from '../assets/Art.Chain.svg';
import {ethers} from "ethers";
import Navbar from "../component/Navbar";

class Home extends Component {
    render() {
        return (
            <div className='wallpaper'>
                <div className='home'>
                    <Navbar/>
                    <div className='sec1'>

                        <div className='center-title title'>
                            <img src={logoPic} alt='logo' className='logo'/>
                            <h1>Include, Infuse, Innovate</h1>
                            <p className='center-title'>A place toshare and review all kinds of different arts with ability to buy and sell your works using Ethereum Blockchain <br/>
                                <br/> Connect your wallet to continue:</p>
                        </div>
                        <LoginButton name='Connect wallet' login={connectMeta}/>
                    </div>
                    <div className='sec2 center-title '>
                        <div className='container'>
                            <h1>The revolution is happening. Join?</h1>
                            <h2>Include, Infuse, Innovate</h2>
                            <p className='quote'>“In 22 years of making art online, I’ve never had such networked
                                experiences like nft drops.”</p>
                            <p>NFTs (non-fungible tokens) are rapidly sweeping the worlds of digital
                                art and collectibles.
                                They are not fads. They have, as we all can see, revolutionized the art world.
                                Like Rafaël Rozendaal, many digital artists are experiencing dramatic
                                career changes,
                                new feelings of making art and money. This is only the beginning and
                                we feel that
                                NFTs will play an important role in the future of digital art.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const connectMeta = async () => {
    const ethereum = window.ethereum;
    if (!ethereum) {
        alert('nah')
    } else {
        const provider = new ethers.providers.Web3Provider(ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
    }
}

export default Home;