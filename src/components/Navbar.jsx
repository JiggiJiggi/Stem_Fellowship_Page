import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <img src="/src/assets/images/stem_logo.png" alt="STEM Fellowship Logo" className="logo" />
                </div>
                <ul className="navbar-links">
                    <li className="dropdown">
                        <a href="#" className="nav-link">Employers/Colleges</a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Post a Job</a></li>
                            <li><a href="#">My Account</a></li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="nav-link">Job Seekers/Students</a>
                        <ul className="dropdown-menu">
                            <li><a href="#">My Account</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Certificates/Diplomas/Degrees</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="navbar-button">
                    <button className="btn primary" onClick={() => alert('Post a Job/Education')}>
                        Post a Job/Education
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
