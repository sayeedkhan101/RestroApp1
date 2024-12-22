// Header.js
import React, { useEffect } from 'react';
import '../pages/HomePage.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const Header = () => {
    useEffect(() => {
        const header = document.querySelector('.header-section');
        const toggleClass = 'is-sticky';

        const handleScroll = () => {
            const currentScroll = window.pageYOffset; // Get the current scroll position
            if (currentScroll > 150) {
                header.classList.add(toggleClass); // Add sticky class
            } else {
                header.classList.remove(toggleClass); // Remove sticky class
            }
        };

        window.addEventListener('scroll', handleScroll); // Attach scroll event listener

        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup
        };
    }, []);

    return (
        <header className="header-section">
            <div className="logo">
                <img src='/images/cropped-Final-Rozana-2-255x225.png' alt="Rozana Logo" />
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><a href="#">Location</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
