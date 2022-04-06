import React from 'react'
import Footer from '../components/Footer/Footer'
import HeroBackground from '../components/HeroBackground/HeroBackground'
import NavBar from '../components/NavBar/NavBar'
import Activity from '../components/Activity/Activity'

const Activities = () => {
  return (
    <div>
      <NavBar />
      <HeroBackground heading='ACTIVITIES' text='Something for everyone' />
      <Activity />
      <Footer />
    </div>
  )
}

export default Activities
