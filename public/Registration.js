import React from 'react'
import { useState } from 'react'
//import firebaseDB from './firebase'
function Registration() {
    const [data,setData] =useState({
        email:"",
        password:""
    });
function changeHandler(e){
    setData({...data,[e.target.name]:e.target.value});
}
const submitData =(e)=>{
 e.preventDefault();
 /*
 firebaseDB.child('register').push(
    data,
    err=>{
        if(err) console.log(err);
    }
 )*/
 console.log(data);
}
  return (
    <div>
        <div>
          <div className="vh-100 d-flex justify-content-center align-items-center ">
            <div className="col-md-5 p-5 shadow-sm border rounded-5 border-primary bg-white">
                <h2 className="text-center mb-4 text-primary">Registration Form</h2>
                <form onSubmit={submitData}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control border border-primary" name="email" id="exampleInputEmail1" onChange={changeHandler} aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control border border-primary" name="password" onChange={changeHandler} id="exampleInputPassword1" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control border border-primary" name="Confirmpassword" onChange={changeHandler} id="exampleInputPassword2" required />
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary" type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
