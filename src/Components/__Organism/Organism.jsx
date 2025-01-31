import React, { useState } from 'react'
import './Organism.css'
import LeftMolecule from '../__Molecules/LeftMolecule/LeftMolecule'
import RighhtMolecule from '../__Molecules/RighhtMolecule/RighhtMolecule'


const Organism = () => {

  const [name,setName]=useState("JANE APPLESEED")
  const [NameError,setNameError]=useState("")
  const [number,setNumber]=useState("0000 0000 0000 0000")
  const [NumberError,setNumberError]=useState("")
  const [month,setMonth]=useState("00")
  const [MonthrError,setMonthrError]=useState("")
  const [year,setYear]=useState("00")
  const [cvc,setCvc]=useState("000")
  const [CvcError,setCvcError]=useState("")

  
  
  const handleBtn=()=>{
    let valid=true;
    
    if(name.trim().length<5 || name==="JANE APPLESEED"){
      setNameError("Can’t be less then 5 or blank")
      valid=false;
    }
    if(number.length<16 || number==="0000 0000 0000 0000"){
      setNumberError("Must be 16 digits")
      valid=false;
    }
    if(month==="00" || year==="00"){
      setMonthrError("Cant be blank")
      valid=false;
    }
    if(cvc=="000" || cvc.length<3){
      setCvcError("Can’t be blank or less then 3")
      valid=false;
    }
    if(valid){
      console.log("thanku");
      
    }
  }


  return (
    <div className="organism">
      <LeftMolecule name={name} number={number} month={month} year={year} cvc={cvc}/>
      <div className="ragaca">
      <RighhtMolecule setName={setName} setNumber={setNumber} setMonth={setMonth} setYear={setYear} setCvc={setCvc} NameError={NameError} NumberError={NumberError} MonthrError={MonthrError} CvcError={CvcError}/>
      <button onClick={handleBtn}>Confirm</button>
      </div>
    </div>
  )
}

export default Organism