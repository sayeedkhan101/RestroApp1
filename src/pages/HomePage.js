import React, { useRef } from 'react';
import './HomePage.css'; // For styling the home page
import Header from '../components/Header'; // Import the Header component

const HomePage = () => {
  const pageContainerRef = useRef(null);
  
  return (
    <div className="home-container" id="homepage-container"  ref={pageContainerRef}>
      <Header scrollContainer={pageContainerRef.current} />
      <section className="hero">
        <div className="hero-overlay">
        <h1>Welcome to <span className="highlight">Rozana</span> Restaurant and Hookah Lounge</h1>

          <video
            src='/videos/Moon Hookah Lounge.mp4'
            className="background-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      </section>
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          Rozana offers a blend of traditional Middle Eastern dishes with a modern twist.
          We bring the flavors of the Middle East right to your table.
        </p>
        <div className="image-container">
          <img src="/images/2023-03-04.jpg" className="left-image" />
          <div className="right-images">
            <img src="/images/2021-07-29.jpg" className="top-image" />
            <img src="/images/2024-08-03.jpg" className="bottom-image" />
          </div>
        </div>
      </section>
      
      <section className="features-section">
        <div className="hookah-lounge">
          <h3>Hookah Lounge Time</h3>
          <p>OUR HOURS</p>
          <p>12 PM – 1AM  Sunday – Thursday</p>
          <p>12 PM – 2AM Friday – Saturday</p>
          <p>4800 Lawrenceville Hwy A1, Lilburn, GA 30047</p>
          <p>(678) 691-7201</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
