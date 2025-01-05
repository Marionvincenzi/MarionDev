import React from 'react';
import package1 from "../assets/package1.png";
import package2 from "../assets/package2.png";
import package3 from "../assets/package3.jpg";

const Package = () => {
  return (
    <div className="bg-light-brown py-12">
      <h2 className="text-3xl font-bold text-medium-brown text-center mb-32">
        Choisissez votre forfait
      </h2>
      <div className="flex flex-wrap justify-center gap-32">
        {/* Package 1 */}
        <div className="text-center">
          <div className="w-[457px] h-[275px] overflow-hidden mx-auto">
            <img
              src={package1}
              alt="Abonnement Bronze"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-medium-brown mt-4">Abonnement Bronze</h3>
          <p className="text-dark-brown">25€</p>
          <p className="text-brown">Tous les mois</p>
          <p className="text-paragraph mt-2">
            Accédez à tout moment à notre collection <br />
            toujours plus riche de cours, d'ateliers et de <br />
            contenus exclusifs. De nouvelles offres vous <br />
            attendent tous les mois.
          </p>
          <button className="bg-brown-small rounded-full text-white px-6 py-2 mt-4">
            S'inscrire
          </button>
        </div>

        {/* Packages suivants */}
        <div className="text-center">
          <div className="w-[457px] h-[275px] overflow-hidden mx-auto">
            <img
              src={package2}
              alt="Abonnement Silver"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-medium-brown mt-4">Abonnement Silver</h3>
          <p className="text-dark-brown">60€</p>
          <p className="text-brown">Tous les mois</p>
          <p className="text-paragraph mt-2">
            Accédez à tout moment à notre collection <br />
            toujours plus riche de cours, d'ateliers et de <br />
            contenus exclusifs. De nouvelles offres vous <br />
            attendent tous les mois.
          </p>
          <button className="bg-brown-small rounded-full text-white px-6 py-2 mt-4">
            S'inscrire
          </button>
        </div>

        <div className="text-center">
          <div className="w-[457px] h-[275px] overflow-hidden mx-auto">
            <img
              src={package3}
              alt="Abonnement Gold"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-medium-brown mt-4">Abonnement Gold</h3>
          <p className="text-dark-brown">100€</p>
          <p className="text-brown">Tous les mois</p>
          <p className="text-paragraph mt-2">
            Accédez à tout moment à notre collection <br />
            toujours plus riche de cours, d'ateliers et de <br />
            contenus exclusifs. De nouvelles offres vous <br />
            attendent tous les mois.
          </p>
          <button className="bg-brown-small rounded-full text-white px-6 py-2 mt-4">
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  );
};

export default Package;
