import React from 'react'
import service1 from "../assets/service 1.png"
import service2 from "../assets/service 2.png"
import service3 from "../assets/service 3.png"
import service4 from "../assets/service 4.png"

const Services = () => {
  return (
    <div className='bg-light-brown py-12'>
        <h2 className='text-center text-3xl font-bold text-medium-brown mb-32'>
            Nos services
            </h2>
        <div className='flex flex-wrap justify-center gap-32'>
            <div className='text-center max-w-xs'>
            <img src={service1} alt='service1' className='mb-4' />
            <h3 className='text-xl font-medium mb-4 text-medium-brown'>
                Création de contenu web
            </h3>
            <p className='text-lg mb-4 text-dark-brown'>
                99€
            </p>
            <p className='text-lg text-paragraph'>
            Perfectionnez vos compétences en conception et développement web grâce à nos ateliers interactifs. Apprenez directement des experts pour créer des sites exceptionnels.
            </p>
            </div>

            <div className='text-center max-w-xs'>
            <img src={service2} alt='service2' className='mb-4' />
            <h3 className='text-xl font-medium mb-4 text-medium-brown'>
                Gestion de projet numérique
            </h3>
            <p className='text-lg mb-4 text-dark-brown'>
                149€
            </p>
            <p className='text-lg text-paragraph'>
            Notre service vous accompagne à chaque étape de la création de votre projet digital, garantissant une exécution fluide et précise grâce à notre expertise reconnue et notre approche méthodique.
            </p>
            </div>

            <div className='text-center max-w-xs'>
            <img src={service3} alt='service3' className='mb-4'/>
            <h3 className='text-xl font-medium mb-4 text-medium-brown'>
                Ateliers Web
            </h3>
            <p className='text-lg mb-4 text-dark-brown'>
                199€
            </p>
            <p className='text-lg text-paragraph'>
            Perfectionnez vos compétences en conception et développement web grâce à nos ateliers interactifs. Apprenez directement des experts pour créer des sites exceptionnels.
            </p>
            </div>

            <div className='text-center max-w-xs'>
            <img src={service4} alt='service4' className='mb-4' />
            <h3 className='text-xl font-medium mb-4 text-medium-brown'>
                Outils de création web
            </h3>
            <p className='text-xl font-medium mb-4 text-dark-brown'>
                249€
            </p>
            <p className='text-lg mb-2 text-paragraph'>
            Optimisez votre projet digital avec une gamme avancée d'outils de création web. Conçus pour augmenter votre productivité, nos solutions garantissent une performance et une efficacité inégalées.
            </p>
                </div>
        </div>
    </div>
  )
}

export default Services