import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Label, Input } from '../ui/styled/Styles';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Too Short!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

 const ValidationSchema = ({ onRegister }) => (
    <div>
      {/* <h1>Signup</h1> */}
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          onRegister(values);
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Label htmlFor="email">Email</Label>
            <Field name="email" type="email" component={Input} />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            {/* <button type="submit">Submit</button> */}
            <Label htmlFor="password">Password</Label>
            <Field name="password" type="password" component={Input} />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            <Button type="submit">Register</Button>
          </Form>
        )}
      </Formik>
    </div>
  );

  export default ValidationSchema;