import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png';
import user_icon from '../../assets/user_icon.svg';
import facebook from '../../assets/Facebook.png';
import whatsapp from '../../assets/WhatsApp.png';
import linkedin from '../../assets/LinkedIn.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="Logo" />
          <p>
            I'm a Frontend Developer with over two years of hands-on experience
            crafting responsive, user-centric web interfaces. I've had the
            opportunity to collaborate with top-tier organizations, where I’ve
            contributed to impactful digital solutions that drive growth and
            elevate user experience.
          </p>
        </div>

        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="user icon" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2025 Ezema Henry Chinaza. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <a
            href="https://www.facebook.com/share/1JjQzsPQZP/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://wa.me/+2349157061270" target="_blank" rel="noreferrer">
            <img src={whatsapp} alt="WhatsApp" />
          </a>
          <a
            href="https://www.linkedin.com/in/henry-chinaza-01965b334"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
