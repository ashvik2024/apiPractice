import React, { useState } from "react";

const Form = () => {
    const [formData, setFormData]=useState([
        username:"",
    ])
    const clickHandle=()=>{

    }
  return (
    <div>
      <h1>Practice Form</h1>
      <form action="submit">
        <ul>
          <li>
            <input type="text" name="name" placeholder="Enter Your Name" />
          </li>
          <li>
            <input type="number" name="dob" placeholder="Enter Your Age" />
          </li>
          <li>
            <input type="email" name="gmail" placeholder="Enter your Gmail" />
          </li>
        </ul>
        <button onClick={clickHandle} >Submit</button>
      </form>
    </div>
  );
};

export default Form;
