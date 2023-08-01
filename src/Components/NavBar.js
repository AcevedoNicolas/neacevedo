
import React, { useState, useEffect } from 'react';
import { Link } from  'react-router-dom'
import Logo from '../Img/NA.png';

function NavBar() {
    const [collapsed, setCollapsed] = useState(true);
    const [navbarColor, setNavbarColor] = useState("transparent");

    useEffect(() => {
        const changeNavbarColor = () => {
            if (window.scrollY > 300) {
                setNavbarColor("dark");
            } else {
                setNavbarColor("black");
            }
        };

        window.addEventListener("scroll", changeNavbarColor);
        return () => {
            window.removeEventListener("scroll", changeNavbarColor);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-${navbarColor} h-20 fixed-top`} id='nLogo'>
            <div className="container">
             <a href="/">
        <img className="logo" src={Logo} alt='logo...' />
      </a>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setCollapsed(!collapsed)}
            >
                {collapsed ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="2rem"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="2rem"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                )}
            </button>

            <div className={`collapse navbar-collapse bg-${navbarColor}`} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="*">
                            Inicio <span className="sr-only"></span>
                        </a>
                    </li>
                    <li className="nav-item">
                  
                     <a className="nav-link" href="#about">
                            Acerca de <span className="sr-only"></span>
                        </a>

                        
                  
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">
                            Contactame
                        </a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    );
}

export default NavBar;
