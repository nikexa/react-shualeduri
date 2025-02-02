import React, { useState } from 'react'
import './Organism.css'
import LeftMolecule from '../__Molecules/LeftMolecule/LeftMolecule'
import RighhtMolecule from '../__Molecules/RighhtMolecule/RighhtMolecule'
import Thanks from '../__Molecules/Thanks/Thanks'


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
  const [thanks,setThanks]=useState(false)
  const [ragac,setRagac]=useState(false)

  
  
  const handleBtn=()=>{
    let isValid=true;
    
    if(name.trim().length<5 || name==="JANE APPLESEED"){
      setNameError("Can’t be less then 5 or blank")
      isValid=false;
    }
    if(number.length<16 || number==="0000 0000 0000 0000"){
      setNumberError("Must be 16 digits")
      isValid=false;
    }
    if(month==="00" || year==="00"){
      setMonthrError("Cant be blank")
      isValid=false;
    }
    if(cvc=="000" || cvc.length<3){
      setCvcError("Can’t be blank or less then 3")
      isValid=false;
    }
    if(isValid){
      setThanks(true)
    }
  }
  
  const thanksBtn =()=>{
    setThanks(false)
    setName("JANE APPLESEED")
    setNumber("0000 0000 0000 0000")
    setMonth("00")
    setYear("00")
    setCvc("000")
    setNameError("")
    setNumberError("")
    setMonthrError("")
    setCvcError("")
  }

  return (
    <div className="organism">
      <LeftMolecule name={name} number={number} month={month} year={year} cvc={cvc}/>
      <div className="ragaca">
      {thanks?<Thanks/>:<RighhtMolecule setName={setName} setNumber={setNumber} setMonth={setMonth} setYear={setYear} setCvc={setCvc} NameError={NameError} NumberError={NumberError} MonthrError={MonthrError} CvcError={CvcError}/>}
      {thanks?<button onClick={thanksBtn} className='thanksBtn'>Continue</button>:<button onClick={handleBtn}>Confirm</button>}
      </div>
    </div>
  )
}

export default Organism