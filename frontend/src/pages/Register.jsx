import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;
  const onChange=(e)=>{
    setFormData((prevstate)=>({
        ...prevstate,
        [e.target.name]:e.target.value

    }))
  }
  const onSubmit=(e)=>{
    e.preventDefault()
    if(password !== password2){
        toast.error('password  do not match')
        
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
