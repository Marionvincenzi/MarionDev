import React from 'react'
import AboutPage from './AboutPage'
import Services from '../components/Services'
import Package from '../components/Package'
import SubscribeSection from '../components/Subscription'

const HomePage = () => {
  return (
    <div>
        <AboutPage />
        <Services />
        <Package />
        <SubscribeSection />
    </div>
  )
}

export default HomePage