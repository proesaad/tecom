import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    
    
    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="bars">
            <ul className="skills">{skills}</ul>
          </div>
          
        </div>
        <div>
        <p style={{padding:"40px"}} >
          I also have a basic understanding of many other programming languages , libraries & frameworks  like : 
          Go , Ruby , R , C# , jQuery , PHP , Bootstrap , Tailwind , C++
        </p>
        <h6 style={{marginLeft:"40px"}} >Languages : </h6> <ul style={{listStyleType:"disc",marginLeft:"70px"}} ><li>English</li> <li>Arabic</li>  <li> French</li></ul>
      </div>
      </div>
      
    </section>
  );
};

export default Resume;
