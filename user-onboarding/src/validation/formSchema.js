import * as yup from 'yup';

const fromSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required!')
        .min(3, 'Username must be 3 characters long!'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is an required input!'),
    password: yup
        .string()
        .required('Password is required')
        .min(6, 'Password must be 6 characters long!'),
    tos: yup
        .boolean()
        .oneOf([true], 'Must accept terms and conditions!')          
})

export default fromSchema