import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, Input } from '../ui/styled/Styles';
import styled from 'styled-components';

const H1 = styled.h1`
  margin-top: 4rem;
  margin-bottom: 4rem;
  text-align: center;
  color: #333;
`;

const H3 = styled.h3`
  margin-bottom: 0.1rem;
`

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

const initialValues = {
  shopName: '',
  town: '',
  startYear: '',
  description: '',
  ImageUrl: ''
};

export const AddShop = ({onAddShop}) => {
  const [isAdding, setIsAdding] = useState(false);
  
  const handleSubmit = async (values, { resetForm }) => {
    setIsAdding(true);
    try {
      await onAddShop(values);
      resetForm(initialValues);
    } finally {
      setIsAdding(false);
    }
  }

  return (
  <div>
    <H1>Add Shop</H1>
    <Formik
      initialValues={initialValues}
      validationSchema={AddShopSceme}
      onSubmit={handleSubmit}
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
          
          <Button type="submit" disabled={isAdding} >Add Shop</Button>
        </Form>
      )}
    </Formik>
  </div>
)};