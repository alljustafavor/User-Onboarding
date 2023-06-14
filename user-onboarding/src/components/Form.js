


const Form = props => {
    const {
        values
    } = props

    const onSubmit = evt => {

    }

    const onChange = evt => {

    }

    return (
        <form onSubmit={onSubmit}>
            <label>First Name:
                <input 
                    value={values.first_name}
                    name='first_name'
                    type='text'
                    onChange={onChange}
                />
            </label>
            <label>Last Name:
                <input 
                    value={values.last_name}
                    name='last_name'
                    type='text'
                    onChange={onChange}
                />
            </label>
            <label>Email:
                <input 
                    value={values.email}
                    name='email'
                    type='text'
                    onChange={onChange}
                />
            </label>
            <label>Password:
                <input 
                    value={values.password}
                    name='password'
                    type='password'
                    onChange={onChange}
                />
            </label>
            <label>Terms of Service:
                <input 
                    checked={values.terms}
                    name='terms'
                    type='checkbox'
                    onChange={onChange}
                />
            </label>
            <button>Submit</button>
        </form>
    )
}

export default Form