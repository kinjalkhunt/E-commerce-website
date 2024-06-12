import React from 'react';
import './Blog.css';
import mobilephoto from '../Assets/Images/imgee/mobilephoto.jpg';
import bestcloud from '../Assets/Images/imgee/bestcloud.jpg';
import automationphoto from '../Assets/Images/imgee/automationphoto.jpg';
import digitalmarketing from '../Assets/Images/imgee/digitalmarketing.jpg';
import webdevlopment from '../Assets/Images/imgee/webdevlopment.jpg';

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog-item">
        <div className="image-container">
          <img src={mobilephoto} alt="Mobile Photo" />
        </div>
        <div className="feature">
          <p>ARTIFICIAL INTELLIGENCE</p>
          <h2>"Call Arc" Latest Feature of Arc Search that Lets You Ask Questions While on Call</h2>
          <h5>The Browser Company’s Arc Search for iPhones has received a fresh upgrade. The brand has added an intriguing new function known as “Call Arc” to the Arc Search. According to …</h5>
        </div>
      </div>
      <hr />
      <div className="blog-item">
        <div className="image-container">
          <img src={bestcloud} alt="Best Cloud" />
        </div>
        <div className="feature">
          <p>SOFTWARE / TECH</p>
          <h2>7 Best Cloud Hosting Services in 2024</h2>
          <h5>Cloud hosting services will have changed dramatically by 2024, providing companies with previously unheard-of levels of scalability, security, and flexibility. Choosing the ideal hosting provider becomes essential for maximizing performance …</h5>
        </div>
      </div>
      <hr />
      <div className="blog-item">
        <div className="image-container">
          <img src={automationphoto} alt="Automation Photo" />
        </div>
        <div className="feature">
          <p>QA TESTING</p>
          <h2>10 Best Automation Testing Software for Today’s Testers</h2>
          <h5>To guarantee the effectiveness and dependability of their operations in the hectic development environment of today, testers need strong automated software testing tools. In addition to improving accuracy, lowering manual …</h5>
        </div>
      </div>
      <hr />
      <div className="blog-item">
        <div className="image-container">
          <img src={digitalmarketing} alt="Digital Marketing" />
        </div>
        <div className="feature">
          <p>DIGITAL MARKETING</p>
          <h2>7 Best LinkedIn Alternatives for Professional Networking in 2024</h2>
          <h5>In the realm of technological advancement, LinkedIn has served the world in the best way. This platform, actually a professional platform, has turned out to be greatly useful for people …</h5>
        </div>
      </div>
      <hr />
      <div className="blog-item">
        <div className="image-container">
          <img src={webdevlopment} alt="Web Development" />
        </div>
        <div className="feature">
          <p>WEB DEVELOPMENT</p>
          <h2>Roles and Responsibilities of Full Stack Developers: Unveiling the Versatility</h2>
          <h5>Among the many builders of digital innovation in the ever-changing tech scene of today are Full Stack Developers. Their skill covers the whole range of web development, fusing backend expertise …</h5>
        </div>
      </div>
    </div>
  );
};

export default Blog;
