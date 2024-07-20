import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './View.css';
import { getProducts, getSellerDetails } from '../../utils/firestore';
const products = await getProducts()

// const sellerDetails= getSellerDetails(products[id].user)
// console.log(sellerDetails)
function View() {
  const { id } = useParams();
  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  useEffect(() => {
    try {
      (async function () {
        const userDetails = await getSellerDetails(products[id].user)
        setName(userDetails.username)
        setPhone(userDetails.phone)
      })()
    } catch (error) {

    }

  }, [])


  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={products[id].url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {products[id].price} </p>
          <span>{products[id].name}</span>
          <p>{products[id].Category}</p>
          <span>{products[id].createdAt}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{name}</p>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
