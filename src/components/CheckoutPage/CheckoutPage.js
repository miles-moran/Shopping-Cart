import React from "react";

import "../ProductsPage/Page.css";

import SingleCheckout from "./SingleCheckout";

const CheckoutPage = ({ cart, products, cartSize, handleCheckout }) => {
  let content;
  if (cartSize > 0) {
    let total = 0;
    let tax = "9.8%";
    let singleProducts = products.map(
      product => (
        (total = total + product.price * cart[product.id]),
        (
          <SingleCheckout
            key={product.id}
            product={product}
            quantity={cart[product.id]}
          />
        )
      )
    );
    total = Math.round(total * 100) / 100;
    let totalWithTax = Math.round((total + total * 0.098) * 100) / 100;
    let multiply = `\xD7`;
    content = (
      <table>
        <thead>
          <tr>
            <th />
            <th className="center">Price</th>
            <th className="center">Quantity</th>
            <th />
            <th />
          </tr>
        </thead>
        {singleProducts}
        <tr>
          <th>Total</th>
          <th>
            {total} {multiply} {tax}{" "}
          </th>
          <th>{totalWithTax}</th>
          <th />
        </tr>
      </table>
    );
  } else {
    content = 'Buy Something';
  }
  return <div className='center'>{content}</div>;
};

export default CheckoutPage;
