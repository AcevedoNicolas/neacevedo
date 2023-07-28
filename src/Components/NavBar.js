import React from 'react';
import Logo from '../Img/NA.png';
import { useState } from 'react';

//icons font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
    const [collapsed,setCollapsed] =  useState(true);
    return (
        
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-black h-50" id='nLogo'>
           
            <a className="navbar-brand" href="#"><img className="logo" src={Logo} alt=' logo...' /></a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setCollapsed(!collapsed)}>
            {collapsed ? (<svg xmlns="http://www.w3.org/2000/svg" height="2rem" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>): (<svg xmlns="http://www.w3.org/2000/svg"  height="2rem" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            )}
            

            </button>
            
            <div className="collapse navbar-collapse bg-black " id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto" >
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">about me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">how work</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>

            </div>
         
           
        </nav>
       
    )
}

export default NavBar