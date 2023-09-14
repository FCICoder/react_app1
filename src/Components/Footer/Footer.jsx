import React from 'react'
import Style from './Footer.module.css'
export default function Footer() {
  return <>
    <section className={`${Style.bground}  text-light`}>
     <div className='container text-center'>
     <div className="row">
      <div className='col-md-4'>
        <h3>Location</h3>
        <p className='mb-3'>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
      <div className='col-md-4'>
        <h3>AROUND THE WEB</h3>
        <div className="icons">
          <i  className={`fa-brands fa-facebook mx-1 ${Style.icon}`}></i>
          <i  className={`fa-brands fa-twitter mx-1 ${Style.icon}`}></i>
          <i  className={`fa-brands fa-linkedin-in mx-1 ${Style.icon}`}></i>
          <i  className={`fa-solid fa-globe mx-1 ${Style.icon}`}></i>
        </div>
      </div>
      <div className='col-md-4'>
        <h3>ABOUT FREELANCER</h3>
        <p className='mb-3'>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
     </div>
     </div>
    </section>
    
    <div className={` text-light d-flex align-items-center justify-content-center ${Style.fbg}`} > Copyright © Your Website 2021 </div>

  </>
}
