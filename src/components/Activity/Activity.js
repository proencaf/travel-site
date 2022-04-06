import React from 'react'
import './Activity.css'
import { Link } from 'react-router-dom'
import Beach1 from '../../img/beach1.jpg'
import Beach2 from '../../img/beach2.jpg'

const Activity = () => {
  return (
    <div className='activity'>
      <div className='left'>
        <h1>Activities</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolorem
          magni non commodi, inventore officia?
        </p>
        <Link to='/contact'>
          <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className='right'>
        <div className='img-container'>
          <div className='image-stack top'>
            <img src={Beach1} className='img' alt='beach-aerial' />
          </div>
          <div className='image-stack bottom'>
            <img src={Beach2} className='img' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity
