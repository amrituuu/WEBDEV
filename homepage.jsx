import React, { useEffect } from 'react';
import './Homepage.css';

const Homepage = () => {
    useEffect(() => {
        // Add some dynamic animations on component mount
        const heroText = document.querySelector('.hero-content h2');
        heroText.classList.add('animate-hero-text');
    }, []);

    return (
        <div className="homepage">
            <header className="header">
                <h1 className="animate-header">Byte Branding</h1>
                <nav className="nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>
            </header>
            <section className="hero" id="home">
                <div className="hero-content">
                    <h2>Welcome to Byte Branding</h2>
                    <p>Your Partner in Digital Success</p>
                </div>
            </section>
            <footer className="footer">
                <p>&copy; 2024 Byte Branding. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Homepage;