import React from 'react';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className="bg-light-brown py-4">
      <div className="flex justify-between items-center container mx-auto px-4">
        {/* Logo à gauche */}
        <img src={logo} alt="logo" className="h-16 w-16" />

        {/* Section Localisation et Contact à droite, encore plus à droite avec ml-auto */}
        <div className="flex flex-row items-end ml-auto gap-8">
          <div>
            <h3 className="font-bold text-lg text-dark-brown">Localisation</h3>
            <p className='text-paragraph'>Beaune et alentours</p>
          </div>
          <div>
            <h3 className="font-bold text-lg text-dark-brown">Contact</h3>
            <p>
              <a href="mailto:marion.vincenzi14@gmail.com" className="text-paragraph hover:underline">
                marion.vincenzi14@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
