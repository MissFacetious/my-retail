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
        <div className="grid-container">
          <div className="grid-item">
            <div className="carousel-back" />
          </div>
        <div className="grid-item">
        </div>
        <div className="grid-item">
          <div className="carousel-foward" />
          </div>
        </div>
      </div>
    );
  };
}

export default Carousel;
