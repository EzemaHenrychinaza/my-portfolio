import React from 'react';

import './Services.css';

import theme from '../../assets/theme_pattern.svg';
import react_img from '../../assets/reactjs_img.png';
import graphics_img from '../../assets/graphics_img.png';
import microsoft_img from '../../assets/microsoft_img.png';
import sales_img from '../../assets/sales_img.png';
import frontend_img from '../../assets/frontend_img.png';
import social_img from '../../assets/social_img.png';

const Services = () => {
  return (
    <div className='services'>
      <div className="services-title">
        <h1>Core Competencies</h1>
        <img src={theme} alt="" />
      </div>

      <div className="services-container">
        <div className="services-data">
          <img src={react_img} alt="" className='service' />
          <h1>React Js</h1>
          <p>I build dynamic web applications using React JS, delivering smooth user experiences and scalable front-end architecture.</p>
        </div>

        <div id='services' className="services-data">
          <img src={frontend_img} alt="" className='service' />
          <h1>Frontend Development</h1>
          <p>I craft responsive, accessible, and visually engaging interfaces using modern web technologies like HTML, CSS, and JavaScript.</p>
        </div>

        <div className="services-data">
          <img src={graphics_img} alt="" className='service' />
          <h1>Graphics Design</h1>
          <p>I create compelling visual assets—from logos to social media creatives—that communicate brand identity and captivate audiences.</p>
        </div>

        <div className="services-data">
          <img src={microsoft_img} alt="" className='service' />
          <h1>Microsoft Office</h1>
          <p>I streamline workflows and enhance productivity using Microsoft Office tools like Excel, Word, and PowerPoint for data analysis, documentation, and presentations.</p>
        </div>

        <div className="services-data">
          <img src={sales_img} alt="" className='service' />
          <h1>Sales Analyst</h1>
          <p>I analyze sales data to uncover trends, optimize strategies, and support decision-making that drives revenue growth.</p>
        </div>

        <div className="services-data">
          <img src={social_img} alt="" className='service' />
          <h1>Social Media Manager</h1>
          <p>I manage and grow online presence across platforms by creating engaging content, analyzing performance, and building community around brands.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
