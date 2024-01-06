import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './assets/css/style.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
