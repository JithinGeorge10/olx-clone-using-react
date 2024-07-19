import React from 'react';
import { useParams } from 'react-router-dom';
import './View.css';
import { getProducts } from '../../utils/firestore';
const products = await getProducts()
// const sellerDetails=await getSellerDetails(products[id].user)
// console.log(sellerDetails)
function View() {
  const { id } = useParams();

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
          <p>No name</p>
          <p>1234567890</p>
        </div>
      </div>
    </div>
  );
}
export default View;
