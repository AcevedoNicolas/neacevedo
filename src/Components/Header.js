import React from "react";
import mifoto from '../Img/mia.jpg';
import { left } from "@popperjs/core";




const Header = () => {

  return (
    <div className="header-wraper">
      <div className="texto-izquierdo">
        <h2>Hola, soy</h2>
        <h1>Acevedo Nicolas</h1>
        <p>Desarrollador Web  </p>
        <a href="/pdfs/AcevedoNicolasCV.pdf" download>
          <button className="btn btn-danger" style={{ fontSize: "30px" , marginLeft: "40%"}}>Descargar CV</button>
        </a>
        {/* Aquí puedes agregar más información sobre ti, como habilidades, experiencia, etc. */}
      </div>
      <div className="mi-foto">
        <img src={mifoto} alt="Mi Foto" />
      </div>
    </div>
  )
}

export default Header