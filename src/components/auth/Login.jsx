import React from 'react';
import { useFormik } from 'formik';
import { Button, Input, Label } from '../ui/styled/Styles';
import styled from 'styled-components';

const P = styled.p`
  color: red;
  margin-bottom: 0;
`

function Login({ onLogin }) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      onLogin(values);
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = <P>Required</P>;
      }

      if (!values.password) {
        errors.password = <P>Required</P>;
      }

      return errors;
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email"
          type="text"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <P>{formik.errors.email}</P>
        ) : null}
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>
      <Button type="submit">Login</Button>
    </form>
  );
}

export default Login;
