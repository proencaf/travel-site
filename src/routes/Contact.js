import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import HeroBackground from '../components/HeroBackground/HeroBackground'
import Form from '../components/Form/Form'
import Footer from '../components/Footer/Footer'

const Contact = () => {
  return (
    <div>
      <NavBar />
      <HeroBackground heading='CONTACT' text="We're here to help" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact
