import React from 'react'
import "./pricingCard.css"
import { Link } from 'react-router-dom'


const PricingCard = () => {
  return (
    <div className='pricing'>
      <div className='card-container'>
       <div className='card'> <h3>-Basic-</h3>
       <span className='bar'></span>
       <p  className='btc'>$ 100</p>
       <p>-3 Day -</p>
       <p>-3 Pages-</p>
       <p>-Featured-</p>
       <p>-Responsive Design-</p>
       <Link to="/contact" className ="btn">View Source Code</Link>
       </div>
       <div className='card'> <h3>-Premium-</h3>
       <span className='bar'></span>
       <p  className='btc'>$ 200</p>
       <p>-4 Day -</p>
       <p>-4 Pages-</p>
       <p>-Featured-</p>
       <p>-Responsive Design-</p>
       <Link to="/contact" className ="btn">View Source Code </Link>
       </div>
       <div className='card'> <h3>-Business-</h3>
       <span className='bar'></span>
       <p  className='btc'>$ 400</p>
       <p>-8 Day -</p>
       <p>-7 Pages-</p>
       <p>-Featured-</p>
       <p>-Responsive Design-</p>
       <Link to="/contact" className ="btn">View Source Code</Link>
       </div>
      </div>
    </div>

  )
}

export default PricingCard

