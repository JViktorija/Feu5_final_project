import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Label, Input } from '../ui/styled/Styles';
import styled from 'styled-components';

const P = styled.p`
  color: red;
  margin-bottom: 0;
`

const SignupSchema = Yup.object().shape({
  password: Yup.string().min(6, <P>Too short</P>).required(<P>Required</P>),
  email: Yup.string().email(<P>Invalid email</P>).required(<P>Required</P>),
});

const Register = ({ onRegister }) => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        onRegister(values);
      }}
      validateOnChange
      validateOnBlur
      // validate={(...args) => {}}
    >
      {({ errors, touched }) => (
        <Form>
          <Label htmlFor="email">Email</Label>
          <Field name="email" type="email" component={Input} />
          {errors.email && touched.email ? <div>{errors.email} </div> : null}
          <Label htmlFor="password">Password</Label>
          <Field name="password" type="password" component={Input} />
          {errors.password && touched.password ? (
            <div>{errors.password}</div>
          ) : null}
          <Button type="submit">Register</Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Register;
