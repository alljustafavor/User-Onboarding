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
  return (
    <div className="container">
      <Form />
    </div>
  );
}

export default App;
