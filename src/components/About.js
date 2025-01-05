import React from 'react';
import aboutImg from '../assets/about.jpg';

const About = () => {
  return (
    <div className='bg-light-brown text-medium-brown px-8 py-12'>
      <div className='flex items-start justify-between'>
        {/* Conteneur texte */}
        <div className='flex-1 max-w-lg mx-auto text-center'>
          <h2 className='text-3xl font-semibold mb-6'>À propos</h2>
          <p className='text-lg leading-relaxed'>
            Bienvenue ! Je suis une personne dédiée au développement web
            sur mesure. Ma mission ? Vous aider à construire une présence en
            ligne qui reflète votre vision et vos valeurs.
            <br />
            Avec une expertise en React, Tailwind CSS, SEO, etc., nous créons
            des solutions modernes, performantes et adaptées à vos besoins.
            <br />
            Nous croyons en une collaboration étroite avec nos clients pour
            transformer leurs idées en réalité digitale.
            <br />
            Ensemble, donnons vie à vos projets en ligne !
          </p>
        </div>
        {/* Image */}
        <div className='ml-12'>
          <img
            src={aboutImg}
            alt='Développement web'
            className='h-96 w-96 rounded-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
