import React from 'react'
import '../LeftMolecule/LeftMolecule.css'
import topCard from '../../IMAGES/front.png'
import backCard from '../../IMAGES/back.png'
import ovals from '../../IMAGES/ovals.svg'


const LeftMolecule = ({name,number,month,year,cvc}) => {
  return (
    <div className="left-molecule">
        <div className="cards">
            <div className="topCard">
                <img className='topCardIMG' src={topCard} alt="" />
                <img className='ovals' src={ovals} alt="" />
                <div className="CardInformations">
                <div className="CardNumberDiv">
                    <p className="CardNumber">{number}</p>
                </div>
                <div className="CardHolderDiv">
                    <div className="CardNameDiv">
                    <p className="CardName">{name}</p>
                    </div>
                    <div className="Data">
                    <p className="CardMonth">{month}</p>
                    <p className="dashh">/</p>
                    <p className="CardYear">{year}</p>
                    </div>
                </div>
                </div>
            </div>

            <div className='bottomCard'>
                <img className='bottomCardIMG' src={backCard} alt="" />
                <p className="cvc">{cvc}</p>
            </div>


        </div>
    </div>
  )
}

export default LeftMolecule