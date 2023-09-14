import React from 'react'
import Style from './Contacts.module.css'
export default function Contacts() {
  return <>
     <section className={`${Style.text} mt-5`}>
    <div className=" text-center pt-4" style={{color : "white"}}>
      <h2  className={`text-uppercase mb-3 fs-1 fw-bolder ${Style.text}`}>contacts COMPONENT</h2>
    <div  className="d-flex  align-items-center justify-content-center mt-4 mb-4">
      <div  className={`${Style.line} me-3` }  ></div>
        <i  className={`fa-solid fa-star ${Style.text}` }></i>
        <div  className={`${Style.line} ms-3` }></div>
      </div>
      </div>

  
    </section>
  
    <form   action="" className="w-50 p-3 mx-auto mt-5 ng-pristine ng-valid ng-touched">
        <label  for="userName" className="position-relative top-0 __top">userName : </label>
        <input  id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
        
        <label  for="userAge" className="position-relative top-0 __top">userAge : </label>
        <input  id="userAge" type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
        
        <label  for="userEmail" className="position-relative top-0 __top">userEmail : </label>
        <input  id="userEmail" type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
        
        <label  for="userPassword" className="position-relative top-0 __top">userPassword : </label>
        <input  id="userPassword" type="text" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-pristine ng-valid ng-touched"/>
        
        <button  className="btn mt-4 text-white" style={{"background-color": "#1abc9c"}}> send Message </button>
    </form>
    </>
  
}
