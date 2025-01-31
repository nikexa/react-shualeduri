import React, { useState } from 'react'
import './Organism.css'
import LeftMolecule from '../__Molecules/LeftMolecule/LeftMolecule'
import RighhtMolecule from '../__Molecules/RighhtMolecule/RighhtMolecule'


const Organism = () => {

  const [name,setName]=useState("JANE APPLESEED")
  const [number,setNumber]=useState("0000 0000 0000 0000")
  const [month,setMonth]=useState("00")
  const [year,setYear]=useState("00")
  const [cvc,setCvc]=useState("000")


  return (
    <div className="organism">
      <LeftMolecule name={name} number={number} month={month} year={year} cvc={cvc}/>
      <RighhtMolecule setName={setName} setNumber={setNumber} setMonth={setMonth} setYear={setYear} setCvc={setCvc}/>
    </div>
  )
}

export default Organism