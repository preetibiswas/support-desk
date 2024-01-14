import React, { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch,useSelector } from 'react-redux'
import { login,reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const Login = () => {
  const [formData, setFormData] = useState({
   
    email: '',
    password: "",
   
  });
  const {  email, password } = formData;
  const dispatch= useDispatch()
  const navigate= useNavigate()


  
  const { user,isLoading,isSuccess,message,isError } =useSelector((state)=>state.auth)


  useEffect(()=>{

    if(isError){
      toast.error(message)
    }
    // redirect to home
    if(isSuccess || user){
      navigate('/')
      
    }
    dispatch(reset())
    

  },[isError,isSuccess,user,message,navigate,dispatch])


  const onChange=(e)=>{
    setFormData((prevstate)=>({
        ...prevstate,
        [e.target.name]:e.target.value

    }))
  }
  const onSubmit=(e)=>{
   
    e.preventDefault()
    const userData={email,password}
    console.log(userData)
    dispatch(login(userData))
   

  }
  if(isLoading) { return <Spinner/>}


  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please Login to get Support</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
         
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
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;

