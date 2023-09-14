import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from '../Home/Home'
export default function Layout() {
  return <>
        <Navbar/>    
            <Outlet></Outlet>    
       <Footer/>
</>
}
