import React from 'react';

const About = () => {
  return (
    <>
      <div className='about bg-dark' id='about'>
        <div className="sobre">
          <h1 className="miHisto">Mi Experiencia
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              />
            </svg>
          </h1>
        </div>

        <div className="experiencia-box">
          <div className="experiencia-container">
            <div className="experiencia-section">
              <h2>Experiencia 1</h2>
              <p>Aquí puedes escribir detalles sobre tu primera experiencia.</p>
            </div>
            <div className="experiencia-section">
              <h2>Experiencia 2</h2>
              <p>Aquí puedes escribir detalles sobre tu segunda experiencia.</p>
            </div>
            <div className="experiencia-section">
              <h2>Experiencia 3</h2>
              <p>Aquí puedes escribir detalles sobre tu tercera experiencia.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;



