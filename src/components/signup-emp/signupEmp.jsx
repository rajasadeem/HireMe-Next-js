import React, { useState } from "react";
import Cities from "../cities/cities";
import InputField from "../input-field/input-field";
import Language from "../language/language";
import FormButton from "../button/button";
import axios from "axios";
import { useRouter } from "next/router";
import style from '../signup-emp/signup.module.css'
import Link from "next/link";

const Signup = () => {
  const [inputs, setInputs] = useState({});
  const [error,setError] = useState(null)
  const router = useRouter();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const {emp_phone} = inputs
    console.log(emp_phone);
    const {emp_password} = inputs

    const phoneRegex = /^(\+92|0092|92)(-)?[0-9]{3}(-)?[0-9]{7}$/

    if (phoneRegex.test(emp_phone) && emp_password.length >= 6) {
      axios({
        method: "post",
        headers: { "Content-Type": "Application/json" },
        url: "http://localhost:5000/user/sign-up",
        data: inputs
      })
        .then((res) =>{ 
          console.log(res)
          alert("Employee Registered")
        })
        .catch((error) => console.log(error));
    }
    else{
      alert("Invalid Phone Number(example: 92xxxxxxxxxx) or Password(must be 6 characters) ")
    }
    }
       


  return (
    <div className={style.container}>
      <div className={style.form}>
        <form onSubmit={handleSubmit}>
          <h1>Signup Employee</h1>
          <div className={style.input}>
          <InputField
            onChange={handleChange}
            label="Phone Number"
            name="emp_phone"
            type="text"
            value={inputs.emp_phone}
          />
          </div>
          <div className={style.input}>
          <InputField
            onChange={handleChange}
            label="Name"
            name="emp_name"
            type="text"
            value={inputs.emp_name}
          />
          </div>
          <div className={style.input}>
          <InputField
            onChange={handleChange}
            label="Password"
            name="emp_password"
            type="password"
            value={inputs.emp_password}
          />
          </div>
          <div className={style.button1}>
          <Language
            onChange={handleChange}
            name="emp_language"
            value={inputs.emp_language}
          />
          </div>
          <div className={style.button2}>
          <Cities onChange={handleChange} name="emp_city" value={inputs.emp_city} />
          </div>
          <div className={style.button3}>
          <FormButton name="Signup" type="submit" />
          </div>
          <p>Already have an Account ? <Link className={style.decoration} href="/emp-login">Login</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
