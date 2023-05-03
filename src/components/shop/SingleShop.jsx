import React from 'react';
import styled from 'styled-components';

const H3 = styled.h3`
  list-style-type: none;
  margin-bottom: 1rem;
  text-align: center;
  padding: 0.5rem;
  font-size: 2rem;
  color: #333;
`;
const H4 = styled.h4`
  list-style-type: none;
  font-weight: normal;
  margin-bottom: 0;
  padding: 0.5rem;
  font-size: 2rem;
  color: #333;
`;

const Card = styled.ul`
  padding: 1rem;
  box-shadow: 5px 5px 10px rgb(180, 190, 194);
  border: 1px solid #9e77ed;
  border-radius: 5px;
  background-color: #f4ebff;
  min-width: 20rem;
  max-width: 40rem;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`

function SingleShop({ shop }) {
  return (
    <Card>
      <H3>{shop.shopName}</H3>
      <H4>{shop.town}</H4>
      <H4>{shop.startYear}</H4>
      <H4>{shop.description}</H4>
      <H4>
        <Image src={shop.ImageUrl} alt={shop.shopName} />
      </H4>
    </Card>
  );
}

export default SingleShop;
