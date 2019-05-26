import React from "react";
import "./Page.css";

class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      product: props.product
    };
  }

  handleIncreaseQuantity = () => {
    let quantity = this.state.quantity + 1;
    this.setState({
      quantity
    });
  };

  handleDecreaseQuantity = () => {
    if (this.state.quantity > 1) {
      let quantity = this.state.quantity - 1;
      this.setState({
        quantity
      });
    }
  };

  render() {
    return (
      <tbody>
        <tr>
          <td>
            <div className="bold">{this.state.product.name}</div>
            {this.state.product.description}
          </td>
          <td className="center">${this.state.product.price}</td>
          <td>
            <div className="center">{this.state.quantity}</div>
          </td>
          <td>
            <div>
              <div>
                <a
                  onClick={this.handleIncreaseQuantity}
                  className="light-blue waves-effect waves-light btn-small"
                >
                  <i className="tiny material-icons">arrow_upward</i>
                </a>
              </div>
              <div>
                <a
                  onClick={() =>
                    this.props.handleAddToCart(
                      this.state.product.id,
                      this.state.quantity
                    )
                  }
                  className="quantity-button blue waves-effect waves-light btn-small"
                >
                  <i className="tiny material-icons">arrow_forward</i>
                </a>
              </div>
              <div>
                <a
                  onClick={this.handleDecreaseQuantity}
                  className="light-blue waves-effect waves-light btn-small"
                >
                  <i className="tiny material-icons">arrow_downward</i>
                </a>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default SingleProduct;
