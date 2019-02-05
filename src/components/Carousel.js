import React, { Component } from 'react';

class Carousel extends Component {

  constructor(props) {
    super(props);
    // state

    this.state = {
      show: 0,
      imagePrev: this.props.images[this.props.images.length-1],
      imageNow: this.props.images[0],
      imageNext: this.props.images[1],
      primary: this.props.images[0]
    };

    this.moveImages = this.moveImages.bind(this);
    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this);
  };

  /* clickLeft decreases the position you are in the scrolling carousel
   *
   */
  clickLeft() {
    // show will decrease
    if (this.state.show <= 0) {
      this.state.show = this.props.images.length-1;
    }
    else {
      this.state.show -= 1;
    }
    this.moveImages();
  };

  /* clickRight increases the position you are in the scrolling carousel.
   *
   */
  clickRight() {
    // we have two situations, if the user has previously clicked an image or if the image is in the middle being showing
    if (this.state.show >= this.props.images.length-1) {
      this.state.show = 0;
    }
    else {
      this.state.show += 1;
    }
    this.moveImages();
  };

  /* moveImages will find the previous, current and next images to display on the page based
   * on if you pressed the left or right button.
   */
  moveImages() {
    var prev = this.state.show-1;
    if (prev < 0) {
      prev = this.props.images.length-1;
    }
    var next = this.state.show+1;
    if (next > this.props.images.length-1) {
      next = 0;
    }

    this.state.imagePrev = this.props.images[prev];
    this.state.imageNow = this.props.images[this.state.show];
    this.state.imageNext= this.props.images[next];

    this.setState({
      show: this.state.show,
      imagePrev: this.state.imagePrev,
      imageNow: this.state.imageNow,
      imageNext: this.state.imageNext,
      primary: this.props.images[this.state.show]
    });
  }

  clickZoom() {
    console.log("clicked zoom");
    // set the current image to the value of the current id + 1 or equals 1 if at the end
  };

  render() {
    return (
      <div>
        <img className="primary-image" src={this.state.primary.image} alt="item" />
        <p></p>
        <div className="centered zoom">
          <span
            className="zoom-image"
            tabindex="0" 
            alt="zoom in"
            onClick={this.clickZoom}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <span className="medium">View Image</span>
        </div>
        <div className="grid-carousel">
          <div className="grid-image">
            <div
              className="carousel-back"
              onClick={this.clickLeft}
              tabindex="0" />
          </div>
        <div id="imagePrev" className="grid-image">
          <img
            className="primary-image not-selected-image"
            ref="imagePrev"
            data-id={this.state.imagePrev.key}
            onClick={this.clickImage}
            src={this.state.imagePrev.image}
            alt="item" />
        </div>
        <div id="imageNow" className="grid-image">
          <img
            className="primary-image selected-image"
            ref="imageNow"
            data-id={this.state.imageNow.key}
            onClick={this.clickImage}
            src={this.state.imageNow.image}
            alt="item" />
        </div>
        <div id="imageNext" className="grid-image">
          <img
            className="primary-image not-selected-image"
            ref="imageNext" data-id={this.state.imageNext.key}
            onClick={this.clickImage}
            src={this.state.imageNext.image}
            alt="item" />
        </div>
        <div className="grid-image">
          <div
            className="carousel-foward"
            onClick={this.clickRight}
            tabindex="0" />
          </div>
        </div>
      </div>
    );
  };
}

export default Carousel;
