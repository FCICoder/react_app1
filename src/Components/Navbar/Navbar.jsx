import React from "react";
import { Link } from "react-router-dom";
import Style from'./Navbar.module.css'
export default function Navbar() {
  return (
    <>

    
      <nav  className={`navbar navbar-expand-lg fixed-top ${Style.nav_bg} `}>
        <div  className="container">
          <Link   routerlink="/" className="navbar-brand text-white text-uppercase fw-bolder fs-2"
            href="#/">
            Start Framework{" "}
          </Link>
          <button
            
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler" >
            <span  className="navbar-toggler-icon"></span>
          </button>
          <div
            
            id="navbarSupportedContent"
            className="collapse navbar-collapse">
            <ul  className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li  className="nav-item me-3">
                <Link routerlinkactive="active rounded-3" 
                  routerlink="about"
                  className={` nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 ${Style.link}`}
                  style={{width: "fit-content"}}
                  to="/about">
                  about
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link
                 
                  routerlinkactive="active rounded-3"
                  routerlink="portfolio"
                  className={`nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 ${Style.link}`}
                  style={{width: "fit-content"}}
                  to="/portfolio">
                  portfolio
                </Link>
              </li>
              <li  className="nav-item me-3">
                <Link
                  
                  routerlinkactive="active rounded-3"
                  routerlink="contact"
                  className={`nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2 ${Style.link}`}
                  style={{width: "fit-content"}}
                  
                  to="/contact"
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}
