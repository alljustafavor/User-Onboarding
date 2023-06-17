import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { useState, useEffect } from 'react'

const initFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  terms: false,

}

function App() {

  const [formValues, setFormValues] = useState(initFormValues)
  return (
    <div className="container">
      <h1>Sign In</h1>
      <Form first_name={formValues.first_name} last_name={formValues.last_name} email={formValues.email} password={formValues.password} terms={formValues.terms}/>
    </div>

  );
}

export default App;
