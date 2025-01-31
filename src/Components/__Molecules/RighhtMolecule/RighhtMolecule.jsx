import React from 'react'
import './RighhtMolecule.css'

const RighhtMolecule = ({setName,setNumber,setMonth,setYear ,setCvc}) => {

    let NameValidation=/^[A-Z\s]+$/
    let NumberValidation = /^[0-9\s]*$/;
    let MMvalidation =/^(0[1-9]|1[0-2])$/
    let YYvalidation=/^(0[1-9]|[1-9][0-9])$/
    let cvcValidation=/^\d+$/

    const handleName=(e)=> {
        const name = e.target.value.toUpperCase();
        if (NameValidation.test(name)) {
          setName(name);
        }
        if(name.length===0){
            setName("JANE APPLESEED")
        }
       }
      const handleNumber = (e) => {
        let number = e.target.value;
        number = number.replace(/\D/g, '').replace(/(.{4})(?=.)/g, '$1 ');
        if (NumberValidation.test(number)) {
          setNumber(number);
        }
        if(number.length===0){
            setNumber("0000 0000 0000 0000")
        }
    }
        const handleMM =(e) => {
            let month = e.target.value;
            if(month.length===1){
                month="0" + month
            }
            if(month.length==0){
                setMonth("00")
            }
            if(MMvalidation.test(month)){
                setMonth(month)
            }
        }
        const handleYY=(e)=>{
            let year=e.target.value
            if(year.length==0){
                setYear("00")
            }
            if(YYvalidation.test(year)){
                setYear(year)
            }

        }
        const handleCvc=(e)=>{
            let cvc=e.target.value
            
            if(cvc.length==0){
                setCvc("000")
            }
            if(cvcValidation.test(cvc)){
                setCvc(cvc)
            }
        }
  return (
    <div className="right-molecule">
        <form className='form' action="form">
            <label htmlFor="name">Cardholder Name</label>
            <input onChange={(e) => handleName(e) } id='name' maxLength={25} type="text" placeholder='e.g. Jane Appleseed' />
            <label htmlFor="number">Card Number</label>
            <input onChange={(e) => handleNumber(e)} id='number' maxLength={16} type="text" placeholder='e.g. 1234 5678 9123 0000' />

            <div className="RightRagac">
                <div className="ori">
                    <div className="DivForLabel">
                        <label htmlFor="month">Exp. Date (MM/YY)</label>
                    </div>
                    <div className="DivForInput">
                        <input onChange={(e)=> handleMM(e)} maxLength={2} id='month' type="text" placeholder='MM' />
                        <input onChange={(e)=> handleYY(e)} maxLength={2} id='year' type="text" placeholder='YY' />
                    </div>
                </div>
                <div className="solo">
                    <div className="DivForLabel">
                        <label htmlFor="cvc">CVC</label>
                    </div>
                    <div className="DivForInput">
                        <input onChange={(e)=>handleCvc(e)} maxLength={4} id='cvc' type="text" placeholder='e.g. 123' />
                    </div>
                </div>
            </div>
            <button>Confirm</button>
        </form>
    </div>
  )
}

export default RighhtMolecule