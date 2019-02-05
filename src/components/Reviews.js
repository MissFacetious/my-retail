import React, { Component } from 'react';
import Stars from './Stars'

class Reviews extends Component {



  render() {

    return (
      <div>
        <div className="">overall - view all 14 reviews</div>
        <div className="grid-reviews">
          <div className="grid-review">
            <Stars option="5"/>
          </div>
          <div className="grid-review">
            <Stars option="1"/>
          </div>
          </div>
      </div>
    );
  };
}

export default Reviews;
