import React, { useState, useEffect } from 'react';
import Heart from '../../assets/Heart';
import './Posts.css';
import { getProducts } from '../../utils/firestore';
import { Link } from 'react-router-dom';

function Posts() {
  const [Products, setProducts] = useState([]);
  Products.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  useEffect(() => {
    (async function () {
      const allProducts = await getProducts()
      console.log(allProducts)
      setProducts(allProducts)
    })()
  }, [])   
  

  Products.sort()

  return (
    
       
      <div className="postParentDiv">
        <div className="moreView">
          <div className="heading">
            <span>Quick Menu</span>
            <span>View more</span>
          </div>
          <div className="cards">
            {Products.map((product, i) => {
              return <div
                className="card"
              >
                <Link
                  key={product.id}
                  to={`/viewpost/${i}`}
                  className="card"
                >
                  <div className="favorite">
                    <Heart></Heart>
                  </div>

                  <div className="image">
                    <img src={product.url} alt="" />
                  </div>
                 
                  <div className="content">
                    <p className="rate">&#x20B9; {product.price}</p>
                    <span className="kilometer">{product.name}</span>
                    <p className="name"> {product.Category}</p>
                  </div>
                  <div className="date">
                    <span>{product.createdAt}</span>
                  </div>
                  </Link>
              </div>
            })
            }
          </div>
        </div>
        <div className="recommendations">
          <div className="heading">
            <span>Fresh recommendations</span>
          </div>
          <div className="cards">
            {Products.map((product, i) => {
              return <div
                className="card"
              >
                <Link
                  key={product.id}
                  to={`/viewpost/${i}`}
                  className="card"
                >
                  <div className="favorite">
                    <Heart></Heart>
                  </div>

                  <div className="image">
                    <img src={product.url} alt="" />
                  </div>

                  <div className="content">
                    <p className="rate">&#x20B9; {product.price}</p>
                    <span className="kilometer">{product.name}</span>
                    <p className="name"> {product.Category}</p>
                  </div>
                  <div className="date">
                    <span>{product.createdAt}</span>
                  </div>
                </Link>
              </div>
            })
            }
          </div>
        </div>
      </div>
  );
}

export default Posts;
