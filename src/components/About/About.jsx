import React from 'react'
import './About.css'
import theme from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'
const About = () => {
  return (
  <div id='about' className='about'> 
      <div className="about-title">
        <h1> About me</h1>
        <img src={theme} alt=''/>
      </div>
      <div className="about-section">
        <div className="about-left">
        <img src={profile_img} alt="" className='mymy'/>
        </div>
        <div className="about-right">
<div className="about-para">
    <p>I'm a Frontend Developer with over two years of hands-on experience crafting responsive, user-centric web interfaces. I've had the opportunity to collaborate with top-tier organizations, where I’ve contributed to impactful digital solutions that drive growth and elevate user experience. My work blends clean design with efficient code, and I thrive in environments that challenge me to push boundaries and innovate.</p>
    <p>Frontend development isn’t just my profession—it’s my craft. With every project, I bring not only technical expertise but a deep enthusiasm for creating seamless, engaging user experiences. My dedication shows in the details, from pixel-perfect layouts to intuitive interactions, and I thrive on turning ideas into elegant, functional interfaces that users love.</p>
</div>
<div className="about-skills">
    <div className="about-skill"> <p>HTML & CSS</p><hr style= {{width: "50%"}} /></div>
    <div className="about-skill"> <p>React Js</p><hr style= {{width: "70%"}} /></div>
    <div className="about-skill"> <p>JavaScript</p><hr style= {{width: "60%"}} /></div>
    <div className="about-skill"> <p>Microsoft Office</p><hr style= {{width: "50%"}} /></div>
</div>
        </div>
      </div>
       <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>50+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>20+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
       </div>
  </div>
  )
}
export default About