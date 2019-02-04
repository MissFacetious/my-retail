import React, { Component } from 'react';
import Carousel from './components/Carousel'
import Reviews from './components/Reviews'
import Quantity from './components/Quantity'
import Highlights from './components/Highlights'

import './App.css';

// const
const VARIABLE = "YAY";

// props
var myDefault = {

};

class App extends Component {

 constructor(props) {
   super(props);
   // state
   this.state = {

   }
   // buttons
   this.onClick = this.onClick.bind(this);



 }

 onClick() {

 };

 /* called after this component is mounted and load json data at that point */
 componentDidMount() {
    const json = require('./item-data.json');
    console.log(json);
  };

  render() {
    return (
      <div className="content">
        <div className="grid-container">
          <div className="grid-item">

            <div className="text-item-name">Name of Product</div>
            <img src="http://target.scene7.com/is/image/Target/14263758" alt="item" />
            <div><img className="zoom-image" alt="zoom in" /><span className="small">View Image</span></div>
            <Carousel />
            <Reviews />
            </div>
            <div className="grid-item">
            <div><span className="text-item-price">$price</span> <span className="small">online price</span></div>
            <hr />
            <div className="announce-image"><span className="small announce">spend $50, ship FREE</span></div>
            <div className="announce-image"><span className="small announce">$25 gift card with purchase of a select Ninja Blender</span></div>
            <hr />
            <Quantity />
            <div className="grid-container">
              <div className="grid-item">
                <button name="pickUpButton" className="targetButton pickUpButton">Pick Up In Store</button>
                <div className="small">find in a store</div>
                </div>
                <div className="grid-item">
                <button name="addToCartButton" className="targetButton addToCartButton">Add to Cart</button>
                </div>
            </div>
            <Highlights />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
