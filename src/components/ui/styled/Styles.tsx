import React from 'react';
import styled from 'styled-components';

const Wrapper  = styled.div`
  display: flex;
  height: 89vh;
  background: linear-gradient(to bottom, #e66465, blue, #9198e5);
`

export const DivCont = styled.div`
  border-radius: 25px;
  margin: 20vh 50%;
  transform: translateX(-50%);
  padding: 0rem 10rem;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  color: #333;
  max-width: 60rem;
  min-width: 50rem;
  background-color: snow;
`;

export const Button = styled.button`
  background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  width: 10em;
`;

export const Label = styled.label`
  font-size: 2rem;
  color: #333;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: block;
`;

export const Input = styled(({ field, ...props }) => <input {...field} {...props} /> )`
    font-size: 2rem;
    padding: 0.5em 0.5em;
    border-radius: 5px;
    border: 1px solid #777;
    display: block;
    max-width: 300px;
`;