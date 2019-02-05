import React, { Component } from 'react';

class Carousel extends Component {

  constructor(props) {
    super(props);
    // state
    this.state = {
      index: 1,
      image1: "http://target.scene7.com/is/image/Target/14263758",
      image2: "http://target.scene7.com/is/image/Target/14263758",
      image3: "http://target.scene7.com/is/image/Target/14263758",
      primary: "http://target.scene7.com/is/image/Target/14263758"
    };

    // populate the default images to show
    if (this.props.images.length >= 1) {
      this.state.image1 = this.props.images[0];
      this.state.image2 = this.props.images[0];
      this.state.image3 = this.props.images[0];
    }
    if (this.props.images.length >= 2) {
      this.state.image2 = this.props.images[1];
      this.state.image3 = this.props.images[0];
    }
    if (this.props.images.length >= 3) {
      this.state.image3 = this.props.images[2];
    }
    this.state.primary = this.state.image2;
    //showImages();
    console.log(this.props.images);

  };

  showImages() {
    if (this.state.index - 1 < 0) {
      this.state.image1 = this.props.images[this.props.images.length-1]; // length - 1
      this.state.image2 = this.props.images[this.state.index]; // index
      this.state.image3 = this.props.images[this.state.index+1]; // index + 1
    }
    else if (this.state.index + 1 > this.props.images.length) {
      this.state.image1 = this.props.images[this.state.index-1]; // index - 1
      this.state.image2 = this.props.images[this.state.index]; // index
      this.state.image3 = this.props.images[0]; // 0
    }
    else {
      this.state.image1 = this.props.images[this.state.index-1]; // index - 1
      this.state.image2 = this.props.images[this.state.index]; // index
      this.state.image3 = this.props.images[this.state.index+1]; // index + 1
    }
    this.state.primary = this.state.image2;
  }

  clickLeft() {
    console.log("clicked left");
    if (this.state.index <= 1) {
      console.log("less than the beginning");
      this.state.index = this.props.images.length;
    }
    else {
      this.state.index--;
    }
  };

  clickRight() {
    console.log("clicked right");
    if (this.state.index >= this.props.images.length) {
      console.log("bigger than the end");
      this.state.index = 0;
    }
    else {
      this.state.index++;
    }

    // set the current image to the value of the current id - 1 or equals length if at the beginning
  };

  clickImage(e) {
    //this.setState({ image: e.target.dataset.id });
    console.log("clicked image " + e.target.dataset.id);
    // set the current image to the value of the id clicked

    this.state.index = e.target.dataset.id;
    this.showImages();
  };

  clickZoom() {
    console.log("clicked zoom");

    // set the current image to the value of the current id + 1 or equals 1 if at the end
  };

  render() {
    return (
      <div>
        <img className="primary-image" src="http://target.scene7.com/is/image/Target/14263758" alt="item" />
        <p></p>
        <div className="centered zoom">
          <span className="zoom-image" alt="zoom in" onClick={this.clickZoom}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="medium">View Image</span>
        </div>
        <div className="grid-carousel">
          <div className="grid-image">
            <div className="carousel-back" onClick={this.clickLeft} />
          </div>
        <div className="grid-image not-selected-image">
          <img className="primary-image" data-id="0" onClick={this.clickImage} src={this.state.image1} alt="item" />
        </div>
        <div className="grid-image selected-image">
          <img className="primary-image" data-id="1" onClick={this.clickImage} src={this.state.image2} alt="item" />
        </div>
        <div className="grid-image not-selected-image">
          <img className="primary-image" data-id="2" onClick={this.clickImage} src={this.state.image3} alt="item" />
        </div>
        <div className="grid-image">
          <div className="carousel-foward" onClick={this.clickRight} />
          </div>
        </div>
      </div>
    );
  };
}

export default Carousel;
