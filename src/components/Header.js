import React from 'react'
import logo from '../assets/logo.png'
import header from '../assets/header.jpg'
import Navbar from './Navbar'


const Header = () => {
  return (
    <div className='bg-light-brown p-4'>
    <div className='flex items-center justify-between bg-light-brown'>
        <img src={logo}
        alt='logo'
        className='h-16 w-16' />
        <Navbar />
    </div>
    <h1 className='text-medium-brown text-center text-3xl mt-4'>
        Solution web professionnelle et innovante
    </h1>
    <div className='relative mb-16'>
    <img src={header}
    alt='immage bannière'
    className='rounded-xl h-[600px] w-full mt-6 object-cover'
     />
     <div className='absolute bottom-4 left-4'>
        <p className='text-white text-2xl shadow-lg'>
        Nous mettons notre expertise en conception et développement<br/> 
        web à vos services pour transformer vos visions numériques en réalité.<br/> 
        Nos solutions sur mesure garantissent des <br/>
        performances optimales et un design élégant.
        </p>
     </div>
    </div>
    </div>
  )
}

export default Header