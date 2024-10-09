import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <header className="hero">
            <div className="hero-content">
                <h1>STEM Fellowship Career Center</h1>
                <p>We’re connecting students, universities, and BigTech.</p>
                <div className="hero-buttons">
                    <button className="btn primary" onClick={() => alert('Post a Job/Education')}>
                        Post a Job/Education
                    </button>
                    <button className="btn secondary" onClick={() => alert('Search a Job/Education')}>
                        Search a Job/Education
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Hero;
