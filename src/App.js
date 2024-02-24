import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './assets/css/style.css';
import './assets/css/locomotive-scroll.css'
import AnimatedCursor from 'react-animated-cursor';

function App() {
  return (
    <div className="App">
      {/* <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: '#C6FF00'
      }}
      outerStyle={{
        border: '3px solid #000000'
      }}
    /> */}
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
