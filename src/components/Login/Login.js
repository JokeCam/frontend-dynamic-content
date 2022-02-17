import React from 'react';

import classnames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import './Login.less';

function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const submitButtonClass = classnames('login__button', {
    login__button_disabled:
      !formik.dirty || Object.keys(formik.errors).length !== 0,
  });

  function validate(values) {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 8) {
      errors.password = 'Must be 8 characters or more';
    }

    return errors;
  }

  function handleSubmit(values) {
    console.log(values);
    navigate('../main', { replace: true });
  }

  return (
    <form className="login" onSubmit={formik.handleSubmit}>
      <input
        className="login__input"
        placeholder="Phone number, username or email"
        autoComplete="off"
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onFocus={formik.handleBlur}
        value={formik.values.email}
      ></input>
      {formik.touched.email && formik.errors.email ? (
        <p className="login__error">{formik.errors.email}</p>
      ) : null}
      <input
        className="login__input"
        placeholder="Password"
        autoComplete="off"
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onFocus={formik.handleBlur}
        value={formik.values.password}
      ></input>
      {formik.touched.password && formik.errors.password ? (
        <p className="login__error">{formik.errors.password}</p>
      ) : null}
      <button className={submitButtonClass}>Log In</button>
      <Link to="/register">
        <p className="login__link">Register here</p>
      </Link>
    </form>
  );
}

export default Login;
