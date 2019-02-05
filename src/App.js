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
     //itemDetails: null,
     title: '',
     images: null,
     price: '',
     online: false,
     instore: false,
     quantity: 1
   }
 }

/*
 * Below are onClick actions for each button or interactable object on the page.
 */
 clickPickUp() {
   // TODO: Implement clicking the pick up button
   console.log("TODO: clicked pick up");
 };

 clickAddToCart() {
   // TODO: Implement clicking the add to cart button
   console.log("TODO: clicked add to cart");
 };

 clickAddToRegistry() {
   // TODO: Implement clicking add to registry button
   console.log("TODO: clicked add to registry");
 };

 clickAddToList() {
   // TODO: Implement clicking add to list button
   console.log("TODO: clicked add to list");
 };

 clickShare() {
   // TODO: Implement clicking the share button
   console.log("TODO: clicked share");
 };

 clickZoomIn() {
   // TODO: Implement clicking the zoom in button
   console.log("TODO: clicked zoom in");
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

      // check to see if the item exists
      if (myItem.length > 0) {
        // set object into state
        //this.state.itemDetails = myItem[0];

        // parse through title information
        if (myItem[0].title != null) {
          this.state.title = myItem[0].title;
        }
        else {
          console.warn("There was no title for this product");
        }

        // parse through image information
        if (myItem[0].Images.length > 0) {
          var myImages = myItem[0].Images;
          if (myImages.length > 0) {
            //console.log(myImages[0]);
            var imageCount = myImages[0].imageCount;
            var images = new Array();
            var primary = myImages[0].PrimaryImage[0].image;
            var first = {
              key: 0,
              image: primary
            };
            images.push(first);

            var altImages = myImages[0].AlternateImages;
            for (var i = 0; i < altImages.length; i++) {
              // go figure, they gave me a json file with incorrect urls!
              var other = {
                key: i+1,
                image: altImages[i].image
              };
                //images.push(other);
            }
            images.push({ key: 1, image: "https://media.kohlsimg.com/is/image/kohls/3381489?wid=500&hei=500&op_sharpen=1"});
            images.push({ key: 2, image: "https://media.kohlsimg.com/is/image/kohls/2498484?wid=500&hei=500&op_sharpen=1"});
            this.state.images = images;
          }
          else {
            console.warn("there are no images for this product");
          }
        }
        else {
          console.warn("there are no images for this product");
        }

        // parse through price information
        var priceOffers = myItem[0].Offers;
        if (priceOffers.length > 0) {
          var offers = priceOffers[0];
          if (offers.OfferPrice.length > 0) {
              var price = offers.OfferPrice[0];
              this.state.price = price.formattedPriceValue;
          }
          else {
            console.warn("There was no price for this product");
          }
        }
        else {
          console.warn("There was no price for this product");
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

        // You could add the rest of the information from the json here to be parsed,
        // such as the reviews, product highlights, promotions, etc

        // When we're done with the parsing, we know we'll loaded up the information
        // we need to display on the product page.
        this.setState({ isLoading: false });
      }
      else {
        console.warn("There is no item in the json to look up or the json formatting has changed.");
      }
    }
  };

  render() {
    // render may be called before json is done loading, if that is the case,
    // wait until the isLoading is true, isLoading will be set to true when done.
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }

    return (
      <div className="content">
        <div className="grid-container">
          <div className="grid-item">
            <div className="text-item-name centered">{this.state.title}</div>
            <Carousel images={this.state.images}/>
            </div>
            <div className="grid-item">
            <div><span className="text-item-price">{this.state.price}</span> <span className="small">online price</span></div>
            <hr />
            <div className="announce-image"><span className="small announce">spend $50, ship FREE</span></div>
            <div className="announce-image"><span className="small announce">$25 gift card with purchase of a select Ninja Blender</span></div>
            <hr />
            <Quantity quantity={this.state.quantity} />
            <div className="grid-buttons">
              <div className="grid-button">
                <button name="pickUpButton" disabled={!this.state.instore} onClick={this.clickPickUp} className="targetLargeButton pickUpButton">Pick Up In Store</button>
                <div className="small centered">find in a store</div>
                </div>
                <div className="grid-button">
                <button name="addToCartButton" disabled={!this.state.instore} onClick={this.clickAddToCart} className="targetLargeButton addToCartButton">Add to Cart</button>
                </div>
            </div>
            <div className="grid-returns">
              <div className="grid-return">
                <div className="large">returns</div>
              </div>
              <div className="grid-return">
                <div className="small">The item must be returned within 30 days of the ship date. See return policy for details. Price, promotions, styles and availiblity may vary by store and online.</div>
              </div>
            </div>
            <div className="grid-3buttons">
              <div className="grid-3button">
                <button name="addToRegistryButton" onClick={this.clickAddToRegistry} className="targetSmallButton addToRegistryButton">Add To Registry</button>
              </div>
              <div className="grid-3button">
                <button name="addToListButton" onClick={this.clickAddToList} className="targetSmallButton addToListButton">Add To List</button>
              </div>
              <div className="grid-3button">
                <button name="shareButton" onClick={this.clickShare} className="targetSmallButton shareButton">Share</button>
              </div>
            </div>
            <Highlights />
          </div>
          <div className="grid-item">
            <Reviews />
          </div>
          <div className="grid-item">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
