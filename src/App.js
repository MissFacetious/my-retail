import React, { Component } from 'react';
import Carousel from './components/Carousel'
import Reviews from './components/Reviews'
import Quantity from './components/Quantity'
import Highlights from './components/Highlights'
import './App.css';

class App extends Component {

 constructor(props) {
   super(props);
   // state
   this.state = {
     isLoading: true,
     itemDetails: null,
     title: '',
     images: null,
     price: '',
     online: false,
     instore: false,
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
   this.setState({ isLoading: true });
    const json = require('./item-data.json');
    if (json != null) {
      var myItem = json.CatalogEntryView;

      if (myItem.length > 0) {
        // set object into state
        this.state.itemDetails = myItem[0];

        // parse through title information
        this.state.title = myItem[0].title;

        // parse through image information

        if (myItem[0].Images.length > 0) {
          var myImages = myItem[0].Images;
          if (myImages.length > 0) {
            console.log(myImages[0]);
            var imageCount = myImages[0].imageCount;
            var images = new Array();
            var primary = myImages[0].PrimaryImage[0].image;
            images.push(primary);

            var altImages = myImages[0].AlternateImages;
            for (var i = 0; i < altImages.length; i++) {
                images.push(altImages[i].image);
            }
            this.state.images = images;
          }
        }

        // parse through price information
        var priceOffers = myItem[0].Offers;
        if (priceOffers.length > 0) {
          var offers = priceOffers[0];
          if (offers.OfferPrice.length > 0) {
              var price = offers.OfferPrice[0];
              console.log(price.formattedPriceValue);
              this.state.price = price.formattedPriceValue;
          }
        }

        // these are hilarious because I'm assuming that
        // 0 = available both online and instore,
        // 1 = online,
        // 2 = instore
        // enums will never die.

        // parse through available online
        this.state.online = (myItem[0].purchasingChannelCode == 0 || 1) ? true : false;
        // parse through available instore
        this.state.instore = (myItem[0].purchasingChannelCode == 0 || 2) ? true : false;

        this.setState({ isLoading: false });
      }
    }
  };

  render() {
    //if (this.state.itemDetails == null) {
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div className="content">
        <div className="grid-container">
          <div className="grid-item">
            <div className="text-item-name centered">{this.state.title}</div>
            <img src="http://target.scene7.com/is/image/Target/14263758" alt="item" />
            <div className="small centered"><img className="zoom-image" alt="zoom in" /><span className="small">View Image</span></div>
            <Carousel images={this.state.images}/>
            <Reviews />
            </div>
            <div className="grid-item">
            <div><span className="text-item-price"></span>{this.state.price}<span className="small">online price</span></div>
            <hr />
            <div className="announce-image"><span className="small announce">spend $50, ship FREE</span></div>
            <div className="announce-image"><span className="small announce">$25 gift card with purchase of a select Ninja Blender</span></div>
            <hr />
            <Quantity />
            <div className="grid-container">
              <div className="grid-item">
                <button name="pickUpButton" disabled={!this.state.instore} onClick={this.clickPickUp} className="targetLargeButton pickUpButton">Pick Up In Store</button>
                <div className="small centered">find in a store</div>
                </div>
                <div className="grid-item">
                <button name="addToCartButton" disabled={!this.state.instore} onClick={this.clickAddToCart} className="targetLargeButton addToCartButton">Add to Cart</button>
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
