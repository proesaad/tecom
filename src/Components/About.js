import React from "react";

const About = ({ data }) => {
  if (data) {
    
    var email = data.email;
  }
  function changeBackground(e) {
    e.target.style.color = 'red';
  }
  function changeBackgroun(e) {
    e.target.style.color = '#11ABB0';
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          
        </div>
        <div className="nine columns main-col">
          <h2>About Us</h2>
          
          <p>TeCom is a club at Al Akhawain University that specializes in everything related to science, engineering, and, as the name implies, technological topics.
TeCom cares mostly about the passion of the members, since it does not matter whether they have previous knowledge in the field of technology.
Our main policy is that you do not need knowledge to acquire knowledge. The 
                skills we aim to learn as group of Tech enthusiasts will enabel us to create <a onMouseEnter={changeBackground}
                 onMouseLeave={changeBackgroun}  className="smoothscroll"  
                 style={{color:"#11ABB0"}}  href="#portfolio">projects</a> . </p>
          <div className="row">
            <div className="columns contact-details">
              <h2><a  onMouseEnter={changeBackground} onMouseLeave={changeBackgroun}  style={{color:"#11ABB0"}} className="smoothscroll" href="#contact">Contact Details</a></h2>
              <p className="address">
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
