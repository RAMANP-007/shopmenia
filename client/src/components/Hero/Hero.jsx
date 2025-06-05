import React from 'react';
import './hero.css';

function Hero() {
    return (
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div className="hero-text">
                    <div className="hero-hand-icon">
                        <p>NEW</p>
                        <img src="/assets/hand_icon.png" alt="Hand Icon" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-button">
                    <span>Latest Collections</span>
                    <img src="/assets/arrow.png" alt="Arrow" />
                </div>
            </div>
            <div className="hero-right">
                <img src="/assets/hero_image.png" alt="Hero" />
            </div>
        </div>
    );
}

export default Hero;
