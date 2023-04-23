import React from 'react'
import styled from 'styled-components';
import { addDoc, collection } from '@firebase/firestore';
import { AddShop } from '../components/shop/AddShop';
import { DivCont } from '../components/ui/styled/Styles';
import { db } from '../firebase/firebase';
import { toast } from 'react-toastify';

const Wrapper  = styled.div`
  display: flex;
  height: 89vh;
  background: linear-gradient(to bottom, #e66465, blue, #9198e5);
`;

function AddShopPage() {

  const addShopData = async (value) => {
    try {
      const docRef = await addDoc(collection(db, "shops"), value);
      toast.success('Sccessful login')
    } catch (e) {
      toast.error('Sucful login')
    }
  }

    return (
      <Wrapper>
      <DivCont className="container">
        <AddShop onAddShop={addShopData}/>
      </DivCont>
      </Wrapper>
    )
}

export default AddShopPage;