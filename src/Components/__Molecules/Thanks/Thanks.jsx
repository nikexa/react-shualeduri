import React from 'react'
import '../Thanks/Thanks.css'
import chek from '../../IMAGES/Chek.svg'

const Thanks = () => {

  return (
    <div className='Thanks'>
        <img src={chek} alt="" />
        <p className="mainText">THANK YOU!</p>
        <p className="secondary">We’ve added your card details</p>
    </div>
  )
}


export default Thanks