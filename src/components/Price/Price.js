import React from 'react'
import './Price.css'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <div className='pricing'>
      <div className='card-container'>
        <div className='card'>
          <h3>- Essentials -</h3>
          <span className='bar'></span>
          <p className='currency'>£1,000</p>
          <p>- 3 Days -</p>
          <p>- Views - </p>
          <p>- Features -</p>
          <p>- Shared Dorm - </p>
          <Link to='/contact' className='btn'>
            Book
          </Link>
        </div>
        <div className='card'>
          <h3>- Standard -</h3>
          <span className='bar'></span>
          <p className='currency'>£2,300</p>
          <p>- 3 Days -</p>
          <p>- Views - </p>
          <p>- Features -</p>
          <p>- Private Room - </p>
          <Link to='/contact' className='btn'>
            Book
          </Link>
        </div>
        <div className='card'>
          <h3>- Luxury -</h3>
          <span className='bar'></span>
          <p className='currency'>£3,500</p>
          <p>- 3 Days -</p>
          <p>- Views - </p>
          <p>- Features -</p>
          <p>- Private Villa - </p>
          <Link to='/contact' className='btn'>
            Book
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Pricing
