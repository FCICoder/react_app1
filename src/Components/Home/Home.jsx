import React from 'react'
import img from '../assets/avataaars.svg'
import '@fortawesome/fontawesome-free'
import Style from './Home.module.css'
export default function Home() {
  return <>
  <section className={` ${Style.Sbg}`}>
  <div className='row d-flex  justify-content-center '>
    <div className='col-12 w-25 text-center'>
    <img src={img}  className='w-75'  alt="" />
    </div>
    <div className=" text-center pt-4" style={{color : "white"}}>
      <h2  className="text-uppercase mb-3 fs-2 fw-bolder">start Framework</h2>
    <div  className="d-flex  align-items-center justify-content-center mt-4 mb-4">
      <div  className={`${Style.line} me-3` }  ></div>
        <i  className="fa-solid fa-star"></i>
        <div  className={`${Style.line} ms-3` }></div>
      </div>
      <div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
      </div>
  </div>
  </section>
  </>
}
