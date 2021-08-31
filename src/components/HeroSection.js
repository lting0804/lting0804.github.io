import React from 'react'
import {Button} from './Button'
import './HeroSection.css'
import '../App.css'

function Herosection() {
    return (
        <div className='hero-container'>
            {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
            <h1>Header 1!</h1>
            <p>Point</p>
            <div className="hero-btns">
                <Button 
                    className='btns' 
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'> 
                Button 1
                </Button>
                <Button 
                    className='btns' 
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                Button 2 
                <i className='far fa-play-circle'/> 
                </Button>
            </div>
        </div>
    );
}

export default Herosection;
