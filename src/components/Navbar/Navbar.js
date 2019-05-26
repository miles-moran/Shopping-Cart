import React from "react";

const Navbar = ({ cartSize, handleChangeView, view }) => {
  let newView;
  let title;
  if (view === "ProductsPage") {
    newView = "CheckoutPage";
    title = "All Products";
  } else if (view === "CheckoutPage") {
    newView = "ProductsPage";
    title = "Your Cart";
  }
  return (
    <nav>
      <div className="nav-wrapper light-blue ">
        <a className="brand-logo">
          {title}
        </a>
        <ul className="right">
          <li
            className="brand-logo right"
            onClick={() => handleChangeView(newView)}
          >
            <div>
              <i className="fas fa-shopping-cart" /> {cartSize}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
