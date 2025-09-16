import React from 'react' 
import './Mywork.css' 
import theme from '../../assets/theme_pattern.svg' 
import mywork from '../../assets/mywork.png' 
import mywork1 from '../../assets/mywork1.png' 
import mywork2 from '../../assets/mywork2.png' 
import mywork3 from '../../assets/mywork3.png' 
import mywork4 from '../../assets/mywork4.png' 
import mywork5 from '../../assets/mywork5.png' 
const Mywork = () => { 
    return ( 
    <div id='work' className='mywork'>
         <div className="mywork-title">
             <h1>My Latest Work</h1>
              <img src={theme} alt="" /> 
              </div> <div className="mywork-container"> 
                <div className="mywork-data">
                     <img src={mywork} alt="" className='myw'/>
                      </div> <div className="mywork-data"> 
                        <img src={mywork1} alt="" className='myw' />
                         </div> <div className="mywork-data"> 
                            <img src={mywork2} alt="" className='myw'/>
                             </div> <div className="mywork-data"> 
                                <img src={mywork3} alt="" className='myw'/>
                                 </div> <div className="mywork-data">
                                     <img src={mywork4} alt="" className='myw'/>
                                      </div> <div className="mywork-data"> 
                                        <img src={mywork5} alt="" className='myw'/>
                                         </div> </div> </div> 
                                         )
                                         } 
                                         export default Mywork