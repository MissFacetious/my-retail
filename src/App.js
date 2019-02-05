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
 }

/*
 * Below are onClick actions for each button or interactable object on the page.
 */
 clickPickUp() {
   console.log("clicked pick up");
 };

 clickAddToCart() {
   console.log("clicked add to cart");
 };

 clickAddToRegistry() {
   console.log("clicked add to registry");
 };

 clickAddToList() {
   console.log("clicked add to list");
 };

 clickShare() {
   console.log("clicked share");
 };

 clickZoomIn() {
   console.log("clicked zoom in");
 };

 /* componentDidMount
  * Called after this entire component is mounted and load & parse json data at that point.
  */
 componentDidMount() {
   // load json from file
    const json = require('./item-data.json');
    console.log(json);
    // parse out json into an object we can use for the view

    // set object into state

  };

  render() {
    return (
      <div className="content">
        <div className="grid-container">
          <div className="grid-item">
            <div className="text-item-name centered">Name of Product</div>
            <img src="http://target.scene7.com/is/image/Target/14263758" alt="item" />
            <div className="small centered"><img className="zoom-image" alt="zoom in" /><span className="small">View Image</span></div>
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
                <button name="pickUpButton" onClick={this.clickPickUp} className="targetLargeButton pickUpButton">Pick Up In Store</button>
                <div className="small centered">find in a store</div>
                </div>
                <div className="grid-item">
                <button name="addToCartButton" onClick={this.clickAddToCart} className="targetLargeButton addToCartButton">Add to Cart</button>
                </div>
            </div>
            <div className="grid-container">
              <div className="grid-item">
                <div className="large">returns</div>
              </div>
              <div className="grid-item">
                <div className="small">The item must be returned within 30 days of the ship date. See return policy for details. Price, promotions, styles and availiblity may vary by store and online.</div>
              </div>
            </div>
            <button name="addToRegistryButton" onClick={this.clickAddToRegistry} className="targetSmallButton addToRegistryButton">Add To Registry</button>
            <button name="addToListButton" onClick={this.clickAddToList} className="targetSmallButton addToListButton">Add To List</button>
            <button name="shareButton" onClick={this.clickShare} className="targetSmallButton shareButton">Share</button>
            <Highlights />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
