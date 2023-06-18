import React from 'react'
import './Heading.css'
import { Link } from 'react-router-dom'

export default function Heading(props) {
  return (

    <div>
        <div>
          <div className='inventorytopic inventorytopic h-40 w-full shadow-2xl bg-gradient-to-r to-purple-600 from-blue-500 pt-2'>
            <span className='px-6 text-center text-white md:px-12 mt-1 block font-serif text-5xl mb-6 font-bold'>INVENTORY MANAGEMENT</span>
          </div>
          <div>
            <div className='contentWrapper'>

              <Link to="/Inventory">
                <button className='b1 h-full px-2'>
                  <div className='home'>Item list</div>
                </button>
                </Link>
                <button className='b2 h-full px-2'>
                  <div className='item'>{props.tab}</div>
                </button>
                  
              </div>
          </div>
        </div>      
    </div>
  )
}
