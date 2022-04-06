import React from 'react'
import './VideoIntro.css'
import { Link } from 'react-router-dom'
import islandVideo from '../../img/Untitled.mp4'

const VideoIntro = () => {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={islandVideo} type='video/mp4' />
      </video>
      <div className='content'>
        <h1>Remote. Travel.</h1>
        <p>Remote travel made easy and accessible.</p>

        <div>
          <Link to='/activities' className='btn'>
            Activities
          </Link>
          <Link to='/contact' className='btn btn-light'>
            Launch
          </Link>
        </div>
      </div>
    </div>
  )
}

export default VideoIntro
