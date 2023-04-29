import React, { useEffect, useState } from "react";
import "../Cssofcomponents/Form.css";
export default function Form() {
const Received_Data={name:"",email:"",password:""};
const [inputData,SetinputData]=useState(Received_Data);
const [Flag,Setflag]=useState(false);
useEffect(()=>{console.log("Registered SuccessFully");},[Flag]);
const HandleData=(e)=>{
  SetinputData({...inputData,[e.target.name]:e.target.value});
  // console.log(inputData);

    
}
const handlesubmit=(e)=>{
e.preventDefault();
if(!inputData.name|| !inputData.email||!inputData.password){
alert("All Fields Are Mandatory");

}
else{

Setflag(true);

}
}

  return (
    <>
    <pre>{(Flag)?<h2>Hello {inputData.name} You Have SuccessFully Registered</h2>:""}</pre>
    <div className="main-form">



    
      <form className="Container" onSubmit={handlesubmit}>
        <div className="header">
          <h1>Registration Form</h1>
        </div>

        <div>
          <input type="text" placeholder="Enter Your Name" name="name" value={inputData.name} onChange={HandleData}  ></input>
        </div>
        <div>
          <input 
            type="email"
            placeholder="Enter Your Email"
            name="email" value={inputData.email} 
            onChange={HandleData} 
          ></input>
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password" value={inputData.password}
            onChange={HandleData}
          ></input>
        </div>
        <div>
<button type="submit">Submit</button>

        </div>
      </form>
      </div>
    </>
  );
}
