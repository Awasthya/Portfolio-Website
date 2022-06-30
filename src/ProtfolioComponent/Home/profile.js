import React from 'react';
import Typical from 'react-typical';
import './profile.css'
const profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
            <div className="profile-details">
              
                <div classname="profile-details-name">
                    <span className="Primary-text">{" "}
                    <h1>
                      Hello, I am <span className='highlighted-text'>Amit Awasthi</span>
                    </h1>
                  </span>
              
            </div>
                <div classname="profile-details-role">
                    <span className="Primary-text">{" "}
                    <h1 className='typical'>
                        <Typical 
                        loop={Infinity}
                        steps ={[
                          "Amit Awasthi 🥇",
                          1000,
                          "Programmer 🎭",
                          1000,
                          "Full Stack Web Devloper 🖥️",
                          1000,
                          "Portfolio :older_woman:",
                          1000,
                        ]}
                        />    
                    </h1>
                  </span>
                  <span className="profile-role-tagline">
                        Know an Full stack devlopment and C++ also an big problem solver!!!
                  </span>
                </div>
                
                <div className="profile-options">
                    <button className='btn primary-btn'>Hire Me {" "}</button>
               
                <a href="Amit_Resume.pdf" download="AmitResume.pdf">
                  <button className="btn highlighted-btn">Get Resume</button>
                  </a>
                </div>
                <div className='colz'>
                  <div className='colz-icon'>
                    <a href="#">
                        <i className='fa fa-facebook-square'></i>
                    </a>    
                    <a href="#">
                        <i className='fa fa-google-plus-square'></i>
                    </a>    
                    <a href="https://www.instagram.com/amitawasthiii3/">
                        <i className='fa fa-instagram'></i>
                    </a>    
                    <a href="https://www.linkedin.com/in/amit-awasthi-83a8121b4/">
                        <i className='fa fa-linkedin'></i>
                    </a>   
                  </div>
                </div>
            </div>
            
            <div className='profile-picture'>
              <div className="profile-picture-background">

              </div>
            </div>
      </div>
    </div>
  )
}

export default profile
