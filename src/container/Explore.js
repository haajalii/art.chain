import React,{Component} from 'react';
import './Explore.css'
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import SocialMedia from "../component/SocialMedia";
import {AiOutlineDown} from 'react-icons/ai';
import image2 from '../assets/victor-grabarczyk-wN9DU73b8_s-unsplash.jpg';
import image from '../assets/Picasso-The-Milliners-Workshop.jpg';
import image3 from '../assets/wp7535802-minimal-reflection-sunset-wallpapers.jpg';
import image4 from '../assets/pexels-karolina-grabowska-6634140.jpg'

class Explore extends Component {
    render() {
        let posts = [
            [
                <SocialMedia user='alex241' description='Wow! my new masterpiece' profile={image3} post={image2}/>,
                <SocialMedia user='nextdoorneighbor' description='SUIIIIIII' profile={image} post={image3}/>
            ],
            [
                <SocialMedia user='mamad007' description='Daskhosh chi zadam' profile={image2} post={image4}/>,
                <SocialMedia user='daviddavidUSA' description='want some more?' profile={image} post={image}/>
            ]
        ];
        return(
            <div className='explore'>
                <div className='blur'>
                <div className='header'>
                    <Header/>
                </div>
                <div className='btn-sort'>
                    <button ><span> Newest </span><AiOutlineDown/></button>

                </div>
                <Navbar/>
                <div className='posts'>
                    {posts.map((post, index) => {
                        return <div className='social' key={index}> {post.map((p, i) => {
                            return <div className='soc-p' key={i}>{p}</div>
                        })} </div>;
                    })}
                </div>
                </div>
            </div>
        )
    }
}

export default Explore;