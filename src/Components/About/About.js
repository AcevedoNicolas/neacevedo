import React from 'react';
import '../About/About.css'
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
       
        <h2 className='sobreMI'>Actualmente, me desempeño
            como desarrollador en la Armada Argentina.</h2>
        <div className="experiencia-container">
      <div className="experiencia-box">
        <div className="experiencia-section">
          
          <h2>Desarrollo y Soporte IT</h2>
          <h5>Experiencia en desarrollo y mantenimiento de sistemas .NET Core con Entity Framework y Microsoft SQL Server. Amplio conocimiento en C# con uso de MVC.</h5>
        </div>
      </div>
      <div className="experiencia-box">
        <div className="experiencia-section">
          <h2>Mantenimiento de aplicaciones</h2>
          <h5>Experiencia en soporte de aplicaciones enfocado en mantenimiento y resolución de problemas. Habilidad en el testeo funcional del sistema para garantizar la calidad del software y detectar errores.</h5>
        </div>
      </div>
      <div className="experiencia-box">
        <div className="experiencia-section">
          <h2>Herramientas de desarrollo</h2>
          <h5>experiencia en desarrollo web utilizando React.js, Angular.js y Node.js. También cuento con experiencia en el desarrollo de videojuegos con Unity C#</h5>
        </div>
      </div>
    </div>
    
    
     <div className='edu_curso' >Educacion & Cursos
              <svg xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" 
              strokeWidth={2.5}
              stroke="currentColor" 
              >
            <path strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
    </div>
    <div className='columns-container'>
            <div className='column'>
                      <h3> <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" viewBox="0 0 24 24" 
                      strokeWidth={1.5} stroke="currentColor"  >
                      <path strokeLinecap="round" 
                      strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                        Tecnico Superior informatico
                      </h3>
                      <p>
                      <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor">
                      <path strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                      Punta Alta - Escuela de Suboficiales de la Armada
                      
                    <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" viewBox="0 0 24 24" 
                      strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>
                    Feb 2016 - Dic 2018
                      </p>

                      <h3> <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" viewBox="0 0 24 24" 
                      stroke-width="1.5" 
                      stroke="currentColor">
                        <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>

                        Bachiller en Comunicaciones
                      </h3>
                      <p>
                      <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor">
                      <path strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                      Concordia Entre rios - Escuela Jorge Luis Borges N° 6
                      
                    <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" viewBox="0 0 24 24" 
                      strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>
                    Feb 2010 - Dic 2015
                      </p>
                     
                    </div>
                <div className='column'>
                      
                      <h3> <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" viewBox="0 0 24 24" 
                      stroke-width="1.5" 
                      stroke="currentColor">
                        <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                      Professional Full-Stack Developer
                      </h3>
                      <p>
                      <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor">
                      <path strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                      Buenos Aires - centerelearning UTN BA
                      
                      <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke-width="1.5" 
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                      195 HS
                      </p>

                      <h3> <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" viewBox="0 0 24 24" 
                      stroke-width="1.5" 
                      stroke="currentColor">
                        <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                      Experto Universitario en Programación de Video Juegos con Unity
                      </h3>
                      <p>
                      <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor">
                      <path strokeLinecap="round" 
                      strokeLinejoin="round" 
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                    </svg>
                      Buenos Aires - centerelearning UTN BA
                      
                      <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke-width="1.5" 
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                      210 HS
                      </p>
                      
                 </div>
            </div>
</div>
      </>
  );
};

export default About;



