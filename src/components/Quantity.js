import React, { Component } from 'react';

class Quantity extends Component {

  quantityChange(event) {
    var changeQuantity = event.target.dataset.id;
    if (this.props.quantity > 1) { // we shouldn't have quantity be less than 1 to add
      this.props.quantity += changeQuantity;
    }
  }

  render() {
    return (
        <div className="boxed">
          <span className="quantity left">quantity: </span>
          &nbsp;
          <span className="right">
            <span className="minus" data-id="-1" onClick={this.quantityChange}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              {this.props.quantity}
            <span className="plus" data-id="1" onClick={this.quantityChange}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </span>
        </div>
      );
  };
}

export default Quantity;
