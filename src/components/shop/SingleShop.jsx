import React from "react";
import styled from "styled-components";

const LI = styled.li`
  list-style-type: none;
  padding: 0.5rem;
  font-size: 2rem;
  color: #333;
`;

const Card = styled.ul`
  padding: 1rem;
  box-shadow: 5px 5px 10px rgb(180, 190, 194);
  border: 1px solid rgb(191, 180, 180);
  border-radius: 5px;
  background-color: #F4EBFF;
  max-width: 20rem;
`;

function SingleShop({ shop, key }) {
  return (
    <Card key={key}>
      <LI>{shop.shopName}</LI>
      <LI>{shop.town}</LI>
      <LI>{shop.startYear}</LI>
      <LI>{shop.description}</LI>
      <LI><img src={shop.ImageUrl } alt={shop.shopName} /></LI>
    </Card>
  );
}

export default SingleShop;
