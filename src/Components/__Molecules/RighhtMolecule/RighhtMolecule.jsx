import React from 'react'
import './RighhtMolecule.css'
const RighhtMolecule = ({setName,setNumber,setMonth,setYear ,setCvc,NameError,NumberError,MonthrError,CvcError,YearError}) => {
    let NameValidation=/^[A-Z\s]+$/
    let secondvalidation=/([a-z])\d([a-z])(.?)\d([a-z])\d/
    let NumberValidation = /^[0-9\s]*$/;
    let MMvalidation =/^(0[1-9]|1[0-2])$/
    let YYvalidation=/^(0[1-9]|[1-9][0-9])$/
    let cvcValidation=/^\d+$/

    const handleName=(e)=> {
        let name = e.target.value.toUpperCase();
        if (NameValidation.test(name)) {
          setName(name);
        }
        if(name.length===0){
            setName("JANE APPLESEED")
        }
       }
       const handleNumber = (e) => {
        let number = e.target.value.replace(/\D/g, "");
        e.target.value = number;
        number = number.replace(/(.{4})/g, "$1 ").trim(); 

        if (NumberValidation.test(number)) {
            setNumber(number);
        }
        if (number.length === 0) {
            setNumber("0000 0000 0000 0000");
        }
        }
        const handleMM =(e) => {
            let month = e.target.value.replace(/\D/g, "");
            e.target.value = month;
            if(month.length===1){
                month= "0" + month
            }
            if(month.length==0){
                setMonth("00")
            }
            if(MMvalidation.test(month)){
                setMonth(month)
            }
        }
        const handleYY=(e)=>{
            let year = e.target.value.replace(/\D/g, "");
            e.target.value = year;
            if(year.length==0){
                setYear("00")
            }
            if(YYvalidation.test(year)){
                setYear(year)
            }

        }
        const handleCvc=(e)=>{
            let cvc = e.target.value.replace(/\D/g, "");
            e.target.value = cvc;
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
            {NameError?<input onChange={(e) => handleName(e) } style={{marginBottom:"10px",border:"1px solid #FF5050"}} id='name' maxLength={25} type="text" placeholder='e.g. Jane Appleseed' />:<input onChange={(e) => handleName(e) } id='name' maxLength={25} type="text" placeholder='e.g. Jane Appleseed' />}
            <p className='PError'>{NameError}</p>
            <label htmlFor="number">Card Number</label>
            {NumberError?<input onChange={(e) => handleNumber(e)}  style={{marginBottom:"10px",border:"1px solid #FF5050"}} id='number' maxLength={16} type="text" placeholder='e.g. 1234 5678 9123 0000' />:<input onChange={(e) => handleNumber(e)} id='number' maxLength={16} type="text" placeholder='e.g. 1234 5678 9123 0000' />}
            <p className='PError'>{NumberError}</p>

            <div className="RightRagac">
                <div className="ori">
                    <div className="DivForLabel">
                        <label htmlFor="month">Exp. Date (MM/YY)</label>
                    </div>
                    <div className="DivForInput">
                        <div className="MonthDiv">
                            {MonthrError?<input onChange={(e)=> handleMM(e)} style={{marginBottom:"10px",border:"1px solid #FF5050"}} maxLength={2} id='month' type="text" placeholder='MM' />:<input onChange={(e)=> handleMM(e)} maxLength={2} id='month' type="text" placeholder='MM' />}
                            <p className='PError'>{MonthrError}</p>
                        </div>
                        <div className="YearDiv">
                            {YearError?<input onChange={(e)=> handleYY(e)} style={{border:"1px solid #FF5050"}} maxLength={2} id='year' type="text" placeholder='YY' />:<input onChange={(e)=> handleYY(e)} maxLength={2} id='year' type="text" placeholder='YY' />}
                        </div>
                    </div>
                </div>
                <div className="solo">
                    <div className="DivForLabel">
                        <label htmlFor="cvc">CVC</label>
                    </div>
                    <div className="DivForCvcInput">
                        {CvcError ? <input onChange={(e)=>handleCvc(e)} style={{marginBottom:"10px",border:"1px solid #FF5050"}} maxLength={4} id='cvc' type="text" placeholder='e.g. 123' />:<input onChange={(e)=>handleCvc(e)} maxLength={4} id='cvc' type="text" placeholder='e.g. 123' />}
                        <p className='PError'>{CvcError}</p>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}
export default RighhtMolecule