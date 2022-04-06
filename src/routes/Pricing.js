import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import HeroBackground from '../components/HeroBackground/HeroBackground'
import Price from '../components/Price/Price'

const Pricing = () => {
  return (
    <div>
      <NavBar />
      <HeroBackground heading='PRICING' text='Choose your trip' />
      <Price />
      <Footer />
    </div>
  )
}

export default Pricing
