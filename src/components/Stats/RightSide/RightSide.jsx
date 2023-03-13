import React from 'react'
import CustomerReview from '../CustomerReview/CustomerReview'
import '../RightSide/rightSide.css'
import Updates from '../Updates/Updates'

const RightSide = () => {
  return (
    <div className="RightSide">
        <div>
        <h3 className='mb-3 text-white'>Updates</h3>
        <Updates/>
        </div>
        <div>
          <h3 className='mb-3 text-white'>Rating</h3>
          <CustomerReview/>
        </div>
    </div>
  )
}

export default RightSide