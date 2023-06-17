import React, { useState, useEffect } from 'react';
import yup from 'yup';
import axios from 'axios';
import '../App.css'

const Form = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('https://reqres.in/api/users', formData).then((response) => {
      console.log(response);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name:
        <input 
          name='first_name'
          type='text'
          onChange={handleChange}
        />
      </label>
      <label>Last Name:
        <input 
          name='last_name'
          type='text'
          onChange={handleChange}
        />
      </label>
      <label>Email:
        <input 
          name='email'
          type='text'
          onChange={handleChange}
        />
      </label>
      <label>Password:
        <input 
          name='password'
          type='password'
          onChange={handleChange}
        />
      </label>
      <label>Terms of Service:
        <input 
          checked={formData.terms}
          name='terms'
          type='checkbox'
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default Form;