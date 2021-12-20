import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import loginSchema from './validation/loginSchema';

const initialFormValues = {
    username: '',
    password: '',
}
const initialFormErrors = {
    username: '',
    password: '',
}
const initialDisabled=true;

export default function login(props) {
    // state slices
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);
    // functions
    const validate = (name, value) => {
        yup.reach(loginSchema, name)
            .validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: '' }))
            .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
    }
    const inputChange = (name, value) => {
        // validate
        validate(name, value);
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }
    const onChange = evt => {
        const { name, value } = evt.target;
        inputChange(name, value);
    }
    // update login button when formValues change
    useEffect(() => {
        loginSchema.isValid(formValues)
            .then(valid => setDisabled(!valid));
    }, [formValues]);
    // return Login element
    return (
        <>
            <h2>Login</h2> 
            <div className='errors'>
                {/* errors here */}
                <div>{errors.username}</div>
                <div>{errors.password}</div>
            </div>
            {/* Form */}
            <div className='form-container'>
                <div className='username'>
                    <label><p>Username</p>
                        <input
                            id='username'
                            value={values.username}
                            onChange={onChange}
                            name='username'
                            type='text'
                        />
                    </label>
                </div>
                <div className='password'>
                    <label><p>Password</p>
                        <input
                            id='password'
                            value={values.password}
                            onChange={onChange}
                            name='password'
                            type='password'
                        />
                    </label>
                </div>
                <button type='submit' id='loginBtn' disabled={disabled}>Login</button>
            </div>
        </>
    )
    
}