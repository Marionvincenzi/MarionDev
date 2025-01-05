import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import Services from './components/Services';
import Package from './components/Package';
import Subscription from './components/Subscription'; 

const App = () => {
  return (
    <div>
      <Header />
      
      
      <Routes>
        <Route path="/" element={
          <div>
            <AboutPage /> 
            <Services /> 
            <Package /> 
            <Subscription /> 
          </div>
        } />
        
        
        <Route path="/services" element={<Services />} />
        <Route path="/packages" element={<Package />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
      
      <Footer />
    </div>
  );
};

export default App;
