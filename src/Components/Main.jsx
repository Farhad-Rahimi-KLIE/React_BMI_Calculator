import React, { useState } from 'react'

const Main = () => {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')
  const HandleBMI = (e)=>{
    e.preventDefault();
    if (weight.length === 0 && height.length === 0) {
      alert("Weight and Height not be Empty")
    }else{
      let bmi = (weight/(height*height)*100);
      setBmi(bmi.toFixed(3))
      if (bmi < 35) {
        setMessage("You are UnderWeight")
      }else if(bmi >= 25 && bmi < 30){
        setMessage("You are Healthy Weight")
      }else{
        setMessage("You are OverWeight")
      }
    }
    setWeight('')
    setHeight('')
  }

  const Reload = ()=>{
    window.location.reload()
  }

  return (
    <div>
    <div className='container'>
   <div className="card w-[35rem]">
      <h2 className='text-center mt-2'>BMI Calculator</h2>
<div className="card-body">
<form>
<div className="row">
  <div className="row">
    <input type="text" className="form-control ml-2" value={weight} onChange={(e)=> setWeight(e.target.value)} placeholder="Enter your weight" name="weight"/>
  </div>
  <div className="row mt-2">
    <input type="text" className="form-control ml-2"  value={height} onChange={(e)=> setHeight(e.target.value)} placeholder="Enter your height" name="height"/>
  </div>
</div>
</form>
  <button className='btn btn-primary submit mx-3 my-2' type='submit' onClick={HandleBMI}>Submit</button>
  <button className='btn btn-success reload' type='submit' onClick={Reload}>Reload</button>
</div>
<h4 className=''>Your BMI is: {bmi}</h4>
<p className=''>{message}</p>
</div>
  </div>
  </div>
  )
}

export default Main
