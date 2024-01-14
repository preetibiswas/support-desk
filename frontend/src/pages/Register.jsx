import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch,useSelector } from 'react-redux'
import { register } from "../features/auth/authSlice";
import { useNavigate } from 'react-router-dom'
import { reset } from "../features/auth/authSlice";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const dispatch= useDispatch()
  const navigate= useNavigate()
  const { user,isLoading,isSuccess,message,isError }= useSelector(state=>state.auth)
  const onChange=(e)=>{
    setFormData((prevstate)=>({
        ...prevstate,
        [e.target.name]:e.target.value

    }))
  }

  useEffect(()=>{

    if(isError){
      toast.error(message)
    }
    // redirect to loggin
    if(isSuccess || user){
      navigate('/')
      
    }
    dispatch(reset())
    

  },[isError,isSuccess,user,message,navigate,dispatch])

  const onSubmit=(e)=>{
    e.preventDefault()
    if(password !== password2){
        toast.error('password  do not match')
        
    }else{
      const userData={
        name, email,password
      }
      dispatch(register(userData))
    }

  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register 
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your Name"
              required
              value={name}
              className="form-control"
              id="name"
              onChange={onChange}
              name="name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              className="form-control"
              id="email"
              onChange={onChange}
              name="email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              className="form-control"
              id="password"
              onChange={onChange}
              name="password"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="confirm password"
              required
              value={password2}
              className="form-control"
              id="password2"
              onChange={onChange}
              name="password2"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
