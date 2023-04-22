import React from 'react'
import styled from 'styled-components';
import { addDoc, collection } from '@firebase/firestore';
import { AddShop } from '../components/shop/AddShop';
import { DivCont } from '../components/ui/styled/Styles';
import { db } from '../firebase/firebase';
// import { toast } from 'react-hot-toast';

const Wrapper  = styled.div`
  display: flex;
  height: 89vh;
  background: linear-gradient(to bottom, #e66465, blue, #9198e5);
`;

function AddShopPage() {

  // function AddNewShop(shopObj) {
  //   const hookPostRef = collection(db, 'hookPosts');
  //   addDoc(hookPostRef, shopObj).then(() => {
  //     toast.success('shop created');
  //   });

    return (
      <Wrapper>
      <DivCont className="container">
        <AddShop onAddShop={async (value) => {
          try {
            const docRef = await addDoc(collection(db, "shops"), value);
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        }}/>
      </DivCont>
      </Wrapper>
    )
}

export default AddShopPage;