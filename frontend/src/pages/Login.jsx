import React, { useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const Login = () => {
  const [formData, setFormData] = useState({
   
    email: "",
    password: "",
   
  });
  const {  email, password } = formData;
  const onChange=(e)=>{
    setFormData((prevstate)=>({
        ...prevstate,
        [e.target.name]:e.target.value

    }))
  }
  const onSubmit=(e)=>{
    e.preventDefault()
   

  }

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

