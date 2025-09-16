import './Hero.css';
import profile from '../../assets/profile.jpg';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile} alt="Profile" />
      <h1>
        <span>I'm Ezema Henry Chinaza,</span> frontend developer based in Lagos,
        Nigeria.
      </h1>
      <p>
        I am a frontend developer from Enugu State, Nigeria with 2 years of
        experience.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
