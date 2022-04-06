import React from 'react'
import './Footer.css'
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaSearchLocation
              size={20}
              style={{ color: '#fff', marginRight: '2rem' }}
            />
            <div>
              <p>3 Paradise St.</p>
              <h4>Palawan, PH</h4>
            </div>
          </div>
          <div className='phone'>
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              1-888-987-654
            </h4>
          </div>
          <div className='email'>
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              trvl@rmt.com
            </h4>
          </div>
        </div>
        <div className='right'>
          <h4>About us</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab sit
            excepturi deserunt laboriosam fugit maiores voluptatibus eligendi
            repellat itaque officiis?
          </p>
          <div className='social'>
            <FaFacebook
              size={30}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
            <FaTwitter
              size={30}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
            <FaLinkedin
              size={30}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
