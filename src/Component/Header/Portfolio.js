// src/Component/Portfolio.js
import React from 'react';
import './Portfolio.css';
// import project1 from '../Assets/Images/portfolio/project1.png';
// import project2 from '../Assets/Images/portfolio/project2.png';
// import project3 from '../Assets/Images/portfolio/project3.png';

const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className='header'>
            <header className="hero">
                <h1>Our Portfolio</h1>
                <p>Take a look at some of our recent projects.</p>
            </header>
            </div>
            <section className="portfolio-list">
                <div className="portfolio-item">
                    {/* <img src={project1} alt="Project 1" /> */}
                    <h2>Project 1</h2>
                    <p>Description of Project 1.</p>
                </div>
                <div className="portfolio-item">
                    {/* <img src={project2} alt="Project 2" /> */}
                    <h2>Project 2</h2>
                    <p>Description of Project 2.</p>
                </div>
                <div className="portfolio-item">
                    {/* <img src={project3} alt="Project 3" /> */}
                    <h2>Project 3</h2>
                    <p>Description of Project 3.</p>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
