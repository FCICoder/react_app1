import React, { useEffect } from 'react'
import Style from './Portofolio.module.css'
import img1 from '../assets/poert1.png'
import img2 from '../assets/port2.png'
import img3 from '../assets/port3.png'

export default function Portofolio() {

  useEffect(() => {
    // console.log(layer);
    // console.log("did mount");
    return () => {
      console.log("will unmount");   
    }

  },[])
 
let img = document.getElementById("Image_ss")
let layer = document.getElementsByClassName("laYer")[0]
function info (e){
  layer.classList.add('d-flex')
  img.classList.replace('d-none','d-flex')
  // console.log(e.target.offsetParent.children[0].getAttribute("src"));
  img.setAttribute("src", e.target.offsetParent.children[0].getAttribute("src"));
}
function closeBtn(){
  img.classList.replace('d-flex','d-none')
  layer.classList.remove('d-flex');
}  

document.addEventListener('keyup',function(e){
  if(e.key == 'Escape'){
  closeBtn();
  }
  })

  return <>
    <section className={`${Style.text} mt-5`}>
    <div className=" text-center pt-4" style={{color : "white"}}>
      <h2  className={`text-uppercase mb-3 fs-1 fw-bolder ${Style.text}`}>PORTFOLIO COMPONENT</h2>
    <div  className="d-flex  align-items-center justify-content-center mt-4 mb-4">
      <div  className={`${Style.line} me-3` }  ></div>
        <i  className={`fa-solid fa-star ${Style.text}` }></i>
        <div  className={`${Style.line} ms-3` }></div>
      </div>
      </div>

  
    </section>
    <div className={`container mb-5 ${Style.Sec}`}>
    <div className={`row g-5  `}>
        <div className={` col-md-4 position-relative `} >
          
              <img src={img1}   className={`sp_img img-fluid ${Style.image}   `} alt="..." />
              <div onClick={info} className={`d-flex align-items-center ${Style.sp_img}`}>
                <i   className={`text-white fa-solid fa-plus fa-6x `}></i>
              </div>
        </div>

        <div className={`  col-md-4 position-relative `}>
            <img src={img2}   className={`img-fluid ${Style.image}`} alt="..." />
            <div onClick={info}  className={`d-flex align-items-center ${Style.sp_img}`}>
               <i  className={` position-absolute text-white fa-solid fa-plus fa-6x `}></i>
            </div>
        </div>

        <div className={`  col-md-4 position-relative `}>
            <img src={img3}   className={`img-fluid ${Style.image}`} alt="..." />
            <div onClick={info}  className={`d-flex align-items-center ${Style.sp_img}`}>
              <i className={` position-absolute text-white fa-solid fa-plus fa-6x `}></i>
            </div>
        </div>

        <div className={`  col-md-4 position-relative `}>
            <img src={img1}  className={`img-fluid ${Style.image}`} alt="..." />
            <div onClick={info}  className={`d-flex align-items-center ${Style.sp_img}`}>
               <i className={` position-absolute text-white fa-solid fa-plus fa-6x `}></i>
            </div>
        </div>

        <div className={`  col-md-4 position-relative `}>
            <img src={img2}  className={`img-fluid ${Style.image}`} alt="..." />
            <div onClick={info} className={`d-flex align-items-center ${Style.sp_img}`}>
                <i className={` position-absolute text-white fa-solid fa-plus fa-6x `}></i>
            </div>
        </div>
        <div className={`  col-md-4 position-relative `}>
            <img src={img3}  className={`img-fluid ${Style.image}`} alt="..." />
            <div onClick={info} className={`d-flex align-items-center ${Style.sp_img}`}>
                 <i className={` position-absolute text-white fa-solid fa-plus fa-6x `}></i>
            </div>
        </div>
    </div>
    </div>

    <div id='fixedBox' >
        <div  className={`${Style.layer} laYer` }  onClick={closeBtn} >
          <img id='Image_ss' src='' className={`  d-none ${Style.pic}`} alt="...." />
        </div>
    </div>
 
    </>
}
