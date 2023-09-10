import React from "react";
import mifoto from '../../Img/mia.jpg'
import '../Header/Header.css'

const Header = () => {
  return (
    <div className="header-wrapper">
    <div className="mi-foto">
      <img src={mifoto} alt="Mi Foto" />
    </div>
    <div className="texto-izquierdo">
      <h2>Hola, soy</h2>
      <h1>Nicolas Acevedo</h1>
      <p>Desarrollador .NET</p>
      <a href="/pdfs/AcevedoNicolasCV.pdf" download>
        <button
          className="btn btn-danger"
          style={{
            fontSize: "20px",
            marginLeft: "10%",
            width: "90%",
          }}
        >
          Descargar CV
        </button>
      </a>
      {/* Aquí puedes agregar más información sobre ti, como habilidades, experiencia, etc. */}
    </div>

  </div>

  )
}

export default Header