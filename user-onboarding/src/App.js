import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import React, { useState, useEffect } from 'react'

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  tos: false
}

function App() {

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleSubmit = () => {

  }

  const  handleChange = (name, value) => {
    setFormValues({...formValues, [name]: value});
  }

  return (
    <div className="container">
      <Form values={formValues} change={handleChange}/>
    </div>

  );
}

export default App;
