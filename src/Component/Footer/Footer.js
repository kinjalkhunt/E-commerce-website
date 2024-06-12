import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <p>&copy; 2024 Weetech. All rights reserved.</p>
        <div className="footer-links">
          <div className="footer-column">
            <p>IT Services</p>
            <ul>
              <li><Link to="/services/mobile-app-development">Mobile App Development</Link></li>
              <li><Link to="/services/web-development">Web Development</Link></li>
              <li><Link to="/services/seo">SEO</Link></li>
              <li><Link to="/services/quality-assurance">Quality Assurance</Link></li>
              <li><Link to="/services/digital-marketing">Digital Marketing</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <p>Company</p>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// import React from 'react';
// import './Footer.css'; // Import your CSS file for styling if needed
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <p>&copy; 2024 Your Company. All rights reserved.</p>
//         <ul>
//           <li>About Us</li>
//           <li>Contact</li>
//           <li>Privacy Policy</li> 
//           <li>Terms of Service</li>
//         </ul>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
