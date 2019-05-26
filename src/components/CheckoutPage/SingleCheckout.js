import React from "react";

import "../ProductsPage/Page.css";

const SingleCheckout = ({ product, quantity }) => {
  if (quantity !== 0) {
    return (
      <tbody>
        <tr>
          <td>
            <div className="bold">{product.name}</div>
            {product.description}
          </td>
          <td className="center">${product.price}</td>
          <td>
            <div className="center">{quantity}</div>
          </td>
        
        </tr>
      </tbody>
    )
  } else {
    return null;
  }
};

export default SingleCheckout;
