import React from 'react';
import{BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';
import NavBar from './components/NavBar'
import Footer from "./components/Footer"



function App() {
  return (
    <>
    
    <Router>  
    <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
        <Footer/>
    </Router>
    
    </>
  );
}

export default App;

