// src/Component/Services.js
import React from 'react';
import './Services.css';
import mobileApp from '../Assets/Images/imgee/mobileApp.png';
import webdev from '../Assets/Images/imgee/webdev.png';
import seodigital from '../Assets/Images/imgee/seodigital.png';

const Services=()=> {
    return (
        <>
        <div className="services">
            <div className='header'>
            <header className="hero">
                <h1>Our Services</h1>
                <p>We offer a wide range of IT services to meet your needs.</p>
            </header>
            </div>
            <section className="services-list">
                <div className="service-item">
                    <img src={mobileApp} alt="Mobile App Development" />
                    <h2>Mobile App Development</h2>
                    <p>We build high-quality mobile applications tailored to your requirements.</p>
                </div>
                <div className="service-item">
                    <img src={webdev} alt="Web Development" />
                    <h2>Web Development</h2>
                    <p>Create responsive, dynamic, and user-friendly websites with us.</p>
                </div>
                <div className="service-item">
                    <img src={seodigital} alt="SEO & Digital Marketing" />
                    <h2>SEO & Digital Marketing</h2>
                    <p>Optimize your website for search engines and boost your business with our marketing strategies.</p>
                </div>
            </section>
        </div>
        </>
    );
};

export default Services;
