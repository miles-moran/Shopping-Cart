import React from "react";
import "./App.css";

//Data
import products from './data/products';

//Components
import Navbar from "./components/Navbar/Navbar";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: Array(products.length).fill(0),
      view: 'ProductsPage',
      cartSize: 0
    };
  }

  handleChangeView = (view) => {
    this.setState({
      view
    })
  }

  handleCheckout = () => {
    this.setState({
      cart: Array(products.length).fill(0),
      view: 'ProductsPage',
      cartSize: 0
    })
  }

  handleAddToCart = (productId, quantity) => {
    let cartSize = this.state.cartSize;
    let cart = this.state.cart;
    cart[productId] += quantity
    cartSize += quantity
    this.setState({
      cart,
      cartSize
    })
  }

  render() {
    let content;
    if (this.state.view === 'ProductsPage'){
      content = <ProductsPage products = {products} handleAddToCart = {this.handleAddToCart}/>
    } else if (this.state.view === 'CheckoutPage'){
      content = <CheckoutPage handleCheckout = {this.handleCheckout} cart = {this.state.cart} products = {products} cartSize={this.state.cartSize}/>
    }
    return (
      <div>
        <Navbar
          cartSize = {this.state.cartSize}
          handleChangeView = {this.handleChangeView}
          view = {this.state.view}
        />
        {content}
      </div>
    );
  }
}

export default App;
