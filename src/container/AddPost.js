import React, {Component, useState} from 'react';
import Navbar from "../component/Navbar";
import PostButton from "../component/PostButton";
import './AddPost.css';
import Header from "../component/Header";



function AddPost(props){

    const [file, setFile] = useState();
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    function cancel(e){
        setFile(null);
    }
    return (
        <div className="add">
            <div className="blur">
                <div className="header-add">
                    <Header/>
                </div>
                <Navbar/>
                <div className='add-post div-center'>
                    <div className="post-back div-center">
                        <div className="image-inp div-center" id='imageinp'>
                            <input style={{display: 'inline-block', position: "absolute"}} type="file" name='' className='file-inp' accept="image/*" onChange={handleChange}/>
                            <img onClick={cancel} src={file} alt="your post" className='image-preview'/>
                        </div>
                        <div className="other-info">
                            <div className="description">
                                <p>Description:</p>
                                <textarea rows='2' placeholder='Type here...'/>
                            </div>
                            <div className="buttons">
                                <div className='button-container'>
                                    <PostButton name='Post' color='yellow'/>
                                </div>
                                <div className='button-container'>
                                    <PostButton name='Discard' color='#434242'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPost;