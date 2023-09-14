import React from 'react'
import Style from './About.module.css'
export default function () {
  return <>
    <section className={`${Style.Sbg} d-flex justify-content-center align-items-center `}>
    <div className=" w-75 text-center pt-4" style={{color : "white"}}>
      <h1  className="text-uppercase mb-3 fs-2 fw-bolder">ABOUT COMPONENT</h1>
    <div  className="d-flex  align-items-center justify-content-center mt-4 mb-4">
      <div  className={`${Style.line} me-3` }  ></div>
        <i  className="fa-solid fa-star"></i>
        <div  className={`${Style.line} ms-3`}></div>
      </div>
      <div className='row'>
        <div className="col-md-6">
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional
            SASS stylesheets for easy customization.</p>
        </div>
        <div className="col-md-6">
        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional 
            SASS stylesheets for easy customization.</p>
        </div>
      </div>
      </div>
    </section>
   
    
    </>
  
}
