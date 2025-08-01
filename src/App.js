import './App.scss';
import Home from './components/Home';
import { BrowserRouter as Router } from 'react-router-dom';  // ✅ Correct import
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";





function App() {
  useEffect(() => {
  AOS.init({
    duration: 800,
    once: true
  });
}, []);
  return (
     
      <Home />
    
  );
}

export default App;
