import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import signUpSchema from '../validation/signUpSchema';

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
  align-self: center;
`;

const initialValues = {
  username: '',
  password: '',
  phone: '',
};

export default function SignUp() {
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const onChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const validateField = (fieldName, fieldValue) => {
    yup
      .reach(signUpSchema, fieldName)
      .validate(fieldValue)
      .then(() => {
        setErrors({ ...errors, [fieldName]: '' });
      })
      .catch((error) => {
        setErrors({ ...errors, [fieldName]: error.message });
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
        onSubmit={(event) => {
          event.preventDefault();
          axios
            .post(
              'https://watermyplantz.herokuapp.com/api/auth/register',
              formValues
            )
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        }}
      >
        <FormField>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            name='username'
            value={formValues.username}
            onChange={onChange}
            onBlur={(event) => {
              validateField(event.target.name, event.target.value);
            }}
          />
          <ErrorMessage>{errors.username}</ErrorMessage>
        </FormField>
        <FormField>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            name='password'
            type='password'
            value={formValues.password}
            onChange={onChange}
            onBlur={(event) => {
              validateField(event.target.name, event.target.value);
            }}
          />
          <ErrorMessage>{errors.password}</ErrorMessage>
        </FormField>
        <FormField>
          <label htmlFor='phone-number'>Phone Number</label>
          <input
            id='phone-number'
            name='phone'
            type='tel'
            value={formValues.phone}
            onChange={onChange}
            onBlur={(event) => {
              validateField(event.target.name, event.target.value);
            }}
          />
          <ErrorMessage>{errors.phone}</ErrorMessage>
        </FormField>
        <SubmitButton type='submit' disabled={!isValidForm()}>
          Sign Up
        </SubmitButton>
      </Form>
    </Container>
  );
}
