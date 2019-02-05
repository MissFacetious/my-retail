import React, { Component } from 'react';

class Carousel extends Component {

  clickLeft() {
    console.log("clicked left");
  };

  clickRight() {
    console.log("clicked right");
  };

  render() {
    return (
      <div>
        <div className="grid-carousel">
          <div className="grid-image">
            <div className="carousel-back" />
          </div>
        <div className="grid-image">
        </div>
        <div className="grid-image">
          <div className="carousel-foward" />
          </div>
        </div>
      </div>
    );
  };
}

export default Carousel;
