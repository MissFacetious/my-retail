import React, { Component } from 'react';

class Quantity extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.quantity
    };
    // bind the functions as they do not do so automatically
    this.quantityChange = this.quantityChange.bind(this);
  }

  // this function will be called when clicking the minus or plus to change the quantity
  // and display it on the page
  quantityChange(event) {
    var changeQuantity = event.target.dataset.id;
    if (changeQuantity != null) {
      changeQuantity = parseInt(changeQuantity, 10);
    }
    if (this.state.quantity > 1 || changeQuantity > 0) { // we shouldn't have quantity be less than 1 to add
      this.state.quantity += changeQuantity;
      this.setState({ quantity: this.state.quantity });
    }
  }

  render() {
    return (
        <div className="boxed">
          <span className="quantity left">quantity: </span>
          &nbsp;
          <span className="right">
            <span className="minus" data-id="-1" onClick={this.quantityChange}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              {this.state.quantity}
            <span className="plus" data-id="1" onClick={this.quantityChange}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </span>
        </div>
      );
  };
}

export default Quantity;
