import React, { Component } from 'react';
import Stars from './Stars'

class Reviews extends Component {



  render() {
    return (
      <div>
        <div className="">overall - view all 14 reviews</div>
        <div className="grid-container">
          <div className="grid-item">
            <Stars />
          </div>
          <div className="grid-item">
            <Stars />
          </div>
          </div>
      </div>
    );
  };
}

export default Reviews;
