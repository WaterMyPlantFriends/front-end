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
      <div className="login-wrapper">
      <div className="errors">
        {/* errors here */}
        <div>{formErrors.username}</div>
        <div>{formErrors.password}</div>
        <div>{formErrors.loginAttempt}</div>
      </div>
      {/* Form */}
      <div className="form-container">
        <h2>Login</h2>
        <div className="username">
          <label>
            <input
              id="username"
              value={formValues.username}
              onChange={onChange}
              name="username"
              type="text"
              placeholder="username"
            />
          </label>
        </div>
        <div className="password">
          <label>
            <input
              id="password"
              value={formValues.password}
              onChange={onChange}
              name="password"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <button type="submit" id="loginBtn" disabled={disabled}>
          Login
        </button>
      </div>
      </div>
    </StyledForm>
  );
}
const mapStateToProps = (state) => ({ user_id: state.user_id });
export default connect(mapStateToProps)(Login);

const StyledForm = styled.form`
    box-sizing: border-box;
    margin: 0 auto;
    padding: 2%; 5%;
    background-color: '#006e51';
    color: '#313639';

    .login-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    h2 {
        color: '#afffea';
    }
    .form-container {
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 10px grey;
        margin-top: 3%;
    }
    .errors {
        color: '#f8f8ff';
    }
    .username p {
        display: inline;
        margin-right: 1%;
    }
    .password p {
        display: inline;
        margin-right: 1%;
    }
    #loginBtn {
        width: 100px;
        padding: 2%;
        border: none;
        margin: 2%;
    }
    button:hover {
      background: lightgreen;
      border: none;
    }
`;
