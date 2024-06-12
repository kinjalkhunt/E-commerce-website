import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import homeimg from '../Assets/Images/imgee/homeimg.jpg';
import mobileApp from '../Assets/Images/imgee/mobileApp.png';
import webdev from '../Assets/Images/imgee/webdev.png';
import seodigital from '../Assets/Images/imgee/seodigital.png';

const Home = () => {
    return (
        <div className="home">
            <header className="hero" style={{backgroundColor:'black'}}>
                    <h1>Welcome to Weetech</h1>
                    <p>Your one-stop solution for IT services.</p>
                
                <div className='homes'>                
                    <img className='homeimg' src={homeimg} alt="e-commerce" />
                </div>
                <Link to="/contact" className="cta-button">Contact Us</Link>
                {/* <Link to="/Services" className="cta-button">Our Services</Link> */}

                
            </header>
            <section className='features'>
                <p>We are Committed to <br />serve you the <br />best Quality Within time.</p>

                <div className='maindiv'>
                    <div className='feature'>
                        <img src={mobileApp} alt='mobile app' />
                        <h2>Mobile App Development</h2>
                        <p>Build high-quality mobile applications.</p>
                    </div>

                    <div className='feature'>
                        <img src={webdev} alt='web development' />
                        <h2>Web Development</h2>
                        <p>Create responsive and dynamic websites.</p>
                    </div>
                    <div className='feature'>
                        <img src={seodigital} alt='SEO and digital marketing' />
                        <h2>SEO & Digital Marketing</h2>
                        <p>Optimize your website for search engines.</p>
                        <p>Boost your business with our marketing strategies.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
