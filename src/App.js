import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar';
import React from 'react';

import Header from './Components/Header';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import  Contact  from './Components/Contact';

function App() {
  return (
    <div className="App">
    
        <NavBar />
        <Header />
        <About />
        <Portfolio />
        <Contact />
     
      
    </div>
  );
}

export default App;

