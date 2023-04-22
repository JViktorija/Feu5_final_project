import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Input } from '../ui/styled/Styles';
import styled from 'styled-components';

const H1 = styled.h1`
  margin-top: 4rem;
  margin-bottom: 4rem;
  text-align: center;
`;

const H3 = styled.h3`
    margin-bottom: 0.1rem;
`
export const Button = styled.button`
  background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 20px 0px;
  cursor: pointer;
  width: 10em;
`;

const AddShopSceme = Yup.object().shape({
  shopName: Yup.string()
    .min(4, 'At least 4 symbols')
    .required('Required'),
  town: Yup.string()
    .min(2, 'At least 4 symbols')
    .required('Required'),
  startYear: Yup.number()
    .min(1970, 'Minimum year 1970')
    .max(2022, 'Max year 2022')
    .required('Required'),
  description: Yup.string()
    .min(6, 'At least 6 symbols')
    .required('Required'),
  ImageUrl: Yup.string()
    .min(5, 'At least 5 symbols')
    .required('Required'),
});

export const AddShop = ({onAddShop}) => (
  <div>
    <H1>Add Shop</H1>
    <Formik
      initialValues={{
        shopName: '',
        town: '',
        startYear: '',
        description: '',
        ImageUrl: ''
      }}
      validationSchema={AddShopSceme}
      onSubmit={values => {
        // same shape as initial values
        onAddShop(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>

          <H3>Shop Name</H3>
          <Field name="shopName" component={Input}/>
          {errors.shopName && touched.shopName ? (
            <div>{errors.shopName}</div>
          ) : null}

          <H3>Town</H3>
          <Field name="town" component={Input}/>
          {errors.town && touched.town ? (
            <div>{errors.town}</div>
          ) : null}

          <H3>Start year</H3>
          <Field name="startYear" component={Input} type="number"/>
          {errors.startYear && touched.startYear ? (
            <div>{errors.startYear}</div>
          ) : null}

          <H3>Description</H3>
          <Field name="description" component={Input}/>
          {errors.description && touched.description ? (
            <div>{errors.description}</div>
          ) : null}

          <H3>ImageUrl</H3>
          <Field name="ImageUrl" component={Input}/>
          {errors.ImageUrl && touched.ImageUrl ? (
            <div>{errors.ImageUrl}</div>
          ) : null}
          
          <Button type="submit">Add Shop</Button>
        </Form>
      )}
    </Formik>
  </div>
);