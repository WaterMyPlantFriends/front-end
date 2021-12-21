import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import signUpSchema from '../validation/signUpSchema';
import InputMask from 'react-input-mask';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 360px;
  gap: 32px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 6px;

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 8px 16px;
    border-radius: 6px;
    background-color: #efefef;
    border: 1px solid #bbb;
  }

  input[aria-invalid='true'] {
    border: 1px solid crimson;
  }
`;

const SubmitButton = styled.button`
  align-self: flex-end;
  padding: 8px 16px;
  border-radius: 6px;
  background-color: cornflowerblue;
  color: white;
  border: 1px solid transparent;
  height: unset;

  &:disabled {
    opacity: 60%;
    cursor: not-allowed;
  }

  &:hover {
    background-color: #91b3f2;
    border-color: transparent;
  }
`;

const ErrorMessage = styled.div`
  color: crimson;
`;

const initialValues = {
  username: '',
  password: '',
  phone: '',
};

export default function SignUp() {
  const [formValues, setFormValues] = useState(initialValues);
  const [fieldErrors, setFieldErrors] = useState({});
  const [formError, setFormError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const validateField = (fieldName, fieldValue) => {
    yup
      .reach(signUpSchema, fieldName)
      .validate(fieldValue)
      .then(() => {
        setFieldErrors({ ...fieldErrors, [fieldName]: '' });
      })
      .catch((error) => {
        setFieldErrors({ ...fieldErrors, [fieldName]: error.message });
      });
  };

  const isValidForm = () => {
    try {
      signUpSchema.validateSync(formValues);
      return true;
    } catch (err) {
      return false;
    }
  };

  return (
    <Container>
      <h1>Sign Up</h1>
      <Form
        aria-describedby='form-error-message'
        onSubmit={(event) => {
          event.preventDefault();
          setIsLoading(true);
          // Remove all characters that aren't 0-9
          const formattedPhone = formValues.phone.replace(/[^0-9]/g, '');
          axios
            .post('https://watermyplantz.herokuapp.com/api/auth/register', {
              ...formValues,
              phone: formattedPhone,
            })
            .then(() => {
              setIsLoading(false);
              setFormError('');
              navigate('/login');
            })
            .catch(() => {
              setFormError('Internal Server Error. Please try again');
              setIsLoading(false);
            });
        }}
      >
        <FormField>
          <label htmlFor='username'>Username</label>
          <input
            aria-describedby='username-error-message'
            aria-invalid={fieldErrors.username ? true : false}
            id='username'
            name='username'
            value={formValues.username}
            onChange={onChange}
            onBlur={(event) => {
              validateField(event.target.name, event.target.value);
            }}
          />
          <ErrorMessage role='alert' id='username-error-message'>
            {fieldErrors.username}
          </ErrorMessage>
        </FormField>
        <FormField>
          <label htmlFor='password'>Password</label>
          <input
            aria-describedby='password-error-message'
            aria-invalid={fieldErrors.password ? true : false}
            id='password'
            name='password'
            type='password'
            value={formValues.password}
            onChange={onChange}
            onBlur={(event) => {
              validateField(event.target.name, event.target.value);
            }}
          />
          <ErrorMessage role='alert' id='password-error-message'>
            {fieldErrors.password}
          </ErrorMessage>
        </FormField>
        <FormField>
          <label htmlFor='phone-number'>Phone Number</label>
          <InputMask
            aria-describedby='phone-error-message'
            aria-invalid={fieldErrors.phone ? true : false}
            id='phone-number'
            name='phone'
            mask='(999) 999-9999'
            type='tel'
            value={formValues.phone}
            onChange={onChange}
            onBlur={(event) => {
              validateField(event.target.name, event.target.value);
            }}
          />
          <ErrorMessage role='alert' id='phone-error-message'>
            {fieldErrors.phone}
          </ErrorMessage>
        </FormField>
        <ErrorMessage role='alert' id='form-error-message'>
          {formError}
        </ErrorMessage>
        <SubmitButton type='submit' disabled={!isValidForm() || isLoading}>
          {isLoading ? 'Loading...' : 'Sign Up'}
        </SubmitButton>
      </Form>
    </Container>
  );
}
