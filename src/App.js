import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React from 'react';

import NavBar from './Components/Navbar/NavBar';
import Portfolio from './Components/PortFolio/Portfolio';
import  Contact  from './Components/Contact/Contact';
import About from './Components/About/About';
import Header from './Components/Header/Header';


function App() {
  return (
    <div className="App">
       
        <NavBar />
        <Header />
        <About />
        <Portfolio  />  
        <Contact />
       
     
      
    </div>
  );
}

export default App;

