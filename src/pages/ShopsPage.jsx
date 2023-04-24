import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase/firebase';
import SingleShop from '../components/shop/SingleShop';
import { Button } from '../components/ui/styled/Styles';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: snow;
  min-height: 89vh;
`;
const H1 = styled.h1`
  text-align: center;
  padding-top: 5rem;
  font-size: 3rem;
  color: #333;
`;
const H2 = styled.h2`
  font-size: 2rem;
  color: #333;
`;
const DivFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

function ShopsPage() {
  const [shops, setShops] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await getDocs(collection(db, "shops"));
        const allShops = [];
        result.forEach(snapShot => allShops.push(snapShot.data()))
        setShops(allShops);
      } finally {
        setIsLoading(false);
      }

    };

    getData();
  }, []);

  const shopsComponent = useMemo(() => (
    !shops.length ? <H2>Empty, add shops to see them.</H2> : (
      <DivFlex cols={3}>
        {shops.map((shop, index) => (
          <SingleShop shop={shop} key={index} />
        ))}
      </DivFlex>
    )), [shops]);

  return (
    <Wrapper>
      <div className="container">
        <H1>Shops</H1>
        {isLoading ? <div>Loading......</div> : shopsComponent}
        <Link to='/add'>
          <Button>Add more</Button>
        </Link>
      </div>
    </Wrapper>
  )
}

export default ShopsPage;