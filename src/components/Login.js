import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import * as yup from "yup";
import loginSchema from "../validation/loginSchema";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { setUserId } from "../actions/profileActions";
import { BASE_URL } from "../constants";

const initialFormValues = {
  username: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  password: "",
  loginAttempt: "",
};
const initialDisabled = true;

function Login({ dispatch }) {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const validate = (name, value) => {
    yup
      .reach(loginSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };
  const onChange = (evt) => {
    const { name, value } = evt.target;
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    const loginAttempt = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
    };
    postLogin(loginAttempt);
  };
  const postLogin = (loginAttempt) => {
    console.log(loginAttempt);
    axios
      .post(`${BASE_URL}/auth/login`, loginAttempt)
      .then((resp) => {
        localStorage.setItem("token", resp.data.token);
        dispatch(setUserId(resp.data.user_id));
        navigate("/profile");
      })
      .catch((err) => {
        console.error(err);
        const loginError = {
          ...formErrors,
          loginAttempt: "Login failed. Please try again.",
        };
        setFormErrors(loginError);
      })
      .finally(() => setFormValues(initialFormValues));
  };

  useEffect(() => {
    loginSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <StyledForm onSubmit={onSubmit}>
      <h2>Login</h2>
      <div className="errors">
        {/* errors here */}
        <div>{formErrors.username}</div>
        <div>{formErrors.password}</div>
        <div>{formErrors.loginAttempt}</div>
      </div>
      {/* Form */}
      <div className="form-container">
        <div className="username">
          <label>
            <p>Username</p>
            <input
              id="username"
              value={formValues.username}
              onChange={onChange}
              name="username"
              type="text"
            />
          </label>
        </div>
        <div className="password">
          <label>
            <p>Password</p>
            <input
              id="password"
              value={formValues.password}
              onChange={onChange}
              name="password"
              type="password"
            />
          </label>
        </div>
        <button type="submit" id="loginBtn" disabled={disabled}>
          Login
        </button>
      </div>
    </StyledForm>
  );
}
const mapStateToProps = (state) => ({ user_id: state.user_id });
export default connect(mapStateToProps)(Login);

const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 2%; 5%;
    background-color: '#006e51';
    color: '#313639';
    border-style: double;
    border-color: '#004f3a';
    outline: 5px solid '#10ffbf';
    h2 {
        color: '#afffea';
    }
    .form-container {
        width: 100%;
    }
    .errors {
        color: '#f8f8ff';
    }
    .username {
        width: 90%;
    }
    .username p {
        display: inline;
        margin-right: 1%;
    }
    .password {
        width: 90%;
    }
    .password p {
        display: inline;
        margin-right: 1%;
    }
    #loginBtn {
        width: 40%;
        padding: 2%;
        margin: 1% auto;
    }
`;
