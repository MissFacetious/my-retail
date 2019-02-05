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

    this.showImages = this.showImages.bind(this);
    this.clickImage = this.clickImage.bind(this);
    this.clickLeft = this.clickLeft.bind(this);
    this.clickRight = this.clickRight.bind(this);
  };

  clickImage(event) {
    //this.setState({ image: e.target.dataset.id });
    console.log("clicked image " + event.target.dataset.id);
    // set the current image to the value of the id clicked
    this.state.show = event.target.dataset.id;

    var imagePrev = this.refs.imagePrev;
    var imageNow = this.refs.imageNow;
    var imageNext = this.refs.imageNext;

    // having a little fun with showing which image is selected currently
    imagePrev.classList.remove("not-selected-image");
    imageNow.classList.remove("not-selected-image");
    imageNext.classList.remove("not-selected-image");

    imagePrev.classList.remove("selected-image");
    imageNow.classList.remove("selected-image");
    imageNext.classList.remove("selected-image");

    imagePrev.classList.add("not-selected-image");
    imageNow.classList.add("not-selected-image");
    imageNext.classList.add("not-selected-image");

    for (var i=0; i < this.props.images.length; i++) {
      if (imagePrev.dataset.id == this.state.show) {
        imagePrev.classList.add("selected-image");
        imagePrev.classList.remove("not-selected-image");
      }
      else if (imageNow.dataset.id == this.state.show) {
        imageNow.classList.add("selected-image");
        imageNow.classList.remove("not-selected-image");
      }
      else if (imageNext.dataset.id == this.state.show) {
        imageNext.classList.add("selected-image");
        imageNext.classList.remove("not-selected-image");
      }
      else {
      }
    }

    this.setState({
      show: this.state.show,
      imagePrev: this.state.imagePrev,
      imageNow: this.state.imageNow,
      imageNext: this.state.imageNext,
      primary: this.props.images[this.state.show]
    });
  };

  clickLeft() {
    console.log("clicked left");
    // show will decrease
    if (this.state.show <= 0) {
      this.state.show = this.props.images.length-1;
    }
    else {
      this.state.show -= 1;
    }

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
    });
  };

  clickRight() {
    console.log("clicked right");
    // show will increase
if (this.props.images.length )
    this.setState({
      show: this.state.show,
      imagePrev: this.state.imagePrev,
      imageNow: this.state.imageNow,
      imageNext: this.state.imageNext,
    });
  };

  showImages() {

    console.log(this.state.show);
    console.log(this.props.images[this.state.show]);
    this.state.imageNow = this.props.images[this.state.show];



    this.setState({
      show: this.state.show,
      imagePrev: this.state.imagePrev,
      imageNow: this.state.imageNow,
      imageNext: this.state.imageNext,
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
          <span className="zoom-image" alt="zoom in" onClick={this.clickZoom}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="medium">View Image</span>
        </div>
        <div className="grid-carousel">
          <div className="grid-image">
            <div className="carousel-back" onClick={this.clickLeft} />
          </div>
        <div id="imagePrev" className="grid-image">
          <img className="primary-image not-selected-image" ref="imagePrev" data-id={this.state.imagePrev.key} onClick={this.clickImage} src={this.state.imagePrev.image} alt="item" />
        </div>
        <div id="imageNow" className="grid-image">
          <img className="primary-image selected-image" ref="imageNow" data-id={this.state.imageNow.key} onClick={this.clickImage} src={this.state.imageNow.image} alt="item" />
        </div>
        <div id="imageNext" className="grid-image">
          <img className="primary-image not-selected-image" ref="imageNext" data-id={this.state.imageNext.key} onClick={this.clickImage} src={this.state.imageNext.image} alt="item" />
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
