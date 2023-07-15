import React from "react";

const Form = props => {

  const { change, submit, errors } = props;
  const { username, email, password, tos } = props.values;
  
  const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const newVal = type === 'checkbox' ? checked : value;
    change(name, newVal)
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>First Name:
        <input 
          name='first_name'
          type='text'
          data-cy="first-name"
          onChange={handleChange}
        />
      </label>
      <label>Last Name:
        <input 
          name='last_name'
          type='text'
          data-cy="last-name"
          onChange={handleChange}
        />
      </label>
      <label>Email:
        <input 
          name='email'
          type='text'
          data-cy="email"
          onChange={handleChange}
        />
      </label>
      <label>Password:
        <input 
          name='password'
          type='password'
          data-cy="password"
          onChange={handleChange}
        />
      </label>
      <label>Terms of Service:
        <input 
          checked={formData.terms}
          name='terms'
          data-cy="tos"
          type='checkbox'
          onChange={handleChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default Form