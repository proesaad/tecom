import React from "react";
const Testimonials = ({ data }) => {
function changeBackground(e) {
    e.target.style.color = 'red';
  }
  function changeBackgroun(e) {
    e.target.style.color = '#11ABB0';
  }

  if (data) {
    var testimonials = data.testimonials.map(function (testimonials) {
      
      return (
        <div key={testimonials.image} className="columns portfolio-item">
          
            
              
              
              <a href={testimonials.url} target="_blank" rel="noreferrer"  >
              <img style={{height:"60px",width:"60px"}} alt=" "src={testimonials.image} /></a>
          
       

        </div>
      );
    });
  }
  
  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <p>
            <h4 style={{color:"grey",marginTop:"-40px",marginBottom:"50px"}} >Our social links</h4>
          </p>

          <div 
            id="portfolio-wrapper"
            
            style={{justifyContent:"center",display:"flex",justifyContent:"space-evenly",flexDirection:"row"}}
            
          >
            {testimonials}
            <dir>
            <a href="https://www.tiktok.com/@tecom_aui" target="_blank" rel="noreferrer"  >
              <img style={{height:"60px",width:"60px",marginTop:"-13px",marginRight:"20px",marginLeft:"-5px"}} alt=" "src="images/tiktok-icon-black-1-logo-svgrepo-com.svg" /></a>
            </dir>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
