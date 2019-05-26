import React from "react";
import "./Page.css";

import SingleProduct from "./SingleProduct";

const ProductsPage = ({ products, handleAddToCart }) => {
  let content = products.map(product => (
    <SingleProduct
      key={product.id}
      product={product}
      handleAddToCart={handleAddToCart}
    />
  ));

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th className='center'>Price</th>
          <th className='center'>Quantity</th>
          <th></th>
        </tr>
      </thead>
      {content}
    </table>
  );
};

export default ProductsPage;
