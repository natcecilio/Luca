import React from "react";
import "./Navbar.css";
import {useTheme} from '../../context/Theme';

export default function Navbar ({pageLink , pageName}) {

  
  const { theme } = useTheme();

  return (
    <nav className={`NavbarItems ${theme} `}>
      <div className={`navbar-logo ${theme} `}>
        <a href="/">
           <img src={theme==="light-theme" ? "images/luca-logo-pt.png" : "images/luca-logo-branco.png" } alt="Luca" width="170vw" height="auto"/>
        </a>
      </div>
      
      <ul className= {`nav-menu ${theme}`}>
            <li>
              <a href={pageLink}>
                {pageName}
              </a>
            </li>
      </ul>
    </nav>
  );

}



